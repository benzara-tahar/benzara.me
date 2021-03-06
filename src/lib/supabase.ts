import { createClient } from '@supabase/supabase-js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const PUBLIC_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const CLIENT_URL = import.meta.env.VITE_SUPABASE_URL;

// Create a single supabase client for interacting with your database
const supabase = createClient(CLIENT_URL, PUBLIC_ANON_KEY);
supabase.auth.onAuthStateChange((_event, session) => {
	console.log('👌', session);
});

export { supabase };
