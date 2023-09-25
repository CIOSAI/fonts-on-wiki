<script lang="ts">
	import { wikifonts } from '$lib/wikidata';
	import { filterIndices } from '$lib';
	import ListEntry from './ListEntry.svelte';

	let filtered = $wikifonts;

	$: filtered = $wikifonts.filter((row) => {
		function similar(a: string, b: string) {
			return a.toLowerCase().startsWith(b.toLocaleLowerCase());
		}
		if ($filterIndices.font !== '') {
			return row.fontLabel && similar(row.fontLabel.value, $filterIndices.font);
		}
		if ($filterIndices.foundry !== '') {
			return row.foundryLabel && similar(row.foundryLabel.value, $filterIndices.foundry);
		}
		if ($filterIndices.country !== '') {
			return (
				row.countryOfOperationLabel &&
				similar(row.countryOfOperationLabel.value, $filterIndices.country)
			);
		}
		return true;
	});
</script>

<table class="text-lime-800 border-collapse">
	<thead
		><tr class="text-lime-800">
			<td class="border-b-4 border-lime-800 px-4">name</td>
			<td class="border-b-4 border-lime-800 px-4">made by</td>
			<td class="border-b-4 border-lime-800 px-4">based in</td>
		</tr></thead
	>
	<tbody>
		<tr class="text-lime-800 text-sm">
			<td
				><input
					class="w-full my-4 bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
					type="text"
					placeholder="filter by name"
					on:keyup={(e) => {
						if (!e.target) return;

						filterIndices.update((old) => {
							return { font: e.target.value, foundry: old.foundry, country: old.country };
						});
					}}
				/></td
			>
			<td
				><input
					class="w-full my-4 bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
					type="text"
					placeholder="filter by foundry"
					on:keyup={(e) => {
						if (!e.target) return;

						filterIndices.update((old) => {
							return { font: old.font, foundry: e.target.value, country: old.country };
						});
					}}
				/></td
			>
			<td
				><input
					class="w-full my-4 bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
					type="text"
					placeholder="filter by country"
					on:keyup={(e) => {
						if (!e.target) return;

						filterIndices.update((old) => {
							return { font: old.font, foundry: old.foundry, country: e.target.value };
						});
					}}
				/></td
			>
		</tr>
		{#each filtered as entry}
			<ListEntry {entry} />
		{/each}
	</tbody>
</table>
