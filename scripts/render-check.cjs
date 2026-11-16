// 빌드된 사이트의 모든 항목 페이지를 열어 화면에 보이는 문제를 찾는다.
// 쓰는 법:  npm run build && (npx astro preview --port 4321 &) && sleep 4 && node scripts/render-check.cjs
// Playwright 가 설치된 환경에서만 돈다 (Claude Code 클라우드 세션에는 설치되어 있다).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.SITE_URL || 'http://localhost:4321/godbook';
const ROOT = path.join(__dirname, '..', 'content', 'concepts');

(async () => {
  const ids = [];
  for (const dir of fs.readdirSync(ROOT)) {
    for (const f of fs.readdirSync(path.join(ROOT, dir))) if (f.endsWith('.md')) ids.push(f.replace(/\.md$/, ''));
  }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 800 } });
  const problems = [];
  page.on('pageerror', (e) => problems.push('스크립트 오류: ' + e.message));
  for (const id of ids) {
    const res = await page.goto(`${BASE}/c/${id}/`, { waitUntil: 'domcontentloaded' });
    if (!res || res.status() !== 200) { problems.push(`${id}: HTTP ${res && res.status()}`); continue; }
    const info = await page.evaluate(() => {
      const text = document.querySelector('article.prose')?.innerText ?? '';
      return {
        katex: document.querySelectorAll('.katex-error').length,
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        rawBlock: /(^|\n):::/.test(text),
        rawLink: /\[\[[a-z0-9-]+/.test(text),
        rawMath: (text.match(/\$[^$\n]{1,40}\$/g) || []).slice(0, 2),
        missing: document.querySelectorAll('a.wikilink.missing').length,
        head: (document.querySelector('h1')?.innerText ?? '') + ' ' + (document.querySelector('p.lead')?.innerText ?? ''),
        english: document.querySelectorAll('.box-english').length,
      };
    });
    if (info.katex) problems.push(`${id}: 수식 오류 ${info.katex}개`);
    if (info.overflow > 0) problems.push(`${id}: 휴대폰 폭(390px)에서 가로로 ${info.overflow}px 넘친다`);
    if (info.rawBlock) problems.push(`${id}: ":::" 가 그대로 보인다 (닫히지 않은 블록)`);
    if (info.rawLink) problems.push(`${id}: "[[" 가 그대로 보인다`);
    if (info.rawMath.length) problems.push(`${id}: 수식이 글자로 보인다 ${JSON.stringify(info.rawMath)}`);
    if (info.missing) problems.push(`${id}: 대상이 없는 링크 ${info.missing}개`);
    if (/[$\\]/.test(info.head)) problems.push(`${id}: 제목이나 요약에 수식이 글자로 보인다`);
    if (info.english !== 1) problems.push(`${id}: 영어 진술 상자가 ${info.english}개`);
  }
  await browser.close();
  console.log(`항목 페이지 ${ids.length}개 확인`);
  if (problems.length) { console.log(problems.map((p) => '  - ' + p).join('\n')); process.exit(1); }
  console.log('문제 없음');
})();
