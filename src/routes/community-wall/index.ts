import { supabase } from '$lib/supabase';

export async function get({ reuqest, params }) {
	const { data, error } = await supabase
		.from('community_wall')
		.select('*')
		.order('created_at', { ascending: false });
	if (error) {
		return {
			status: 400,
			body: {
				error
			}
		};
	}
	return {
		body: { notes: data }
	};
}
