/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  // supabase
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;

  //github oauth
  VITE_GITHUB_SECRET: string;
  VITE_GITHUB_CLIENT_ID: string;
  VITE_OAUTH_JWT_SECRET_KEY: string;
  VITE_CUSTOM_OAUTH_REDIRECT_URI: string;
}
