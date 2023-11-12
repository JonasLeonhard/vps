<script lang="ts">
	import { Richtext } from '$lib/components';
	import { onMount } from 'svelte';

	export let categories: string;
	export let categoriesall: string;
	export let postdates: string;
	export let postdatesmin: string;
	export let postdatesmax: string;
	export let resetfilter: string;
	export let filter: string;
	export let results: string;
	export let loadmore: string;
	export let searchFilter: { tags: Set<string>; created: Set<string> };

	let appliedSearchFilter = {
		tags: new Set(),
		created: new Set()
	};

	const applySearchFilter = () => {
		console.log('search for ', appliedSearchFilter);
	};

	onMount(() => {
		console.log(searchFilter);
		applySearchFilter();
	});
</script>

{console.log(searchFilter)}
<div class="mb-4 grid gap-4 px-4 md:grid-cols-3">
	<aside
		class="sticky top-4 flex h-max max-h-screen flex-col gap-4 rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark md:col-span-1"
	>
		<Richtext>
			{@html filter}
		</Richtext>

		<input class="p-2 text-black" value="search" />

		<div>
			<Richtext>
				{@html categories}
			</Richtext>

			<div class="mt-2 flex flex-wrap gap-4">
				<p>{categoriesall}</p>
				{#each Array.from(searchFilter.tags) as tag}
					<p>{tag}</p>
				{/each}
			</div>
		</div>

		<div>
			<Richtext>
				{@html postdates}
			</Richtext>

			<div class="my-4 flex flex-col gap-2">
				<label for="min-date">
					<Richtext class="!text-xs">
						{@html postdatesmin}
					</Richtext>
				</label>
				<input
					id="min-date"
					class="text-black"
					type="date"
					value={Array.from(searchFilter.created)?.at(0)}
				/>
			</div>

			<div class="my-4 flex flex-col gap-2">
				<label for="max-date">
					<Richtext class="!text-xs">
						{@html postdatesmax}
					</Richtext>
				</label>
				<input
					id="max-date"
					class="text-black"
					type="date"
					value={Array.from(searchFilter.created)?.at(-1)}
				/>
			</div>
		</div>

		<Richtext class="ml-auto w-max !text-xs">
			{@html resetfilter}
		</Richtext>
	</aside>

	<main
		class="h-[80vh] rounded-md border border-black/10 bg-bg-accent-light p-4 shadow-lg dark:border-light/10 dark:bg-bg-accent-dark md:col-span-2"
	>
		search result cards here loading animation onMount...
		<Richtext>
			{@html results}
		</Richtext>

		<Richtext>
			{@html loadmore}
		</Richtext>
	</main>
</div>

<div
	class="col-span-3 mx-4 rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
>
	Timeline
</div>
