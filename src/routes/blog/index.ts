import allPosts from '$lib/blog/posts';

/** @type {import('./index').RequestHandler} */
export async function get() {
  const posts = Object.keys(allPosts).map((slug) => ({
    slug,
    ...allPosts[slug],
  }));

  return {
    body: { posts },
  };
}
