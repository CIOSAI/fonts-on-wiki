<script lang="ts">
	import { type FontEntry, wikifonts } from '$lib/wikidata';
	import { isMissing } from '$lib/wikidata';
	export let key: string;
	let entry: FontEntry;
	$: entry = $wikifonts.filter((row) => {
		return row.fontLabel && row.fontLabel.value && row.fontLabel.value == key;
	})[0];
</script>

<div class="text-lime-800">
	<p>font</p>

	<h2 class="text-lg italic">{entry.fontLabel.value}</h2>

	<div>
		{#if entry.sample}
			<img
				class="lozad max-h-96 object-contain object-center"
				src={entry.sample.value}
				alt={`sample image of ${entry.fontLabel.value}`}
			/>
		{/if}
		{#if !isMissing(entry.foundryLabel)}
			<p>
				by: {entry.foundryLabel.value}
			</p>
		{/if}
		{#if !isMissing(entry.countryOfOperationLabel)}
			<p>
				from: {entry.countryOfOperationLabel.value}
			</p>
		{/if}
		{#if entry.website}
			<p>
				{entry.website}
			</p>
		{/if}
	</div>
</div>
