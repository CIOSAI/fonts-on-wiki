<script lang="ts">
	import type { FontEntry } from './wikidata';
	import { previewing } from './index';

	export let entry: FontEntry;

	let focused = false;

	$: if ($previewing) {
		focused = $previewing.type == 'font' && $previewing.key == entry.fontLabel.value;
	}
</script>

<button
	class="relative w-full aspect-square"
	on:click={() => {
		previewing.set({ type: 'font', key: entry.fontLabel.value });
	}}
>
	{#if focused}
		<div class="absolute w-full h-full border-4 border-lime-800" />
	{:else}
		<div class="absolute w-full h-full" />
	{/if}
	<img
		class="lozad w-full h-full object-contain object-center transition duration-100 ease-out scale-90 hover:scale-100"
		data-src={entry.sample.value}
		alt={`sample image of ${entry.fontLabel.value}`}
	/>
</button>
