type SupabaseConfigKeys = 'SUPABASE_URL' | 'SUPABASE_ANON_KEY';

export type SupabaseConfigType = {
  [key in SupabaseConfigKeys]: string;
};
