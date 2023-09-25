import { writable } from 'svelte/store';

export const viewAsList = writable(true);
export const previewing = writable<
	{ type: 'font' | 'foundry' | 'country'; key: string } | undefined
>();
