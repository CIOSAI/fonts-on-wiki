<script lang="ts">
	import { previewing } from '$lib/index';
	import { wikifonts, isMissing } from '$lib/wikidata';

	let entries = $wikifonts
		.filter(
			(row) => row.countryOfOperationLabel && row.countryOfOperationLabel.value == $previewing?.key
		)
		.sort((a, b) => (b.sample ? 1 : -1));
	let fonts: string[] = [];
	entries
		.filter((row) => row.fontLabel && !isMissing(row.fontLabel))
		.forEach((row) => {
			if (fonts.indexOf(row.fontLabel.value) == -1) {
				fonts.push(row.fontLabel.value);
			}
		});
	let foundries: string[] = [];
	entries
		.filter((row) => row.foundryLabel && !isMissing(row.foundryLabel))
		.forEach((row) => {
			if (foundries.indexOf(row.foundryLabel.value) == -1) {
				foundries.push(row.foundryLabel.value);
			}
		});
</script>

<div class="text-lime-800">
	<div class="flex flex-wrap items-end">
		<h1 class="text-lg italic">{$previewing?.key}</h1>
		<div class="mx-8" />
		<p>{foundries.length} foundries in record</p>
		<div class="mx-8" />
		<p>{fonts.length} fonts in record</p>
	</div>
	<div class="my-8" />
	<p class=" text-justify">
		{#each fonts as font}
			{font},&nbsp;
		{/each}
	</p>
</div>
