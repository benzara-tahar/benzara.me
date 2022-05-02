import allPosts from '$lib/posts';

/** @type {import('./index').RequestHandler} */
export async function get({ params }) {
	const posts = Object.keys(allPosts).map((slug) => ({
		slug,
		...allPosts[slug]
	}));

	return {
		body: { posts }
	};
}
