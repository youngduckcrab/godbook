#!/usr/bin/env node
// 출처 텍스트(pdftotext 결과)에서 줄바꿈·하이픈에 걸린 낱말까지 찾아, 원문의 줄 번호와 인쇄 쪽을 함께 보여 준다.
// 사용: node scripts/source-grep.mjs <출처.txt> <N> <검색어(정규식, 대소문자 무시)> [앞뒤 글자 수=70]
//   N = PDF 쪽 − 인쇄 쪽 (인쇄 쪽 = PDF 쪽 − N). 쪽은 폼피드(\f) 수로 센다.
// "출처에 없다"고 쓰기 전에 이것으로 책 전체를 찾는다. 0건이어도 기호·수식으로만 적힌 것은 찾지 못한다.
import { readFileSync } from 'node:fs';
const [file, nArg, pattern, ctxArg] = process.argv.slice(2);
if (!file || nArg === undefined || !pattern) { console.error('사용: node scripts/source-grep.mjs <출처.txt> <N> <검색어> [앞뒤 글자 수]'); process.exit(2); }
const N = Number(nArg), ctx = Number(ctxArg ?? 70);
const raw = readFileSync(file, 'utf8');
// 이어 붙인 글과, 그 글의 각 글자가 원문의 어느 위치에서 왔는지의 표를 함께 만든다.
// 조각을 배열에 모았다가 한 번에 붙인다(큰 책에서 문자열을 한 글자씩 붙이면 매우 느리다).
const parts = [], map = [];
let lastSpace = false;
for (let i = 0; i < raw.length; i++) {
  const ch = raw[i];
  if (ch === '-' && raw[i + 1] === '\n' && /[a-z]/.test(raw[i + 2] ?? '')) { i++; while (raw[i + 1] === ' ' || raw[i + 1] === '\t') i++; continue; }
  if (ch === ' ' || ch === '\n' || ch === '\t' || ch === '\f' || ch === '\r') { if (lastSpace) continue; parts.push(' '); map.push(i); lastSpace = true; continue; }
  parts.push(ch); map.push(i); lastSpace = false;
}
const joined = parts.join('');
// 줄의 시작 위치와 쪽이 바뀌는 위치를 미리 구해 둔다.
const lineStart = [0], pageStart = [0];
for (let i = 0; i < raw.length; i++) { if (raw[i] === '\f') pageStart.push(i); if (raw[i] === '\n') lineStart.push(i + 1); }
const upper = (arr, p) => { let lo = 0, hi = arr.length - 1; while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (arr[mid] <= p) lo = mid; else hi = mid - 1; } return lo; };
const pos2line = (p) => upper(lineStart, p) + 1;
const pos2page = (p) => upper(pageStart, p) + 1 - N;
const re = new RegExp(pattern, 'gi');
let count = 0;
for (const m of joined.matchAll(re)) {
  count++;
  const p = map[m.index];
  const s = joined.slice(Math.max(0, m.index - ctx), m.index + m[0].length + ctx);
  console.log(`줄 ${pos2line(p)}, 인쇄 쪽 ${pos2page(p)}: …${s}…`);
  if (count >= 200) { console.log('(200건에서 멈춤)'); break; }
}
console.log(`${count}건`);
