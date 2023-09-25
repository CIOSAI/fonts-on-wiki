import { writable } from 'svelte/store';

export const viewAsList = writable(true);
export const previewing = writable<
	{ type: 'font' | 'foundry' | 'country'; key: string } | undefined
>();
export const filterIndices = writable<{ font: string; foundry: string; country: string }>({
	font: '',
	foundry: '',
	country: ''
});
