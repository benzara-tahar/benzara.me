/** @type {import('@sveltejs/kit').RequestHandler} */
export function get(event) {
	console.log('❤💡');
	console.log(event);
	console.log('❤💡💡💡💡💡💡💡');

	return {
		body: { r: 'ok' }
	};
}
