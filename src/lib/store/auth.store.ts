// import { supabase } from '$core/supabase';
import type { SafeAny } from '$lib/models/types/safeAny';
import { writable } from 'svelte/store';

export type User = {
  id: string;
  avatar_url: string;
  email: string;
  name: string;
  username: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: SafeAny;
};

export type Session = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: SafeAny;
};
const user = writable<User>(undefined);
const session = writable<Session>(undefined);
const isLoggedIn = writable<boolean>(undefined);

export { user as currentUser, session as currentSession, isLoggedIn };

// supabase.auth.onAuthStateChange((_event, supSession) => {
// 	isLoggedIn.set(!!session);
// 	session.set(supSession);
// 	const { avatar_url, email, name, username } = supSession.user.user_metadata;
// 	user.set({
// 		id: supSession.user.id,
// 		avatar_url,
// 		email,
// 		name,
// 		username,
// 		...supSession.user
// 	});
// });
