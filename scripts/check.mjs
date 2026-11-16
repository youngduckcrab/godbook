// 내용 검사. 하나라도 걸리면 빌드가 실패한다. (npm run check)
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { CONTENT, ROOT, loadConcepts, loadSources, loadCourses, walk, readMd, WIKILINK } from '../src/lib/content-index.mjs';

const errors = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);

const fields = yaml.load(fs.readFileSync(path.join(CONTENT, 'fields.yaml'), 'utf8'));
const concepts = loadConcepts();
const sources = new Set(loadSources().map((s) => s.id));
const courses = loadCourses();
const ids = new Map();

for (const c of concepts) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.id)) err(c.file, 'ID(파일 이름)는 영문 소문자, 숫자, 하이픈만 쓴다');
  if (ids.has(c.id)) err(c.file, `ID가 ${ids.get(c.id).file} 와 겹친다`);
  ids.set(c.id, c);
  if (!c.data) { err(c.file, '머리말(frontmatter)이 없다'); c.data = {}; }
}

const PROVABLE = new Set(['theorem', 'lemma', 'proposition', 'corollary']);
for (const c of concepts) {
  const d = c.data;
  const folder = c.file.split('/')[2];
  if (!fields[d.field]) err(c.file, `분야 '${d.field}' 가 content/fields.yaml 에 없다`);
  if (d.field !== folder) err(c.file, `폴더(${folder})와 field(${d.field})가 다르다`);
  for (const r of d.requires ?? []) {
    if (r === c.id) err(c.file, '자기 자신을 선행 항목으로 둘 수 없다');
    else if (!ids.has(r)) err(c.file, `선행 항목 '${r}' 가 없다`);
  }
  if (!d.sources?.length) err(c.file, '출처가 하나도 없다');
  for (const s of d.sources ?? []) {
    if (!sources.has(s.ref)) err(c.file, `출처 '${s.ref}' 가 content/sources 에 없다`);
    if (!s.loc?.trim()) err(c.file, `출처 '${s.ref}' 의 위치(loc)가 비었다`);
  }
  const opened = (d.sources ?? []).some((s) => s.checked === 'original' || s.checked === 'mirror');
  if (d.status !== 'unverified' && !opened) err(c.file, `status 가 '${d.status}' 인데 실제로 열어 본 출처가 없다`);
  if (d.status === 'reviewed' && !d.review_note) err(c.file, "status 가 'reviewed' 이면 review_note 가 필요하다");
  if (!/^:::statement\s*$/m.test(c.body)) err(c.file, ':::statement 블록이 없다');
  if (!/^:::statement\s*\n[\s\S]*?\n:::\s*\n+:::english\s*$/m.test(c.body)) err(c.file, ':::statement 바로 뒤에 :::english 블록(영어 진술)이 없다');
  const hasProof = /^:::proof\s*$/m.test(c.body);
  if (PROVABLE.has(d.kind)) {
    if (d.proof === 'full' && !hasProof) err(c.file, "proof: full 인데 :::proof 블록이 없다");
    if (d.proof !== 'full' && !d.proof_note) err(c.file, '완전한 증명을 싣지 않은 이유(proof_note)가 필요하다');
  }
  for (const m of c.body.matchAll(WIKILINK)) if (!ids.has(m[1])) err(c.file, `링크 [[${m[1]}]] 의 대상이 없다`);
  const opens = (c.body.match(/^:::[a-z]+/gm) ?? []).length;
  const closes = (c.body.match(/^:::\s*$/gm) ?? []).length;
  if (opens !== closes) err(c.file, `블록 열기(${opens})와 닫기(${closes}) 개수가 다르다`);
}

// 선행 관계에 순환이 없어야 한다.
const state = new Map();
const dfs = (id, trail) => {
  if (state.get(id) === 2) return;
  if (state.get(id) === 1) return err(ids.get(id).file, `선행 관계가 순환한다: ${[...trail, id].join(' → ')}`);
  state.set(id, 1);
  for (const r of ids.get(id)?.data.requires ?? []) if (ids.has(r)) dfs(r, [...trail, id]);
  state.set(id, 2);
};
for (const id of ids.keys()) dfs(id, []);

const courseIds = new Set(courses.map((c) => c.id));
for (const course of courses) {
  if (!course.data) { err(course.file, '머리말이 없다'); continue; }
  for (const r of course.data.requires ?? []) if (!courseIds.has(r)) err(course.file, `선행 강의 '${r}' 가 없다`);
  const seen = new Set();
  for (const u of course.units) {
    if (!/^\d\d-[a-z0-9-]+$/.test(u.slug)) err(u.file, '단원 파일 이름은 01-이름.md 형식이어야 한다');
    for (const m of u.body.matchAll(WIKILINK)) if (!ids.has(m[1])) err(u.file, `링크 [[${m[1]}]] 의 대상이 없다`);
    for (const id of u.data?.concepts ?? []) {
      if (!ids.has(id)) { err(u.file, `항목 '${id}' 가 없다`); continue; }
      if (seen.has(id)) err(u.file, `항목 '${id}' 가 강의 안에서 두 번 나온다`);
      seen.add(id);
    }
  }
  // 강의 안에서는 선행 항목이 먼저 나와야 한다.
  const order = course.units.flatMap((u) => u.data?.concepts ?? []);
  order.forEach((id, i) => {
    for (const r of ids.get(id)?.data.requires ?? []) {
      const j = order.indexOf(r);
      if (j > i) err(course.file, `'${id}' 가 선행 항목 '${r}' 보다 먼저 나온다`);
    }
  });
  if (course.data.status !== 'planned' && !course.units.length) err(course.file, '예정이 아닌 강의에 단원이 없다');
}

for (const file of walk(path.join(CONTENT, 'exercises'), '.md')) {
  const rel = path.relative(ROOT, file);
  const unit = path.relative(path.join(CONTENT, 'exercises'), file).replace(/\.md$/, '');
  if (!courses.some((c) => c.units.some((u) => u.id === unit))) err(rel, `대응하는 단원 content/courses/${unit}.md 가 없다`);
  const { data, body } = readMd(file);
  for (const s of data?.sources ?? []) if (!sources.has(s.ref)) err(rel, `출처 '${s.ref}' 가 없다`);
  for (const m of body.matchAll(WIKILINK)) if (!ids.has(m[1])) err(rel, `링크 [[${m[1]}]] 의 대상이 없다`);
}

if (errors.length) {
  console.error(`내용 검사 실패 (${errors.length}건)\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log(`내용 검사 통과: 항목 ${concepts.length}개, 출처 ${sources.size}개, 강의 ${courses.length}개`);
