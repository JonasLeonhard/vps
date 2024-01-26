<script lang="ts">
	import type { PageData, SearchContext, SearchFilter } from '$lib/types';
	import type { Writable } from 'svelte/store';

	import { Icon } from '$lib/components';
	import { getContext } from 'svelte';

	const { lang } = getContext<PageData>('pageData');
	const searchContext = getContext<Writable<SearchContext>>('searchContext');

	export let searchFilter: SearchFilter;
</script>

<div
	class="col-span-3 mx-4 flex rounded-md border border-black/10 bg-light p-4 shadow-lg dark:border-light/10 dark:bg-dark"
>
	<div class="w-max">
		<div
			class:opacity-30={($searchContext.searchResults?.pagination?.page || 1) >=
				($searchContext.searchResults?.pagination?.pages || 1)}
		>
			<Icon
				class="rounded-md border border-black/10 dark:border-light/10 [&>*]:h-auto [&>*]:w-16"
				title="next page"
				name="ArrowUp"
				disabled={($searchContext.searchResults?.pagination?.page || 1) >=
					($searchContext.searchResults?.pagination?.pages || 1)}
				onClick={() => {
					$searchContext.lastDeltaY = 0;
					$searchContext.appliedSearchFilter.page =
						+($searchContext.appliedSearchFilter.page || 1) + 1;
					$searchContext.applySearchFilter();
				}}
			/>
		</div>
		<div class="m-auto flex w-max justify-center gap-4">
			{#if $searchContext.searchResults}
				{$searchContext.searchResults?.pagination?.page} / {$searchContext.searchResults?.pagination
					?.pages}
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

		<div class:opacity-30={+$searchContext.appliedSearchFilter.page <= 1}>
			<Icon
				class="rounded-md border border-black/10 dark:border-light/10 [&>*]:h-auto [&>*]:w-16"
				name="ArrowDown"
				disabled={+$searchContext.appliedSearchFilter.page <= 1}
				title="previous page"
				onClick={() => {
					$searchContext.lastDeltaY = 0;
					$searchContext.appliedSearchFilter.page =
						+($searchContext.appliedSearchFilter.page || 1) - 1;
					$searchContext.applySearchFilter();
				}}
			/>
		</div>
	</div>
	<div class="relative m-auto grid h-5 w-5">
		<Icon
			class="absolute col-span-1 row-span-1 animate-ping opacity-50 [&>*]:h-full [&>*]:w-full"
			name="CircleDot"
		/>
		<Icon class="col-span-1 row-span-1 animate-pulse [&>*]:h-full [&>*]:w-full" name="CircleDot" />
	</div>
	<div class="relative flex w-full">
		<div class="absolute top-[50%] flex w-full -translate-y-1/2 items-center justify-center">
			<div class="top[50%] absolute left-0 origin-top-left -rotate-90">
				{#if $searchContext.resultsSearchFilter.created.at(0)}
					{$searchContext.resultsSearchFilter.created.at(0)?.toLocaleDateString(lang.code)}
				{:else}
					{searchFilter.created.at(0)?.toLocaleDateString(lang.code)}
				{/if}
			</div>
			<Icon class="m-auto w-full" name="Timeline" />
			<Icon
				name="Logo"
				class="absolute bottom-3.5 left-0 [&>*]:h-4 [&>*]:w-4"
				style="left: {$searchContext.timelinePercentageScrolled * 100}%"
			/>
			<div class="top[50%] absolute right-0 origin-top-left -rotate-90">
				{#if $searchContext.resultsSearchFilter.created.at(-1)}
					{$searchContext.resultsSearchFilter.created.at(-1)?.toLocaleDateString(lang.code)}
				{:else}
					{searchFilter.created.at(-1)?.toLocaleDateString(lang.code)}
				{/if}
			</div>
		</div>

		{#each $searchContext.searchResults?.data || [] as result, index}
			<div
				class="absolute top-0"
				style="left: {(100 / ($searchContext.searchResults?.data?.length || 8)) * index +
					1}%; top: {index * 20}px"
			>
				TODO: card: {index} at {new Date(result.created).toLocaleDateString(lang.code)}
			</div>
		{/each}
		<div class="absolute right-0 top-0">
			Timeline: percentage scrolled:
			{$searchContext.timelinePercentageScrolled}
			page: {$searchContext.appliedSearchFilter.page}
			todo: go through all {searchFilter.created.length} dates
		</div>
	</div>
	<div class="relative m-auto grid h-5 w-5">
		<Icon
			class="absolute col-span-1 row-span-1 animate-ping opacity-50 [&>*]:h-full [&>*]:w-full"
			name="CircleDot"
		/>
		<Icon class="col-span-1 row-span-1 animate-pulse [&>*]:h-full [&>*]:w-full" name="CircleDot" />
	</div>
</div>
