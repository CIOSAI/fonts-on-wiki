<script lang="ts">
	import type { FontEntry } from './wikidata';
	import { previewing } from './index';

	export let entry: FontEntry;

	let focused = false;

	$: if ($previewing) {
		focused =
			$previewing.type == 'country' && $previewing.key == entry.countryOfOperationLabel.value;
	}
</script>

<button
	on:click={() => {
		previewing.set({ type: 'country', key: entry.countryOfOperationLabel.value });
	}}
	class="hover:italic"
>
	{#if focused}
		<p class="bg-lime-800 text-yellow-400">
			{entry.countryOfOperationLabel.value}
		</p>
	{:else}
		<p class="text-lime-800 bg-yellow-400">
			{entry.countryOfOperationLabel.value}
		</p>
	{/if}
</button>
