<script lang="ts">
	import type { SearchContext, SearchFilter, SearchResults } from '$lib/types';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import Cards from './Cards.svelte';
	import Filter from './Filter.svelte';
	import Timeline from './Timeline.svelte';

	export let categories: string;
	export let categoriesall: string;
	export let postdates: string;
	export let postdatesmin: string;
	export let postdatesmax: string;
	export let resetfilter: string;
	export let filter: string;
	export let searchFilter: SearchFilter;

	const searchContext = writable<SearchContext>({
		CARD_OFFSET: 20,
		appliedSearchFilter: {
			max: $page.url.searchParams.get('max'),
			min: $page.url.searchParams.get('min'),
			page: $page.url.searchParams.get('page') || 1,
			query: $page.url.searchParams.get('q'),
			tags: new Set($page.url.searchParams.getAll('tags'))
		},
		applySearchFilter: () => {},
		containerScrollY: 0,
		lastDeltaY: 0,
		loadNextPage: false,
		loadPreviousPage: false,
		resultsSearchFilter: {
			created: [],
			tags: []
		},
		searchLoading: true,
		searchResults: undefined,
		timelinePercentageScrolled: 0
	});

	$searchContext.applySearchFilter = debounce(async () => {
		$searchContext.searchLoading = true;
		const scrollDirection =
			+$searchContext.appliedSearchFilter.page >=
			($searchContext.searchResults?.pagination?.page || 1)
				? 'forward'
				: 'backward';

		if ($searchContext.appliedSearchFilter.query) {
			$page.url.searchParams.set('q', $searchContext.appliedSearchFilter.query || '');
			$page.url.searchParams.set('min', $searchContext.appliedSearchFilter.min || '');
			$page.url.searchParams.set('max', $searchContext.appliedSearchFilter.max || '');
			$page.url.searchParams.set('page', $searchContext.appliedSearchFilter.page.toString() || '1');
			$page.url.searchParams.set(
				'tags',
				Array.from($searchContext.appliedSearchFilter.tags).join(',') || '1'
			);
			goto($page.url, {
				invalidateAll: true,
				noScroll: true
			});

			const results: SearchResults = await fetch(
				`/api/search/${
					$searchContext.appliedSearchFilter.query
				}?${$page.url.searchParams.toString()}`
			).then((res) => res.json());

			$searchContext.searchResults = results;

			if (scrollDirection === 'forward') {
				$searchContext.containerScrollY = 0;
				$searchContext.timelinePercentageScrolled = 0;
			} else {
				$searchContext.containerScrollY =
					$searchContext.CARD_OFFSET * ($searchContext.searchResults?.data?.length || 0);
				$searchContext.timelinePercentageScrolled = 1;
			}

			const uniqueSearchFilterItems = results.data.reduce(
				(acc, result) => {
					if (result.created) {
						const dateStr = result.created.split(' ').at(0) || '';
						acc.created.add(dateStr);
					}
					if (result.tags) {
						result.tags.split(',').forEach((tag) => {
							if (tag) acc.tags.add(tag.trim());
						});
					}
					return acc;
				},
				{
					created: new Set<string>(),
					tags: new Set<string>()
				}
			);

			$searchContext.resultsSearchFilter = {
				created: Array.from(uniqueSearchFilterItems.created).map((dateStr) => {
					try {
						return new Date(dateStr);
					} catch (err) {
						console.error(err);
						return new Date();
					}
				}),
				tags: Array.from(searchFilter.tags)
			} as SearchFilter;
		}
		$searchContext.searchLoading = false;
	}, 300);

	setContext('searchContext', searchContext);
</script>

<div class="mb-4 grid gap-4 px-4 md:grid-cols-3">
	<Filter
		{categories}
		{categoriesall}
		{postdates}
		{postdatesmax}
		{postdatesmin}
		{resetfilter}
		{filter}
		{searchFilter}
	/>
	<Cards />
</div>

<Timeline {searchFilter} />
