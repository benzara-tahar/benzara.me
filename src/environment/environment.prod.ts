import type { EnvironmentConfig } from '$models/interfaces/environment.interface';
import { EnvironmentType } from '$models/interfaces/environment.interface';

// not sure we need the dotenv dependency, since vite uses it to popolate the import.meta.env
// from the *.env files
// for more info: refer to https://vitejs.dev/guide/env-and-mode.html

// security concern: make sure not to expose the env variables to the client

// import dotenv from 'dotenv';
// dotenv.config();

export const productionEnvironment: EnvironmentConfig = {
  type: EnvironmentType.production,
  name: 'production',
  authConfig: {
    GITHUB_CLIENT_ID: import.meta.env.VITE_GITHUB_CLIENT_ID,
    GITHUB_SECRET: import.meta.env.VITE_GITHUB_SECRET,
    OAUTH_JWT_SECRET_KEY: import.meta.env.VITE_OAUTH_JWT_SECRET_KEY,
    CUSTOM_OAUTH_REDIRECT_URI: import.meta.env.VITE_CUSTOM_OAUTH_REDIRECT_URI,
  },
  supabaseConfig: {
    SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  },
  debug: false,
};
