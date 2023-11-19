<script lang="ts">
	import { Richtext, Image } from '$lib/components';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import debounce from 'lodash.debounce';
	import type { DefaultPage } from '$lib/types';
	import { goto } from '$app/navigation';

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
		query: $page.url.searchParams.get('q'),
		page: $page.url.searchParams.get('page') || 1,
		tags: new Set($page.url.searchParams.getAll('tags')),
		min: $page.url.searchParams.get('min'),
		max: $page.url.searchParams.get('max')
	};
	let searchResults: DefaultPage[] = [];
	let searchLoading = true;

	const applySearchFilter = debounce(async () => {
		console.log('search for ', appliedSearchFilter, searchResults);
		searchLoading = true;

		if (appliedSearchFilter.query) {
			$page.url.searchParams.set('q', appliedSearchFilter.query || '');
			$page.url.searchParams.set('min', appliedSearchFilter.min || '');
			$page.url.searchParams.set('max', appliedSearchFilter.max || '');
			goto($page.url, {
				noScroll: true,
				invalidateAll: true
			});
			searchResults = await fetch(
				`/api/search/${appliedSearchFilter.query}?${$page.url.searchParams.toString()}`
			).then((res) => res.json());
		}
		searchLoading = false;
	}, 300);

	onMount(() => {
		applySearchFilter();
	});
</script>

<div class="mb-4 grid gap-4 px-4 md:grid-cols-3">
	<aside
		class="sticky top-4 flex h-max max-h-screen flex-col gap-4 rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark md:col-span-1"
	>
		<Richtext>
			{@html filter}
		</Richtext>

		<input
			class="p-2 text-black"
			bind:value={appliedSearchFilter.query}
			on:input={applySearchFilter}
		/>

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
					bind:value={appliedSearchFilter.min}
					on:input={applySearchFilter}
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
					bind:value={appliedSearchFilter.max}
					on:input={applySearchFilter}
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
		{#if searchLoading}
			searchLoading
		{:else}
			<Richtext>
				{@html results}
			</Richtext>

			{console.log(searchResults)}
			{#each searchResults as result}
				<div
					class="rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
				>
					{result.title}
					{#if result.cover}
						<Image class="w-16" image={result.cover} loading="lazy" />
					{/if}
				</div>
			{/each}
		{/if}
	</main>
</div>

<div
	class="col-span-3 mx-4 rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
>
	Timeline
	<Richtext>
		{@html loadmore}
	</Richtext>
	page: {appliedSearchFilter.page}
	todo: go through all {searchFilter.created.size} dates
</div>
