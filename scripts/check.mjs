// 내용 검사. 하나라도 걸리면 빌드가 실패한다. (npm run check)
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { CONTENT, ROOT, loadConcepts, loadSources, loadCourses, walk, readMd, WIKILINK } from '../src/lib/content-index.mjs';

const errors = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warns = [];
const warn = (file, msg) => warns.push(`${file}: ${msg}`);

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
  if (/[$\\]/.test(d.summary ?? '')) err(c.file, 'summary 에는 수식($...$)이나 LaTeX 명령을 쓸 수 없다 (글자 그대로 표시된다). 말이나 유니코드 기호로 쓴다');
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
    if (/[$\\]/.test(u.data?.summary ?? '')) err(u.file, 'summary 에는 수식이나 LaTeX 명령을 쓸 수 없다');
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

// 항목이 실린 강의(항목 id → 강의 id)와 강의의 선행 강의 전체.
const courseOfItem = new Map();
for (const course of courses) for (const u of course.units) for (const id of u.data?.concepts ?? []) if (!courseOfItem.has(id)) courseOfItem.set(id, course.id);
const courseById = new Map(courses.map((c) => [c.id, c]));
const reqClosure = (id, seen = new Set()) => {
  for (const r of ids.get(id)?.data.requires ?? []) if (!seen.has(r)) { seen.add(r); reqClosure(r, seen); }
  return seen;
};
const courseClosure = (cid, seen = new Set()) => {
  for (const r of courseById.get(cid)?.data?.requires ?? []) if (!seen.has(r)) { seen.add(r); courseClosure(r, seen); }
  return seen;
};

for (const file of walk(path.join(CONTENT, 'exercises'), '.md')) {
  const rel = path.relative(ROOT, file);
  const unit = path.relative(path.join(CONTENT, 'exercises'), file).replace(/\.md$/, '');
  const course = courses.find((c) => c.units.some((u) => u.id === unit));
  if (!course) err(rel, `대응하는 단원 content/courses/${unit}.md 가 없다`);
  const { data, body } = readMd(file);
  for (const s of data?.sources ?? []) if (!sources.has(s.ref)) err(rel, `출처 '${s.ref}' 가 없다`);
  if (data?.written_by && /claude-[a-z]+-?\d|sonnet|haiku|opus|fable/i.test(data.written_by)) err(rel, 'written_by 에 모델 이름을 쓰지 않는다(Claude 로 쓴다)');
  // 연습문제는 그 단원까지 배운 항목만 쓴다: 같은 강의의 뒤 단원 항목과, 선행 강의가 아닌 강의의 항목을 가리킬 수 없다.
  const idx = course ? course.units.findIndex((u) => u.id === unit) : -1;
  const later = new Set(course ? course.units.slice(idx + 1).flatMap((u) => u.data?.concepts ?? []) : []);
  const allowedCourses = course ? new Set([course.id, ...courseClosure(course.id)]) : new Set();
  // 강의가 다른 강의의 항목을 하나씩 빌리는 일(예: real-number-arithmetic)이 많으므로, 그 단원까지의 항목이 선행으로 쓰는 항목도 허용한다.
  const borrowed = new Set();
  if (course) for (const u of course.units.slice(0, idx + 1)) for (const id of u.data?.concepts ?? []) for (const r of reqClosure(id)) borrowed.add(r);
  for (const m of body.matchAll(WIKILINK)) {
    if (!ids.has(m[1])) { err(rel, `링크 [[${m[1]}]] 의 대상이 없다`); continue; }
    if (later.has(m[1])) err(rel, `[[${m[1]}]] 는 이 강의의 뒤 단원 항목이다(연습문제는 그 단원까지 배운 항목만 쓴다)`);
    const owner = courseOfItem.get(m[1]);
    if (course && owner && !allowedCourses.has(owner) && !borrowed.has(m[1])) err(rel, `[[${m[1]}]] 는 선행 강의가 아닌 '${owner}' 의 항목이다`);
  }
}



// ---- 경고 (빌드를 막지 않는다). 검토에서 반복해 나온 실수를 미리 알려 준다. ----
const titleOf = new Map(concepts.map((c) => [c.id, String(c.data.title ?? c.id)]));
const hasFinal = (word) => {
  const ch = word[word.length - 1];
  if (ch < '가' || ch > '힣') return null;
  return (ch.charCodeAt(0) - 0xac00) % 28 !== 0;
};
// 받침이 있을 때만 / 없을 때만 올 수 있는 조사 (서술격 조사 "이-"는 제외)
const AFTER_FINAL = ['으로', '은', '을', '과'];
const AFTER_VOWEL = ['는', '를', '와', '가'];
const UNDEFINED_SYMBOLS = ['\\iff', '\\Leftrightarrow', '\\mapsto', '\\subsetneq', '\\supsetneq', '\\implies', '\\sum'];
const closure = (id, seen = new Set()) => {
  for (const r of ids.get(id)?.data.requires ?? []) if (!seen.has(r)) { seen.add(r); closure(r, seen); }
  return seen;
};
function lintBody(file, body, requires, self) {
  // 번호 목록의 항목 안에 줄 수식($$)을 들여쓰지 않고 쓰면 목록이 거기서 끊겨 뒤 번호가 한 문단에 글자로 붙어 보인다.
  {
    const lines = body.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (!/^\d+\. /.test(lines[i])) continue;
      for (let j = i + 1; j < lines.length && lines[j].trim() !== '' && !/^(\d+\. |:::|#)/.test(lines[j]); j++) {
        if (lines[j].startsWith('$$')) { warn(file, `번호 목록 ${lines[i].slice(0, 12)}… 안의 줄 수식($$)을 들여쓰지 않았다. $$ 블록과 이어지는 문장을 공백 3칸으로 들여쓴다`); break; }
      }
    }
  }
  // 블록 제목 안의 대괄호가 짝이 맞지 않으면(예: 반열린구간 [0, 1)) 제목이 깨져 ":::check[" 가 화면에 그대로 보인다.
  for (const m of body.matchAll(/^:::[a-z]+\[(.*)$/gm)) {
    const rest = m[1];
    let depth = 1, end = -1;
    for (let i = 0; i < rest.length; i++) {
      if (rest[i] === '[') depth++;
      else if (rest[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1 || rest.slice(end + 1).trim() !== '')
      warn(file, `블록 제목의 대괄호 짝이 맞지 않는다: "${rest.slice(0, 40)}". 반열린구간은 집합 표기나 말로 쓴다`);
  }
  const text = body.replace(/^:::english\s*\n[\s\S]*?\n:::\s*$/m, '');
  for (const m of text.matchAll(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]([가-힣]{0,2})/g)) {
    const [, id, label, after] = m;
    if (!titleOf.has(id)) continue;
    const shown = label ?? titleOf.get(id);
    if (!label && /[,()·:]|이다$|한다$/.test(shown)) warn(file, `링크 [[${id}]] 가 "${shown}${after}" 로 보인다. [[${id}|표시할 말]] 을 붙인다`);
    const fin = hasFinal(shown.replace(/[\s)\]"']+$/, ''));
    if (fin === null || !after) continue;
    const bad = (fin ? AFTER_VOWEL : AFTER_FINAL).find((j) => after.startsWith(j) && !['가지', '가운', '과정', '와서', '은근'].some((w) => after.startsWith(w)));
    if (bad) warn(file, `조사가 안 맞는다: "${shown}${after}" ([[${id}]])`);
  }
  // 링크의 표시말에 수식이 있으면 링크가 풀리지 않고 [[ 가 그대로 보인다.
  for (const m of text.matchAll(/\[\[[a-z0-9-]+\|[^\]]*\$[^\]]*\]\]/g)) warn(file, `링크의 표시말에 수식($)이 있다: ${m[0].slice(0, 60)}`);
  // 탭과 제어 문자: \\text 의 \\t 가 탭으로 바뀌는 사고가 있었다. 화면에서 수식이 깨진다.
  text.split('\n').forEach((line, i) => { if (/[\x00-\x09\x0b-\x1f]/.test(line)) warn(file, `본문 ${i + 1}번째 줄에 탭이나 제어 문자가 있다`); });
  // 수식 구분 기호: 본문의 한 문단(줄) 안에서 $ 의 개수가 홀수이면 수식이 깨져 보인다.
  let inDisplay = false;
  text.split('\n').forEach((line, i) => {
    if (line.trim() === '$$') { inDisplay = !inDisplay; return; }
    if ((line.split('$$').length - 1) % 2 === 1) { warn(file, `본문 ${i + 1}번째 줄: 여러 줄 수식의 $$ 는 홀로 한 줄에 둔다(같은 줄에 수식을 쓰면 화면에서 깨진다)`); return; }
    if (inDisplay) return;
    const n = (line.replace(/\\\$/g, '').match(/\$/g) || []).length;
    if (n % 2 === 1) warn(file, `본문 ${i + 1}번째 줄의 $ 가 홀수 개다(${n}개). 수식을 여닫는 $ 가 빠졌는지 본다`);
  });
  // 유한 합의 기호는 finite-sum-of-reals 가 정의한다. 그 항목이 선행에 있을 때와 리만 적분·급수와 멱급수 강의의 단원 글에서만 쓴다.
  const sumDefined = self === 'finite-sum-of-reals' || (self && closure(self).has('finite-sum-of-reals')) || file.includes('courses/riemann-integral/') || file.includes('courses/series-and-power-series/');
  for (const sym of UNDEFINED_SYMBOLS) {
    if (sym === '\\sum' && sumDefined) continue;
    if (text.includes(sym)) warn(file, sym === '\\sum' ? '유한 합의 기호 \\sum 을 쓰는데 finite-sum-of-reals 가 선행(requires)에 없다' : `정의하지 않은 기호 ${sym} 를 쓴다. 문장으로 풀어 쓴다`);
  }
  if (text.includes('\\tag')) warn(file, '\\tag 를 쓴다. 꼬리표가 식 바로 뒤에 붙어 곱처럼 읽힌다. 식에 문장으로 이름을 붙인다');
  if (/(위|아래|앞|뒤|끝)의?\s*remark|remark\s*(에서|참조|에 의해)/.test(text)) warn(file, '본문에서 "remark" 라는 낱말로 블록을 가리킨다. 블록의 제목으로 가리킨다');
  if (requires) {
    // requires 는 진술·증명·예시·확인 질문이 쓰는 항목이다. 블록 밖 산문(직관, 역사)의 안내 링크는 보지 않는다.
    const blocks = [...text.matchAll(/^:::[a-z]+[^\n]*\n([\s\S]*?)\n:::\s*$/gm)].map((m) => m[1]).join('\n');
    const linked = new Set([...blocks.matchAll(WIKILINK)].map((m) => m[1]));
    // 이 항목을 선행으로 삼는 뒤 항목으로의 안내 링크는 제외한다.
    const missing = [...linked].filter((id) => ids.has(id) && !requires.has(id) && !closure(id).has(self));
    if (missing.length) warn(file, `본문에서 쓰지만 requires 에 없는 항목: ${missing.join(', ')}`);
  }
}
for (const c of concepts) lintBody(c.file, c.body, new Set([c.id, ...closure(c.id)]), c.id);

// 번호 글자 인용: 본문에 쓴 (Z1), (K9) 같은 번호는 그 번호를 진술에서 정한 항목이 requires(거쳐 오는 것 포함)에 있어야 한다.
// 번호를 정한 항목 = :::statement 에 그 번호가 있고, 자기 선행 항목들의 진술에는 그 번호가 없는 항목.
const LABEL = /\(([A-Z])(\d+)\)/g;
const stmtOf = (body) => [...body.matchAll(/^:::statement[^\n]*\n([\s\S]*?)\n:::\s*$/gm)].map((m) => m[1]).join('\n');
const stmtLabels = new Map(concepts.map((c) => [c.id, new Set([...stmtOf(c.body).matchAll(LABEL)].map((m) => m[1] + m[2]))]));
const definers = new Map();
for (const c of concepts) for (const lab of stmtLabels.get(c.id)) {
  if ([...closure(c.id)].some((r) => stmtLabels.get(r)?.has(lab))) continue;
  if (!definers.has(lab)) definers.set(lab, []);
  definers.get(lab).push(c.id);
}
for (const c of concepts) {
  const reach = new Set([c.id, ...closure(c.id)]);
  // 증명·예시·반례·확인 질문 블록만 본다(산문과 참고에서 다른 강의의 번호를 글로 가리키는 것은 허용).
  const text = [...c.body.matchAll(/^:::(?:proof|example|counterexample|check)[^\n]*\n([\s\S]*?)\n:::\s*$/gm)].map((m) => m[1]).join('\n');
  const miss = new Map();
  for (const m of text.matchAll(LABEL)) {
    const lab = m[1] + m[2];
    const defs = definers.get(lab);
    if (!defs || defs.length !== 1) continue; // 정한 곳이 없거나 둘 이상이면 판단하지 않는다
    if (!reach.has(defs[0])) miss.set(defs[0], [...(miss.get(defs[0]) ?? []), `(${lab})`]);
  }
  for (const [id, labs] of miss) warn(c.file, `${[...new Set(labs)].join(', ')} 를 쓰지만 그것을 정한 항목 ${id} 가 requires 에 없다`);
}
// 강의 소개 글의 낡은 안내: 작성 예정 단원이 없는데 "작성 예정"을 말한다.
for (const course of courses) {
  if ((course.data?.planned_units ?? []).length === 0 && /작성 예정/.test(course.body ?? '')) warn(course.file ?? course.id, '작성 예정인 단원이 없는데 본문이 "작성 예정"을 말한다');
}
for (const course of courses) for (const u of course.units) lintBody(u.file, u.body, null);
// 연습문제 파일에도 같은 형식 검사를 한다(링크 표시말, 조사, 미정의 기호 등).
for (const file of walk(path.join(CONTENT, 'exercises'), '.md')) {
  // Σ 는 finite-sum-of-reals 를 배운 강의(리만 적분과 그 뒤 강의)의 연습문제에서 쓸 수 있다.
  const unit = path.relative(path.join(CONTENT, 'exercises'), file).replace(/\.md$/, '');
  const course = courses.find((c) => c.units.some((u) => u.id === unit));
  const owner = courseOfItem.get('finite-sum-of-reals');
  const sumOk = course && owner && (course.id === owner || courseClosure(course.id).has(owner));
  lintBody(path.relative(ROOT, file), readMd(file).body, null, sumOk ? 'finite-sum-of-reals' : undefined);
}

// 출처 메모는 YAML 의 큰따옴표 문자열이라 \ne, \neq, \to, \theta 같은 LaTeX 의 역슬래시가 줄바꿈·탭 같은 이스케이프로 읽힌다.
// 메모 안의 LaTeX 는 역슬래시를 둘(\\ne)로 쓴다. 읽힌 결과에 제어 문자가 있으면 그렇게 깨진 것이다.
for (const c of concepts) for (const src of c.data?.sources || []) for (const k of ['loc', 'note']) {
  const v = typeof src[k] === 'string' ? src[k] : '';
  const m = v.match(/.{0,15}[\x00-\x08\x0a-\x1f].{0,15}/s);
  if (m) warn(c.file, `출처의 ${k} 에 제어 문자(줄바꿈·탭 등)가 있다: ${JSON.stringify(m[0])}. 큰따옴표 안의 LaTeX 역슬래시는 둘로 쓴다(\\\\ne)`);
}

// 수식의 HTML 을 만드는 KaTeX(rehype-katex 가 쓰는 것)와 CSS 를 주는 KaTeX 의 버전이 다르면
// 윗줄(\\overline), 부정 기호(\\ne) 같은 것이 화면에서 사라지거나 어긋난다.
{
  const ver = (p) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8')).version; } catch { return null; } };
  const cssVer = ver('node_modules/katex/package.json');
  const renderVer = ver('node_modules/rehype-katex/node_modules/katex/package.json') ?? cssVer;
  if (cssVer && renderVer && cssVer !== renderVer) {
    err('package.json', `katex CSS 의 버전(${cssVer})이 rehype-katex 가 쓰는 katex(${renderVer})와 다르다. package.json 의 katex 를 ${renderVer} 로 맞춘다`);
  }
}

if (warns.length && !process.argv.includes('--quiet')) {
  console.warn(`경고 ${warns.length}건 (빌드는 계속된다)\n` + warns.map((e) => '  - ' + e).join('\n'));
}

if (errors.length) {
  console.error(`내용 검사 실패 (${errors.length}건)\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log(`내용 검사 통과: 항목 ${concepts.length}개, 출처 ${sources.size}개, 강의 ${courses.length}개`);
