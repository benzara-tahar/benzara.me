import posts from '$lib/blog/posts';

export function get({ params }) {
	console.log('___________________________________', params, '🍗🥩🍠');
	const post = posts.find((x) => x.slug === params.slug);
	if (post) {
		return {
			body: { post }
		};
	}

	return {
		status: 404
	};
}
