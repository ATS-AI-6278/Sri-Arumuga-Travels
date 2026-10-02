import type { BlogPost } from './types';
import { ALL_POSTS } from './posts';

/** Full article with body — import only from blog article page / prerender. */
export function getFullPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getAllFullPosts(): BlogPost[] {
  return [...ALL_POSTS];
}
