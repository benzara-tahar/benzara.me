import { createClient } from '@supabase/supabase-js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const PUBLIC_ANON_KEY = import.meta.env.VITE_SB_ANON_KEY;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const CLIENT_URL = import.meta.env.VITE_SB_URL;

// Create a single supabase client for interacting with your database
const supabase = createClient(CLIENT_URL, PUBLIC_ANON_KEY);
supabase.auth.onAuthStateChange((_event, session) => {
	console.log('👌', session);
});

export { supabase };
