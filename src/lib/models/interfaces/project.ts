import type { SafeAny } from '../types/safeAny';

export interface Project {
	title: string;
	shortDescription: string;
	longDescription?: string;
	tags: string[];
	url?: string;
	githubUrl?: string;
	thumbnail: SafeAny; // image
}
