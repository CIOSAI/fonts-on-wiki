<script lang="ts">
	export let data;
	import { wikifonts } from '$lib/wikidata';
</script>

<div>
	{#each $wikifonts.filter((row) => row.foundryLabel && row.foundryLabel.value == data.key) as entry}
		<p>{entry.fontLabel.value}</p>
	{/each}
</div>
