<script lang="ts">
	import { onMount } from 'svelte';
	import lozad from 'lozad';
	import { previewing } from '$lib/index';
	import { wikifonts, isMissing } from '$lib/wikidata';
	import FontImageButton from '$lib/FontImageButton.svelte';

	onMount(() => {
		const observer = lozad();
		observer.observe();
	});

	let entries = $wikifonts
		.filter((row) => row.foundryLabel && row.foundryLabel.value == $previewing?.key)
		.sort((a, b) => (b.sample ? 1 : -1));
	let countries: string[] = [];
	entries
		.filter((row) => row.countryOfOperationLabel && !isMissing(row.countryOfOperationLabel))
		.forEach((row) => {
			if (countries.indexOf(row.countryOfOperationLabel.value) == -1) {
				countries.push(row.countryOfOperationLabel.value);
			}
		});
</script>

<div class="text-lime-800">
	<div class="flex flex-wrap items-end">
		<h1 class="text-lg italic">{$previewing?.key}</h1>
		<div class="mx-8" />
		<p>{entries.length} fonts in record</p>
		<div class="mx-8" />
		{#each countries as country}
			<p>{country},&nbsp;</p>
		{/each}
	</div>

	<div class="my-8" />

	<p>Maker of:&nbsp;</p>
	<div class="grid grid-cols-6 mx-8">
		{#each entries as entry}
			<div class="flex flex-col justify-between">
				<p>{entry.fontLabel.value}</p>
				<div class="w-full aspect-square">
					<div class="border-yellow-500 border-2 aspect-square m-2">
						{#if entry.sample}
							<FontImageButton {entry} />
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
