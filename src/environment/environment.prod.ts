import type { EnvironmentConfig } from '$models/interfaces/environment.interface';
import { EnvironmentType } from '$models/interfaces/environment.interface';

import dotenv from 'dotenv';
dotenv.config();

export const productionEnvironment: EnvironmentConfig = {
	type: EnvironmentType.PRODUCTION,
	name: 'production',
	authConfig: {
		GITHUB_OAUTH_CLIENT_ID: process.env.VITE_GITHUB_CLIENT_ID,
		GITHUB_OAUTH_CLIENT_SECRET: process.env.VITE_GITHUB_SECRET,
		OAUTH_JWT_SECRET_KEY: process.env.OAUTH_JWT_SECRET_KEY,
		CUSTOM_OAUTH_REDIRECT_URI: process.env.CUSTOM_OAUTH_REDIRECT_URI
	},
	supabaseConfig: {
		SUPABASE_VITE_SB_ANON_KEY: process.env.VITE_SB_ANON_KEY,
		SUPABASE_PROJECT_URL: process.env.VITE_SB_URL
	},
	debug: false
};
