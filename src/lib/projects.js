import { getCollection } from 'astro:content';

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

// Usado pelas 3 rotas de detalhe (pt/en/es). Anterior/próximo dão a volta na lista.
export async function projectStaticPaths() {
  const all = await getProjects();
  return all.map((project, i) => ({
    params: { slug: project.id },
    props: {
      project,
      prev: all[(i - 1 + all.length) % all.length],
      next: all[(i + 1) % all.length],
      total: all.length,
    },
  }));
}
