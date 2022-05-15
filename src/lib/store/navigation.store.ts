import { writable } from 'svelte/store';

export const navigationStatus = writable<'loading' | 'loaded' | null>(null);
