type SupabaseConfigKeys = 'SUPABASE_VITE_SB_ANON_KEY' | 'SUPABASE_PROJECT_URL';

export type SupabaseConfigType = {
	[key in SupabaseConfigKeys]: string;
};
