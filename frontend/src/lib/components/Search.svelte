<script lang="ts">
	import type { DefaultPage } from '$lib/types';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Image, Loader, Richtext } from '$lib/components';
	import debounce from 'lodash.debounce';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let categories: string;
	export let categoriesall: string;
	export let postdates: string;
	export let postdatesmin: string;
	export let postdatesmax: string;
	export let resetfilter: string;
	export let filter: string;
	export let results: string;
	export let loadmore: string;
	export let searchFilter: { created: Set<string>; tags: Set<string> };

	const CARD_OFFSET = 20;

	let appliedSearchFilter = {
		max: $page.url.searchParams.get('max'),
		min: $page.url.searchParams.get('min'),
		page: $page.url.searchParams.get('page') || 1,
		query: $page.url.searchParams.get('q'),
		tags: new Set($page.url.searchParams.getAll('tags'))
	};
	let searchResults: DefaultPage[] = [];
	let searchLoading = true;

	let mouseover = false;
	let containerScrollY = 0;

	$: timelinePercentageScrolled = containerScrollY / (CARD_OFFSET * searchResults.length);

	const applySearchFilter = debounce(async () => {
		console.log('search for ', appliedSearchFilter, searchResults);
		searchLoading = true;

		if (appliedSearchFilter.query) {
			$page.url.searchParams.set('q', appliedSearchFilter.query || '');
			$page.url.searchParams.set('min', appliedSearchFilter.min || '');
			$page.url.searchParams.set('max', appliedSearchFilter.max || '');
			goto($page.url, {
				invalidateAll: true,
				noScroll: true
			});
			searchResults = await fetch(
				`/api/search/${appliedSearchFilter.query}?${$page.url.searchParams.toString()}`
			).then((res) => res.json());
		}
		searchLoading = false;
	}, 300);

	const handleScroll = (e: WheelEvent) => {
		if (e.deltaY && mouseover) {
			containerScrollY += e.deltaY;

			if (containerScrollY < 0) {
				return (containerScrollY = 0);
			}

			if (containerScrollY > 20 * searchResults.length) {
				return (containerScrollY = 20 * searchResults.length);
			}

			e.preventDefault();
		}
	};

	onMount(() => {
		applySearchFilter();
	});
</script>

<div class="mb-4 grid gap-4 px-4 md:grid-cols-3">
	<aside
		class="sticky top-4 flex h-max max-h-screen flex-col gap-4 rounded-md border border-black/10 bg-light p-4 shadow-lg md:col-span-1 dark:border-light/10 dark:bg-dark"
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
		class="h-[60vh] md:col-span-2"
		style="margin-top: {searchResults.length *
			(CARD_OFFSET / 2)}px; padding-right: {searchResults.length * (CARD_OFFSET / 2)}px;"
		class:border-primary={mouseover}
	>
		{#if searchLoading}
			<Loader />
		{:else}
			<div
				class="relative mx-auto h-[100%] w-[100%]"
				role="scrollbar"
				tabindex="0"
				aria-valuenow={containerScrollY}
				aria-controls="teaser-card"
				style="perspective: 1000px;"
				on:wheel={handleScroll}
				on:mouseenter={() => (mouseover = true)}
				on:mouseleave={() => (mouseover = false)}
			>
				{#each searchResults as result, index}
					{#if CARD_OFFSET * index - containerScrollY > 0}
						<a
							id="teaser-card"
							href={result.url}
							transition:fly={{
								duration: 75,
								opacity: 0.5,
								x: -CARD_OFFSET,
								y: CARD_OFFSET
							}}
							class="after:to-transparent
							absolute
							top-0
							h-full
							w-full
							rounded-md
							border
							border-black/10
							bg-light
							shadow-lg
							transition-colors
							after:absolute
							after:inset-0
							after:z-10
	            after:block
							after:bg-gradient-to-r
							after:from-black
							after:via-black/40
							after:opacity-30
							after:content-['']
							dark:border-light/10
							dark:bg-dark"
							class:border-primary={mouseover}
							class:dark:border-primary={mouseover}
							style="transform: translate3d({CARD_OFFSET * (index - 1) -
								containerScrollY}px, calc(-{CARD_OFFSET *
								(index - 1)}px + {containerScrollY}px), -{CARD_OFFSET *
								(index - 1)}px); z-index: {searchResults.length - (index - 1)};"
						>
							<Richtext class="absolute bottom-4 left-4 z-20 max-w-[50%]">
								<h1>{result.title} - {index}</h1>
							</Richtext>
							{#if result.cover}
								<Image
									class="h-full w-full rounded-md object-cover"
									image={result.cover}
									loading="lazy"
								/>
							{/if}
						</a>
					{/if}
				{/each}
				<Loader /> aftercards loader
			</div>
			<Richtext>
				{@html results}
			</Richtext>
		{/if}
	</main>
</div>

<div
	class="col-span-3 mx-4 rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
>
	Timeline: percentage scrolled:
	{timelinePercentageScrolled}
	<Richtext>
		{@html loadmore}
	</Richtext>
	page: {appliedSearchFilter.page}
	todo: go through all {searchFilter.created.size} dates
</div>
