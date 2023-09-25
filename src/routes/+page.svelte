<script lang="ts">
	import { viewAsList, previewing } from '$lib';
	import ListIcon from '$lib/icons/ListIcon.svelte';
	import GridIcon from '$lib/icons/GridIcon.svelte';
	import ListView from '$lib/ListView.svelte';
	import GridView from '$lib/GridView.svelte';
	import FontDetail from '$lib/FontDetail.svelte';
	import { base } from '$app/paths';
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p class="italic">
	Visit <a href={`${base}/foundry`}>foundry page</a>
</p> -->
<button
	class="w-12 aspect-square text-yellow-600 hover:text-lime-800"
	on:click={() => {
		viewAsList.set(!$viewAsList);
	}}
>
	{#if $viewAsList}
		<GridIcon />
	{:else}
		<ListIcon />
	{/if}
</button>
<div class="grid grid-cols-5">
	<div class="col-span-3">
		{#if $viewAsList}
			<ListView />
		{:else}
			<GridView />
		{/if}
	</div>

	<div class="col-span-2">
		<div class="sticky top-1">
			{#if $previewing}
				{#if $previewing.type == 'font'}
					<FontDetail key={$previewing.key} />
				{/if}
			{:else}
				<p>Click on an entity to see its details</p>
			{/if}
		</div>
	</div>
</div>
