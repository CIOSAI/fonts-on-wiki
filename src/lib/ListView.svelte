<script lang="ts">
	import { slide } from 'svelte/transition';
	import { wikifonts } from '$lib/wikidata';
	import { filterIndices } from '$lib';
	import FunnelIcon from '$lib/icons/FunnelIcon.svelte';
	import ListEntry from './ListEntry.svelte';
	import { circOut, expoOut } from 'svelte/easing';

	let filtererOpened = false;
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

<table class="text-lime-800 border-collapse w-full">
	<thead
		><tr class="text-lime-800">
			<td class="border-b-4 border-lime-800 px-4">name</td>
			<td class="border-b-4 border-lime-800 px-4">made by</td>
			<td class="border-b-4 border-lime-800 px-4">
				<div class="flex justify-between">
					<p>based in</p>
					<button
						class="w-8 aspect-square hover:scale-110 transition duration-100"
						on:click={() => {
							filtererOpened = !filtererOpened;
						}}
					>
						{#if $filterIndices.font == '' && $filterIndices.foundry == '' && $filterIndices.country == ''}
							<FunnelIcon />
						{:else}
							<div class="rounded bg-lime-800 text-yellow-400">
								<FunnelIcon />
							</div>
						{/if}
					</button>
				</div></td
			>
		</tr></thead
	>
	<tbody>
		{#if filtererOpened}
			<tr class="text-lime-800 text-sm">
				<td transition:slide={{ duration: 500, easing: circOut }}
					><input
						class="w-full bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
						type="text"
						placeholder="filter by name"
						value={$filterIndices.font}
						on:keyup={(e) => {
							if (!e.target) return;

							filterIndices.update((old) => {
								return { font: e.target.value, foundry: old.foundry, country: old.country };
							});
						}}
					/></td
				>
				<td transition:slide={{ duration: 500, easing: circOut }}
					><input
						class="w-full bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
						type="text"
						placeholder="filter by foundry"
						value={$filterIndices.foundry}
						on:keyup={(e) => {
							if (!e.target) return;

							filterIndices.update((old) => {
								return { font: old.font, foundry: e.target.value, country: old.country };
							});
						}}
					/></td
				>
				<td transition:slide={{ duration: 500, easing: circOut }}
					><input
						class="w-full bg-yellow-400 px-3 appearance-none border-b-2 border-lime-800 outline-none focus:bg-yellow-500 placeholder:text-yellow-600"
						type="text"
						placeholder="filter by country"
						value={$filterIndices.country}
						on:keyup={(e) => {
							if (!e.target) return;

							filterIndices.update((old) => {
								return { font: old.font, foundry: old.foundry, country: e.target.value };
							});
						}}
					/></td
				>
			</tr>
		{/if}
		{#each filtered as entry}
			<ListEntry {entry} />
		{/each}
	</tbody>
</table>
