<script lang="ts">
	import { type FontEntry, wikifonts } from '$lib/wikidata';
	import { isMissing } from '$lib/wikidata';
	import FoundryButton from './FoundryButton.svelte';
	import CountryButton from './CountryButton.svelte';

	export let key: string;

	let entry: FontEntry;
	$: entry = $wikifonts.filter((row) => {
		return row.fontLabel && row.fontLabel.value && row.fontLabel.value == key;
	})[0];
</script>

<div class="text-lime-800">
	<p class="bg-lime-800 text-yellow-400 w-min px-2">font</p>

	<h2 class="text-lg italic">{entry.fontLabel.value}</h2>

	<div>
		{#if entry.sample}
			<img
				class="lozad max-h-96 object-contain object-center"
				src={entry.sample.value}
				alt={`sample image of ${entry.fontLabel.value}`}
			/>
		{/if}
		<table>
			{#if !isMissing(entry.foundryLabel)}
				<tr><td>by: </td><td><FoundryButton {entry} /></td></tr>
			{/if}
			{#if !isMissing(entry.countryOfOperationLabel)}
				<tr><td>from: </td><td><CountryButton {entry} /></td></tr>
			{/if}
		</table>
	</div>
</div>
