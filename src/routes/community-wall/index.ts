import { supabase } from '$core/supabase';

export async function get() {
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
