import fs from 'node:fs';
import * as yaml from 'js-yaml';
import { getCollection, type CollectionEntry } from 'astro:content';

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p: string) => `${BASE}${p}`;

export type Concept = CollectionEntry<'concepts'>;

export const KIND: Record<string, string> = {
  definition: '정의', axiom: '공리', theorem: '정리', lemma: '보조정리',
  proposition: '명제', corollary: '따름정리', method: '증명 기법',
};
export const LEVEL: Record<string, string> = { intro: '입문', undergrad: '학부', grad: '대학원', research: '연구' };
export const STATUS: Record<string, { label: string; desc: string }> = {
  reviewed: { label: '재검토 완료', desc: '출처와 대조했고, 별도의 검토 에이전트가 진술과 증명을 독립적으로 다시 검사했습니다.' },
  'source-checked': { label: '출처 대조', desc: '출처와 대조했지만 독립 재검토는 아직 하지 않았습니다.' },
  unverified: { label: '미확인', desc: '출처 원문을 열어 대조하지 못했습니다.' },
};
export const CHECKED: Record<string, string> = { original: '원문 확인', mirror: '미러본으로 확인', 'not-opened': '원문 미확인' };
export const COURSE_STATUS: Record<string, string> = { planned: '예정', 'in-progress': '진행 중', complete: '완성' };

export const FIELDS: Record<string, { title: string; title_en: string; msc: string }> =
  yaml.load(fs.readFileSync('content/fields.yaml', 'utf8')) as any;

export async function loadAll() {
  const concepts = await getCollection('concepts');
  const byId = new Map(concepts.map((c) => [c.id, c]));
  const usedBy = new Map<string, Concept[]>();
  for (const c of concepts) for (const r of c.data.requires) {
    if (!usedBy.has(r)) usedBy.set(r, []);
    usedBy.get(r)!.push(c);
  }
  const courses = (await getCollection('courses')).sort((a, b) => a.data.order - b.data.order);
  const units = (await getCollection('units')).sort((a, b) => a.id.localeCompare(b.id));
  const unitsOf = (courseId: string) => units.filter((u) => u.id.startsWith(courseId + '/'));
  // Reading order of a course: concepts in unit order.
  const sequence = (courseId: string) => unitsOf(courseId).flatMap((u) => u.data.concepts.map((id) => ({ id, unit: u })));
  const sources = await getCollection('sources');
  return { concepts, byId, usedBy, courses, units, unitsOf, sequence, sources };
}

// All transitive prerequisites, in an order where each item comes after what it needs.
export function prerequisiteOrder(id: string, byId: Map<string, Concept>): Concept[] {
  const seen = new Set<string>();
  const out: Concept[] = [];
  const visit = (x: string) => {
    for (const r of byId.get(x)?.data.requires ?? []) {
      if (seen.has(r)) continue;
      seen.add(r);
      visit(r);
      const c = byId.get(r);
      if (c) out.push(c);
    }
  };
  visit(id);
  return out;
}

export const unitSlug = (unitId: string) => unitId.split('/')[1];
export const unitNo = (unitId: string) => Number(unitSlug(unitId).split('-')[0]);
