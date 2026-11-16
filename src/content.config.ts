import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const base = (p: string) => p.split('/').pop()!.replace(/\.(md|yaml)$/, '');

export const KINDS = ['definition', 'axiom', 'theorem', 'lemma', 'proposition', 'corollary', 'method'] as const;
export const LEVELS = ['intro', 'undergrad', 'grad', 'research'] as const;
export const STATUSES = ['reviewed', 'source-checked', 'unverified'] as const;

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/concepts', generateId: ({ entry }) => base(entry) }),
  schema: z.object({
    title: z.string(),
    title_en: z.string(),
    aliases: z.array(z.string()).default([]),
    kind: z.enum(KINDS),
    field: z.string(),
    msc: z.array(z.string()).default([]),
    level: z.enum(LEVELS),
    summary: z.string(),
    requires: z.array(z.string()).default([]),
    proof: z.enum(['full', 'sketch', 'none']).default('none'),
    proof_note: z.string().optional(),
    sources: z.array(z.object({
      ref: z.string(),
      loc: z.string(),
      checked: z.enum(['original', 'mirror', 'not-opened']),
      note: z.string().optional(),
    })).min(1),
    status: z.enum(STATUSES),
    review_note: z.string().optional(),
    added: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }).strict(),
});

const sources = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './content/sources', generateId: ({ entry }) => base(entry) }),
  schema: z.object({
    type: z.enum(['book', 'paper', 'lecture-notes', 'web', 'thesis']),
    authors: z.array(z.string()).min(1),
    title: z.string(),
    edition: z.string().optional(),
    year: z.number().int(),
    publisher: z.string().optional(),
    journal: z.string().optional(),
    url: z.string().url(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    isbn: z.string().optional(),
    access: z.enum(['open', 'closed']),
    license: z.string().optional(),
    note: z.string().optional(),
  }).strict(),
});

const courses = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './content/courses', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: z.object({
    title: z.string(),
    title_en: z.string(),
    summary: z.string(),
    level: z.enum(LEVELS),
    order: z.number(),
    track: z.string(),
    requires: z.array(z.string()).default([]),
    status: z.enum(['planned', 'in-progress', 'complete']),
    planned_units: z.array(z.string()).default([]),
  }).strict(),
});

const units = defineCollection({
  loader: glob({ pattern: '*/!(index).md', base: './content/courses', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    concepts: z.array(z.string()).min(1),
  }).strict(),
});

const exercises = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './content/exercises', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    written_by: z.string(),
    status: z.enum(['reviewed', 'unreviewed']),
    sources: z.array(z.object({ ref: z.string(), loc: z.string() })).default([]),
    added: z.coerce.date(),
  }).strict(),
});

export const collections = { concepts, sources, courses, units, exercises };
