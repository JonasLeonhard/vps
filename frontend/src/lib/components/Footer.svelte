<script lang="ts">
	import type { Globals } from '$lib/types';
	import GameOfLife from '$lib/components/GameOfLife.svelte';
	import getPercentageOfViewport from '$lib/utils/getPercentageOfViewport';
	import getPercentageOfElementVisible from '$lib/utils/getPercentageOfElementVisible';

	export let globals: Globals;

	let scrollY = 0;
	let innerHeight = 0;
	let svgWrapper: HTMLDivElement; // we use a svg wrapper, since svgs dont support offsetTop
	let afterWrapper: HTMLDivElement; // we use a svg wrapper, since svgs dont support offsetTop

	$: percentageSvg = getPercentageOfViewport(svgWrapper, innerHeight, scrollY);
	$: percentageAfter = getPercentageOfElementVisible(afterWrapper, innerHeight, scrollY);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<footer class="w-full overflow-hidden">
	<div
		class="transition-all duration-0"
		bind:this={svgWrapper}
		style={`height: ${Math.min(percentageSvg, 23)}vw`}
	>
		<svg
			class="relative left-[-25%] z-10 h-full w-[150%] fill-bg-accent-light dark:fill-bg-accent-dark"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 20"
		>
			<path d="M0,20 A20,20 0 0,1 40,20 Z" />
		</svg>
	</div>

	<div class="bg-bg-accent-light dark:bg-bg-accent-dark">
		<div class="container mx-auto flex pb-32">
			<div class="w-1/2">
				{#each globals.footerNavigation as footerNavigation}
					{footerNavigation.text}
				{/each}

				<br />
				{#each globals.metaNavigation as metaNavigation}
					{metaNavigation.text}
				{/each}

				<br />
				{#each globals.socialMedia as socialMedia}
					{socialMedia.service}
				{/each}
			</div>

			<GameOfLife />
		</div>
	</div>
	<div class="bg-bg-accent-light py-4 dark:bg-bg-accent-dark" bind:this={afterWrapper}>
		<p
			class="container mx-auto text-gray transition-all duration-300"
			style={`transform: translateY(${100 - percentageAfter}%);`}
		>
			© {new Date().getFullYear()} Jonas Leonhard.
		</p>
	</div>
</footer>
