// [[concept-id]] or [[concept-id|표시할 글]] -> link to the concept page.
import { visit } from 'unist-util-visit';
import { loadConcepts, WIKILINK } from '../lib/content-index.mjs';

export function remarkWikiLinks({ base = '' } = {}) {
  return (tree) => {
    const titles = new Map(loadConcepts().map((c) => [c.id, c.data?.title ?? c.id]));
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null || !node.value.includes('[[')) return;
      const parts = [];
      let last = 0;
      for (const m of node.value.matchAll(WIKILINK)) {
        if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
        const [, id, label] = m;
        const known = titles.has(id);
        parts.push({
          type: 'link',
          url: `${base}/c/${id}/`,
          data: { hProperties: { class: known ? 'wikilink' : 'wikilink missing' } },
          children: [{ type: 'text', value: label ?? titles.get(id) ?? id }],
        });
        last = m.index + m[0].length;
      }
      if (!parts.length) return;
      if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...parts);
      return index + parts.length;
    });
  };
}
