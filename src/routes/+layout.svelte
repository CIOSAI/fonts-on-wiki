<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<main class="bg-yellow-400">
	<Header />
	<div class="px-16 py-4">
		<slot />
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.yellow.400);
	}
</style>
