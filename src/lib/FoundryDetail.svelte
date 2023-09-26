<script lang="ts">
	import { type FontEntry, wikifonts } from '$lib/wikidata';
	import { isMissing } from '$lib/wikidata';
	import CountryButton from './CountryButton.svelte';
	import { base } from '$app/paths';

	export let key: string;

	let entry: FontEntry;
	$: entry = $wikifonts.filter((row) => {
		return row.foundryLabel && row.foundryLabel.value && row.foundryLabel.value == key;
	})[0];
</script>

<div class="text-lime-800">
	<p class="bg-lime-800 text-yellow-400 w-min px-2">foundry</p>

	<h2 class="text-lg italic">{entry.foundryLabel.value}</h2>

	<div>
		<table>
			{#if entry.website}
				<tr>
					<td>official website: </td>
					<td
						><a
							class="underline hover:italic"
							target="_blank"
							rel="noopener noreferrer"
							href={entry.website.value}
						>
							{entry.website.value}
						</a></td
					>
				</tr>
			{/if}
			{#if !isMissing(entry.countryOfOperationLabel)}
				<tr>
					<td>based in: </td>
					<td><CountryButton {entry} /></td>
				</tr>
			{/if}
		</table>
		<a class="underline hover:italic" href={`${base}/foundry/`}>details</a>
	</div>
</div>
