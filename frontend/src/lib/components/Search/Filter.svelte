<script lang="ts">
	import type { SearchContext, SearchFilter } from '$lib/types';
	import type { Writable } from 'svelte/store';

	import { Richtext } from '$lib/components';
	import { getContext, onMount } from 'svelte';

	export let categories: string;
	export let categoriesall: string;
	export let postdates: string;
	export let postdatesmin: string;
	export let postdatesmax: string;
	export let resetfilter: string;
	export let filter: string;
	export let searchFilter: SearchFilter;

	const searchContext = getContext<Writable<SearchContext>>('searchContext');

	$: {
		$searchContext.loadNextPage =
			$searchContext.timelinePercentageScrolled >= 0.98 &&
			+$searchContext.appliedSearchFilter.page <
				($searchContext.searchResults?.pagination?.pages || 1) &&
			!$searchContext.searchLoading &&
			$searchContext.lastDeltaY > 0;
		$searchContext.loadPreviousPage =
			$searchContext.timelinePercentageScrolled <= 0.02 &&
			+$searchContext.appliedSearchFilter.page > 1 &&
			!$searchContext.searchLoading &&
			$searchContext.lastDeltaY < 0;

		if ($searchContext.loadNextPage) {
			$searchContext.appliedSearchFilter.page = +($searchContext.appliedSearchFilter.page || 1) + 1;
			$searchContext.applySearchFilter();
		}

		if ($searchContext.loadPreviousPage) {
			$searchContext.appliedSearchFilter.page = +($searchContext.appliedSearchFilter.page || 1) - 1;
			$searchContext.applySearchFilter();
		}
	}

	onMount(() => {
		$searchContext.applySearchFilter();
	});
</script>

<aside
	class="relative top-4 flex h-max max-h-screen flex-col gap-4 rounded-md border border-black/10 bg-light p-4 shadow-lg md:sticky md:col-span-1 dark:border-light/10 dark:bg-dark"
>
	<Richtext>
		{@html filter}: {$searchContext.loadNextPage}
	</Richtext>

	<input
		class="p-2 text-black"
		bind:value={$searchContext.appliedSearchFilter.query}
		on:input={$searchContext.applySearchFilter}
	/>

	<div>
		<Richtext>
			{@html categories}
		</Richtext>

		<div class="mt-2 flex flex-wrap gap-4">
			<p>{categoriesall}</p>
			{#each searchFilter.tags as tag}
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
				bind:value={$searchContext.appliedSearchFilter.min}
				on:input={$searchContext.applySearchFilter}
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
				bind:value={$searchContext.appliedSearchFilter.max}
				on:input={$searchContext.applySearchFilter}
			/>
		</div>
	</div>

	<Richtext class="ml-auto w-max !text-xs">
		{@html resetfilter}
	</Richtext>
</aside>
