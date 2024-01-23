<script lang="ts">
	import type { SearchResults } from '$lib/types';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Icon, Image, Loader, Richtext } from '$lib/components';
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
	export let searchFilter: { created: Set<string>; tags: Set<string> };

	const CARD_OFFSET = 20;

	let appliedSearchFilter = {
		max: $page.url.searchParams.get('max'),
		min: $page.url.searchParams.get('min'),
		page: $page.url.searchParams.get('page') || 1,
		query: $page.url.searchParams.get('q'),
		tags: new Set($page.url.searchParams.getAll('tags'))
	};
	let searchResults: SearchResults | undefined = undefined;
	let searchLoading = true;

	let mouseover = false;
	let mousedown = false;
	let containerScrollY = 0;
	let touchStart = 0;
	let lastDeltaY = 0;

	$: timelinePercentageScrolled =
		containerScrollY / (CARD_OFFSET * (searchResults?.data?.length || 0));

	let loadNextPage = false;
	let loadPreviousPage = false;
	$: {
		loadNextPage =
			timelinePercentageScrolled >= 0.98 &&
			+appliedSearchFilter.page < (searchResults?.pagination?.pages || 1) &&
			!searchLoading &&
			lastDeltaY > 0;
		loadPreviousPage =
			timelinePercentageScrolled <= 0.02 &&
			+appliedSearchFilter.page > 1 &&
			!searchLoading &&
			lastDeltaY < 0;

		if (loadNextPage) {
			appliedSearchFilter.page = +(appliedSearchFilter.page || 1) + 1;
			applySearchFilter();
		}

		if (loadPreviousPage) {
			appliedSearchFilter.page = +(appliedSearchFilter.page || 1) - 1;
			applySearchFilter();
		}
	}

	const applySearchFilter = debounce(async () => {
		searchLoading = true;
		const scrollDirection =
			+appliedSearchFilter.page >= (searchResults?.pagination?.page || 1) ? 'forward' : 'backward';

		if (appliedSearchFilter.query) {
			$page.url.searchParams.set('q', appliedSearchFilter.query || '');
			$page.url.searchParams.set('min', appliedSearchFilter.min || '');
			$page.url.searchParams.set('max', appliedSearchFilter.max || '');
			$page.url.searchParams.set('page', appliedSearchFilter.page.toString() || '1');
			$page.url.searchParams.set('tags', Array.from(appliedSearchFilter.tags).join(',') || '1');
			goto($page.url, {
				invalidateAll: true,
				noScroll: true
			});
			console.log('searching for ', $page.url.searchParams.toString());
			const results = await fetch(
				`/api/search/${appliedSearchFilter.query}?${$page.url.searchParams.toString()}`
			).then((res) => res.json());

			searchResults = results;
			console.log('searchResults', searchResults, scrollDirection);
			if (scrollDirection === 'forward') {
				containerScrollY = 0;
			} else {
				containerScrollY = CARD_OFFSET * (searchResults?.data?.length || 0);
			}
		}
		searchLoading = false;
	}, 300);

	const handleScroll = (e: MouseEvent | TouchEvent | WheelEvent) => {
		if (!mouseover) return;
		if (e.type === 'mousemove' && !mousedown) return;

		let deltaY;

		if (e.type === 'wheel') {
			deltaY = (e as WheelEvent).deltaY;
		} else if (e.type === 'mousemove') {
			deltaY = (e as MouseEvent).movementY;
		} else {
			const touch = (e as TouchEvent).touches[0];
			deltaY = touchStart - touch.clientY;
			touchStart = touch.clientY;
		}

		if (deltaY) {
			containerScrollY += deltaY;

			if (containerScrollY < 0) {
				return (containerScrollY = 0);
			}

			if (containerScrollY > 20 * (searchResults?.data?.length || 0)) {
				return (containerScrollY = 20 * (searchResults?.data?.length || 0));
			}

			e.preventDefault();
		}

		lastDeltaY = deltaY;
	};

	onMount(() => {
		applySearchFilter();
	});
</script>

<div class="mb-4 grid gap-4 px-4 md:grid-cols-3">
	<aside
		class="relative top-4 flex h-max max-h-screen flex-col gap-4 rounded-md border border-black/10 bg-light p-4 shadow-lg md:sticky md:col-span-1 dark:border-light/10 dark:bg-dark"
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
		style="margin-top: {(searchResults?.data?.length || 0) *
			(CARD_OFFSET / 2)}px; padding-right: {(searchResults?.data?.length || 0) *
			(CARD_OFFSET / 2)}px;"
		class:border-primary={mouseover}
	>
		{#if searchLoading}
			<div class="flex h-full w-full items-center justify-center">
				<Loader />
			</div>
		{:else}
			<div
				class="relative mx-auto h-[100%] w-[100%]"
				role="scrollbar"
				tabindex="0"
				aria-valuenow={containerScrollY}
				aria-controls="teaser-card"
				on:mouseenter={() => {
					mouseover = true;
				}}
				on:mouseleave={() => {
					mouseover = false;
				}}
				on:mousedown={() => {
					mousedown = true;
				}}
				on:mouseup={() => {
					mousedown = false;
				}}
				on:touchstart={(e) => {
					touchStart = e.touches?.[0]?.clientY;
					mouseover = true;
				}}
				on:touchend={() => {
					mouseover = false;
				}}
				on:touchcancel={() => {
					mouseover = false;
				}}
				on:wheel|nonpassive={handleScroll}
				on:touchmove|nonpassive={handleScroll}
				on:mousemove|nonpassive={handleScroll}
			>
				{#each searchResults?.data || [] as result, index}
					{#if CARD_OFFSET * index - containerScrollY > 0 || index === (searchResults?.data?.length || 0) - 1}
						<a
							id="teaser-card"
							href={result.url}
							transition:fly={{
								duration: 75,
								opacity: 0.5,
								x: -CARD_OFFSET,
								y: CARD_OFFSET
							}}
							draggable="false"
							class="after:to-transparent
							pointer-events-none
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
							md:pointer-events-auto
							dark:border-light/10
							dark:bg-dark"
							class:border-primary={mouseover}
							class:dark:border-primary={mouseover}
							class:cursor-grabbing={mousedown}
							style="transform: translate({CARD_OFFSET * (index - 1) -
								containerScrollY}px, calc(-{CARD_OFFSET *
								(index - 1)}px + {containerScrollY}px)); z-index: {(searchResults?.data?.length ||
								0) -
								(index - 1)};"
						>
							{#if loadNextPage || loadPreviousPage}
								<div class="flex h-full w-full items-center justify-center">
									<Loader />
								</div>
							{:else}
								<Richtext class="absolute bottom-4 left-4 z-20 max-w-[50%]">
									<h1>{result.title}</h1></Richtext
								>
								{#if result.cover}
									<Image
										class="pointer-events-none -z-10 h-full w-full select-none rounded-md object-cover"
										image={result.cover}
										loading="lazy"
										draggable="false"
									/>
								{/if}
							{/if}
						</a>
					{/if}
				{/each}
			</div>
		{/if}
	</main>
</div>

<div
	class="col-span-3 mx-4 flex rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
>
	<div class="w-max">
		<div
			class:opacity-30={(searchResults?.pagination?.page || 1) >=
				(searchResults?.pagination?.pages || 1)}
		>
			<Icon
				class="rounded-md border border-black/10 dark:border-light/10 [&>*]:h-auto [&>*]:w-16"
				title="next page"
				name="ArrowUp"
				disabled={(searchResults?.pagination?.page || 1) >= (searchResults?.pagination?.pages || 1)}
				onClick={() => {
					appliedSearchFilter.page = +(appliedSearchFilter.page || 1) + 1;
					applySearchFilter();
				}}
			/>
		</div>
		<div class="m-auto flex w-max justify-center gap-4">
			{#if searchResults}
				{searchResults?.pagination?.page} / {searchResults?.pagination?.pages}
			{:else}
				<div
					role="status"
					class="m-auto flex w-max animate-pulse items-center justify-center gap-1"
				>
					<div class="dark:bg-gray-700 h-4 w-2 rounded-full bg-gray"></div>
					/
					<div class="dark:bg-gray-700 h-4 w-2 rounded-full bg-gray"></div>
					<span class="sr-only">Loading...</span>
				</div>
			{/if}
		</div>

		<div class:opacity-30={+appliedSearchFilter.page <= 1}>
			<Icon
				class="rounded-md border border-black/10 dark:border-light/10 [&>*]:h-auto [&>*]:w-16"
				name="ArrowDown"
				disabled={+appliedSearchFilter.page <= 1}
				title="previous page"
				onClick={() => {
					appliedSearchFilter.page = +(appliedSearchFilter.page || 1) - 1;
					applySearchFilter();
				}}
			/>
		</div>
	</div>
	<div class="relative w-full">
		<div class="absolute top-[50%] h-0.5 w-full -translate-y-[100%] bg-black/30 dark:bg-light/30">
			<Icon
				name="Logo"
				class="absolute bottom-1 left-0 [&>*]:h-4 [&>*]:w-4"
				style="left: {timelinePercentageScrolled * 100}%"
			/>
		</div>
		<div class="absolute right-0 top-0">
			Timeline: percentage scrolled:
			{timelinePercentageScrolled}
			page: {appliedSearchFilter.page}
			todo: go through all {searchFilter.created.size} dates
		</div>
	</div>
</div>
