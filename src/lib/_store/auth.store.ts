import { supabase } from '$lib/supabase';
import { writable } from 'svelte/store';

export type User = {
	id: string;
	avatar_url: string;
	email: string;
	name: string;
	username: string;
	[key: string]: any;
};

export type Session = {
	[key: string]: any;
};
const user = writable<User>(undefined);
const session = writable<Session>(undefined);
const isLoggedIn = writable<boolean>(undefined);

export { user as currentUser, session as currentSession, isLoggedIn };

supabase.auth.onAuthStateChange((event, supSession) => {
	isLoggedIn.set(!!session);
	session.set(supSession);
	const { avatar_url, email, name, username } = supSession.user.user_metadata;
	user.set({
		id: supSession.user.id,
		avatar_url,
		email,
		name,
		username,
		...supSession.user
	});
});
