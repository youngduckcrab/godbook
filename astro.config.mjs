import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeKatex from 'rehype-katex';
import { remarkBlocks } from './src/plugins/remark-blocks.mjs';
import { remarkWikiLinks } from './src/plugins/remark-wikilinks.mjs';

const base = '/godbook';

export default defineConfig({
  site: 'https://youngduckcrab.github.io',
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkBlocks, [remarkWikiLinks, { base }]],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
  },
});
