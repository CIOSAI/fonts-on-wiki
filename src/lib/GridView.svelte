<script lang="ts">
	import { onMount } from 'svelte';
	import lozad from 'lozad';
	import { wikifonts } from '$lib/wikidata';
	import FontImageButton from './FontImageButton.svelte';

	onMount(() => {
		const observer = lozad();
		observer.observe();
	});
</script>

<div class="grid grid-cols-4">
	{#each $wikifonts as entry}
		{#if entry.sample}
			<FontImageButton {entry} />
		{/if}
	{/each}
</div>
