// Reads the content folder directly (no Astro). Shared by the checker and the remark plugins.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
export const CONTENT = path.join(ROOT, 'content');

export function walk(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, ext));
    else if (e.name.endsWith(ext)) out.push(p);
  }
  return out.sort();
}

export function readMd(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: null, body: raw };
  return { data: yaml.load(m[1]) ?? {}, body: m[2] };
}

export function loadConcepts() {
  return walk(path.join(CONTENT, 'concepts'), '.md').map((file) => {
    const { data, body } = readMd(file);
    return { id: path.basename(file, '.md'), file: path.relative(ROOT, file), data, body };
  });
}

export function loadSources() {
  return walk(path.join(CONTENT, 'sources'), '.yaml').map((file) => ({
    id: path.basename(file, '.yaml'),
    file: path.relative(ROOT, file),
    data: yaml.load(fs.readFileSync(file, 'utf8')),
  }));
}

export function loadCourses() {
  const dir = path.join(CONTENT, 'courses');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => {
    const cdir = path.join(dir, e.name);
    const index = readMd(path.join(cdir, 'index.md'));
    const units = fs.readdirSync(cdir).filter((f) => f.endsWith('.md') && f !== 'index.md').sort().map((f) => {
      const u = readMd(path.join(cdir, f));
      return { id: `${e.name}/${f.replace(/\.md$/, '')}`, slug: f.replace(/\.md$/, ''), file: path.relative(ROOT, path.join(cdir, f)), ...u };
    });
    return { id: e.name, file: path.relative(ROOT, path.join(cdir, 'index.md')), data: index.data, body: index.body, units };
  });
}

export const WIKILINK = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
