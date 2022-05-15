import type { SafeAny } from '../types/safeAny';

export interface Skill {
	name: string;
	image?: SafeAny;
	/**
	 * array of comma separated tags
	 */
	tags: string;
}
