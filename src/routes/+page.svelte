<script lang="ts">
	import { viewAsList, previewing } from '$lib';
	import ListIcon from '$lib/icons/ListIcon.svelte';
	import GridIcon from '$lib/icons/GridIcon.svelte';
	import ListView from '$lib/ListView.svelte';
	import GridView from '$lib/GridView.svelte';
	import FontDetail from '$lib/FontDetail.svelte';
	import FoundryDetail from '$lib/FoundryDetail.svelte';
	import CountryDetail from '$lib/CountryDetail.svelte';
</script>

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
<div class="grid grid-cols-5 gap-4">
	<div class="col-span-3">
		{#if $viewAsList}
			<ListView />
		{:else}
			<GridView />
		{/if}
	</div>

	<div class="col-span-2">
		<div class="sticky top-8">
			{#if $previewing}
				{#if $previewing.type == 'font'}
					<FontDetail key={$previewing.key} />
				{:else if $previewing.type == 'foundry'}
					<FoundryDetail key={$previewing.key} />
				{:else if $previewing.type == 'country'}
					<CountryDetail key={$previewing.key} />
				{/if}
			{:else}
				<p class="text-lime-800">Click on an entity to see its details</p>
			{/if}
		</div>
	</div>
</div>
