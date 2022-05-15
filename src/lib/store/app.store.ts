import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');
export const selectedSounds = writable([]);
export const settingsVisible = writable(false);
