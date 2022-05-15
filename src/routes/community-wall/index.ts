import { supabase } from '$core/supabase';
import { environment } from '$environment';

export async function get() {
	const env = environment;
	console.log(env);
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
