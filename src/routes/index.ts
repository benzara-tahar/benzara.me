/** @type {import{./index}.RequestHandler} */
export async function get() {
	return {
		status: 303,
		headers: {
			location: '/index'
		}
	};
}
