import skills from '$lib/data/skills.json';
import about from '$lib/data/about.json';
import education from '$lib/data/education.json';
import experiences from '$lib/data/experiences.json';

/** @type {import('./index.svelte').RequestHandler} */
export async function get({ params }) {
	// `params.id` comes from [id].js

	const message = 'hello';
	return {
		body: { skills, about, education, experiences }
	};
}
