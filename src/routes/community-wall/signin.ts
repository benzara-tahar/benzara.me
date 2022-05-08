import { supabase } from '$lib/supabase';

export async function get({ reuqest, params }) {
	const { user, session, error } = await supabase.auth.signIn(
		{
			provider: 'github'
		},
		{ redirectTo: 'http://localhost:3000/provider?refresh=true' }
	);
	if (error) {
		console.log(error);
		return;
	}
	if (error) {
		return {
			status: error.status,
			body: {
				error: error.message
			}
		};
	}
	return {
		body: {
			status: 302,
			headers: {
				location: '/community-wall',
				'set-cookie': JSON.stringify(session)
			}
		}
	};
}
