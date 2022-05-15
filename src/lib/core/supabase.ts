import { environment } from '$environment';
import { createClient } from '@supabase/supabase-js';
// const VITE_SB_ANON_KEY = import.meta.env.VITE_SB_ANON_KEY;
// const VITE_SB_URL = import.meta.env.VITE_SB_URL;

const VITE_SB_URL = environment.supabaseConfig.SUPABASE_PROJECT_URL;
const VITE_SB_ANON_KEY = environment.supabaseConfig.SUPABASE_VITE_SB_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SB_URL, VITE_SB_ANON_KEY);
supabase.auth.onAuthStateChange((_event, session) => {
	console.log('👌', session);
});

export { supabase };
