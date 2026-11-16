import { defineCollection, z } from 'astro:content';

// Texto localizado: pt é obrigatório; en/es caem para pt quando ausentes (pickLocalized).
const localized = z.object({
  pt: z.string(),
  en: z.string().optional(),
  es: z.string().optional(),
});

const shot = z.object({
  src: z.string(),
  device: z.enum(['desktop', 'mobile']),
  alt: localized,
  caption: localized.optional(),
});

const titledText = z.object({
  title: localized,
  text: localized,
});

// Um arquivo YAML por projeto em src/content/projects/<id>.yaml.
// O id do arquivo é o slug da URL (/projetos/<id>/).
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    // ─── Card na home ───
    order: z.number(),
    name: z.string(),
    icon: z.string(),
    playStore: z.boolean().default(false),
    link: z.string().url().nullable().default(null),
    type: localized,
    tagline: localized,
    description: localized,
    stack: z.array(z.string()),

    // ─── Página de detalhes (tudo opcional: seções vazias não renderizam) ───
    year: z.string().optional(),
    status: localized.optional(),
    role: localized.optional(),
    summary: z.array(localized).default([]),
    problem: localized.optional(),
    audience: localized.optional(),
    features: z.array(titledText).default([]),
    stackLayers: z
      .array(
        z.object({
          layer: z.enum(['frontend', 'backend', 'mobile', 'desktop', 'data', 'infra']),
          items: z.array(z.string()),
        })
      )
      .default([]),
    challenges: z.array(titledText).default([]),
    cover: shot.optional(),
    gallery: z.array(shot).default([]),
  }),
});

export const collections = { projects };
