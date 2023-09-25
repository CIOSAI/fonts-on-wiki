<script lang="ts">
	import type { FontEntry } from './wikidata';
	import { previewing } from './index';

	export let entry: FontEntry;

	let focused = false;

	$: if ($previewing) {
		focused = $previewing.type == 'foundry' && $previewing.key == entry.foundryLabel.value;
	}
</script>

<button
	on:click={() => {
		previewing.set({ type: 'foundry', key: entry.foundryLabel.value });
	}}
	class="hover:italic"
>
	{#if focused}
		<p class="bg-lime-800 text-yellow-400">
			{entry.foundryLabel.value}
		</p>
	{:else}
		<p class="text-lime-800 bg-yellow-400">
			{entry.foundryLabel.value}
		</p>
	{/if}
</button>
