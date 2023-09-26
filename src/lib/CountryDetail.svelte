<script lang="ts">
	import { wikifonts } from '$lib/wikidata';
	import { isMissing } from '$lib/wikidata';

	export let key: string;

	let filtered: string[];
	$: {
		filtered = [];
		$wikifonts
			.filter((row) => {
				return (
					row.countryOfOperationLabel &&
					row.countryOfOperationLabel.value == key &&
					!isMissing(row.foundryLabel)
				);
			})
			.map((row) => row.foundryLabel.value)
			.forEach((row) => {
				if (filtered.indexOf(row) == -1) {
					filtered.push(row);
				}
			});
	}
</script>

<div class="text-lime-800">
	<p class="bg-lime-800 text-yellow-400 w-min px-2">country</p>

	<h2 class="text-lg italic">{key}</h2>

	<div class="flex flex-wrap">
		<p>{filtered.length} foundries recorded</p>
	</div>
</div>
