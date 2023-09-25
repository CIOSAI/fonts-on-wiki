<script lang="ts">
	import { wikifonts, type FontEntry } from '$lib/wikidata';
	import ListEntry from './ListEntry.svelte';
</script>

<table class="text-lime-800 border-collapse">
	<thead
		><tr class="text-lime-800 text-lg text-center">
			<td class="border-b-4 border-lime-800">name</td>
			<td class="border-b-4 border-lime-800">made by</td>
			<td class="border-b-4 border-lime-800">based in</td>
		</tr></thead
	>
	<tbody>
		{#each $wikifonts as entry}
			<ListEntry {entry} />
		{/each}
	</tbody>
</table>
