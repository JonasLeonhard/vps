<script lang="ts">
	import type { SearchContext } from '$lib/types';
	import type { Writable } from 'svelte/store';

	import { Image, Loader, Richtext } from '$lib/components';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	let mouseover = false;
	let mousedown = false;
	let touchStart = 0;

	let searchContext = getContext<Writable<SearchContext>>('searchContext');

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
			if ($searchContext.containerScrollY + deltaY < 0) {
				$searchContext.timelinePercentageScrolled = 0;
				return ($searchContext.containerScrollY = 0);
			}

			if (
				$searchContext.containerScrollY + deltaY >
				20 * ($searchContext.searchResults?.data?.length || 0)
			) {
				$searchContext.timelinePercentageScrolled = 1;
				return ($searchContext.containerScrollY =
					20 * ($searchContext.searchResults?.data?.length || 0));
			}

			$searchContext.lastDeltaY = deltaY;
			$searchContext.containerScrollY += deltaY;
			$searchContext.timelinePercentageScrolled =
				$searchContext.containerScrollY /
				($searchContext.CARD_OFFSET * ($searchContext.searchResults?.data?.length || 0));

			e.preventDefault();
		}
	};
</script>

<main
	class="h-[60vh] md:col-span-2"
	style="margin-top: {($searchContext.searchResults?.data?.length || 0) *
		($searchContext.CARD_OFFSET / 2)}px; padding-right: {($searchContext.searchResults?.data
		?.length || 0) *
		($searchContext.CARD_OFFSET / 2)}px;"
	class:border-primary={mouseover}
>
	{#if $searchContext.searchLoading}
		<div class="flex h-full w-full items-center justify-center">
			<Loader />
		</div>
	{:else}
		<div
			class="relative mx-auto h-[100%] w-[100%]"
			role="scrollbar"
			tabindex="0"
			aria-valuenow={$searchContext.containerScrollY}
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
			{#each $searchContext.searchResults?.data || [] as result, index}
				{#if $searchContext.CARD_OFFSET * index - $searchContext.containerScrollY > 0 || index === ($searchContext.searchResults?.data?.length || 0) - 1}
					<a
						id="teaser-card"
						href={result.url}
						transition:fly={{
							duration: 75,
							opacity: 0.5,
							x: -$searchContext.CARD_OFFSET,
							y: $searchContext.CARD_OFFSET
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
						style="transform: translate({$searchContext.CARD_OFFSET * (index - 1) -
							$searchContext.containerScrollY}px, calc(-{$searchContext.CARD_OFFSET *
							(index - 1)}px + {$searchContext.containerScrollY}px)); z-index: {($searchContext
							.searchResults?.data?.length || 0) -
							(index - 1)};"
					>
						{#if $searchContext.loadNextPage || $searchContext.loadPreviousPage}
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
