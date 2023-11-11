<script lang="ts">
	import { Richtext } from '$lib/components';
	export let categories: string;
	export let postdates: string;
	export let resetfilter: string;
	export let filter: string;
	export let results: string;
	export let loadmore: string;
</script>

<div class="grid gap-4 px-4 md:grid-cols-3">
	<aside
		class="rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark md:col-span-1"
	>
		<Richtext>
			{@html filter}
		</Richtext>

		<Richtext>
			{@html categories}
		</Richtext>

		<Richtext>
			{@html postdates}
		</Richtext>

		<Richtext>
			{@html resetfilter}
		</Richtext>

		<Richtext>
			{@html results}
		</Richtext>

		<Richtext>
			{@html loadmore}
		</Richtext>
	</aside>

	<main
		class="rounded-md border border-black/10 bg-bg-accent-light p-4 shadow-lg dark:border-light/10 dark:bg-bg-accent-dark md:col-span-2"
	>
		search result cards here
	</main>
</div>
