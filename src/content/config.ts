import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // A — Basisinformationen
    title: z.string(),
    excerpt: z.string(),
    featured_image: z.string().optional().default(''),
    featured_image_alt: z.string().optional().default(''),
    date_published: z.coerce.date(),
    date_modified: z.coerce.date().optional(),
    status: z.enum(['Entwurf', 'Review', 'Freigegeben', 'Archiviert']).default('Entwurf'),

    // B — Autor & E-E-A-T
    author_name: z.string().optional().default(''),
    author_bio: z.string().optional().default(''),
    expert_reviewer: z.string().optional().default(''),

    // C — SEO
    seo_title: z.string().optional().default(''),
    meta_description: z.string().optional().default(''),
    focus_keyword: z.string().optional().default(''),
    secondary_keywords: z.array(z.string()).optional().default([]),
    keyword_variations: z.array(z.string()).optional().default([]),
    canonical_url: z.string().optional().default(''),
    url_slug: z.string().optional().default(''),
    robots: z.string().optional().default('index, follow'),

    // D — GEO
    content_summary: z.string().optional().default(''),
    topic_cluster: z.string().optional().default(''),
    entities: z.object({
      brands: z.array(z.string()).optional().default([]),
      technologies: z.array(z.string()).optional().default([]),
      concepts: z.array(z.string()).optional().default([]),
      locations: z.array(z.string()).optional().default([]),
    }).optional(),
    definition_terms: z.array(z.object({
      term: z.string(),
      definition: z.string(),
    })).optional().default([]),
    quotable_sentences: z.array(z.string()).optional().default([]),
    answers_to_questions: z.array(z.string()).optional().default([]),
    schema_type: z.string().optional().default('BlogPosting'),

    // E — Social
    og_title: z.string().optional().default(''),
    og_description: z.string().optional().default(''),
    og_image: z.string().optional().default(''),
    twitter_card: z.string().optional().default('summary_large_image'),
    twitter_title: z.string().optional().default(''),
    twitter_description: z.string().optional().default(''),

    // F — Klassifikation
    category: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    blueprint_type: z.string().optional().default(''),
    buyer_journey_phase: z.string().optional().default(''),
    content_type: z.string().optional().default(''),
    target_audience: z.array(z.string()).optional().default([]),
    industry_focus: z.array(z.string()).optional().default([]),
    company_size: z.array(z.string()).optional().default([]),
    difficulty_level: z.string().optional().default(''),
    estimated_read_time: z.string().optional().default(''),

    // G — CTAs
    primary_cta_text: z.string().optional().default(''),
    primary_cta_url: z.string().optional().default(''),
    secondary_cta_text: z.string().optional().default(''),
    secondary_cta_url: z.string().optional().default(''),

    // H — Verlinkung
    related_articles: z.array(z.string()).optional().default([]),
    prerequisite_articles: z.array(z.string()).optional().default([]),
    follow_up_articles: z.array(z.string()).optional().default([]),
    pillar_page: z.string().optional().default(''),

    // I — FAQs (für JSON-LD FAQPage-Schema)
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),

    // J — Statistiken
    statistics: z.array(z.object({
      value: z.string(),
      description: z.string(),
      source: z.string().optional().default(''),
      year: z.string().optional().default(''),
    })).optional().default([]),

    // K — Quellen
    sources: z.array(z.object({
      id: z.number().optional(),
      title: z.string(),
      url: z.string(),
      type: z.string().optional().default(''),
      author: z.string().optional().default(''),
      date: z.string().optional().default(''),
    })).optional().default([]),

    // L — QA (intern)
    qa_checklist: z.object({
      structural_quality: z.boolean().optional().default(false),
      content_quality: z.boolean().optional().default(false),
      b2b_quality: z.boolean().optional().default(false),
      seo_quality: z.boolean().optional().default(false),
      geo_quality: z.boolean().optional().default(false),
      conversion_quality: z.boolean().optional().default(false),
      peer_reviewed: z.boolean().optional().default(false),
    }).optional(),
  }),
});

export const collections = { blog };
