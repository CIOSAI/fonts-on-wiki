<script lang="ts">
	import type { FontEntry } from './wikidata';
	import { isMissing } from './wikidata';
	import FontNameButton from './FontNameButton.svelte';
	import FoundryButton from './FoundryButton.svelte';

	export let entry: FontEntry;
</script>

<tr class="text-lime-800 text-sm">
	<td class="px-4 border-b-2 border-yellow-500">
		<FontNameButton {entry} />
	</td>
	<td class="px-4 border-b-2 border-yellow-500">
		{#if isMissing(entry.foundryLabel)}
			:(
		{:else}
			<FoundryButton {entry} />
		{/if}
	</td>
	<td class="px-4 border-b-2 border-yellow-500">
		{#if isMissing(entry.countryOfOperationLabel)}
			:(
		{:else}
			{entry.countryOfOperationLabel.value}
		{/if}
	</td>
</tr>
