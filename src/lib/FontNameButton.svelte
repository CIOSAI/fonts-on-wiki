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
	on:click={() => {
		previewing.set({ type: 'font', key: entry.fontLabel.value });
	}}
	class="hover:italic"
>
	{#if focused}
		<p class="bg-lime-800 text-yellow-400">
			{entry.fontLabel.value}
		</p>
	{:else}
		<p class="text-lime-800 bg-yellow-400">
			{entry.fontLabel.value}
		</p>
	{/if}
</button>
