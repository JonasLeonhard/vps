<script lang="ts">
	import type { Globals } from '$lib/types';
	import GameOfLife from '$lib/components/GameOfLife.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
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
		style={`height: calc(10px + ${Math.min(percentageSvg, 23)}vw)`}
	>
		<svg
			class="relative left-[-25%] z-10 h-full w-[150%] translate-y-1 fill-bg-accent-light dark:fill-bg-accent-dark"
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
					<a href={footerNavigation.url} class="block">
						{footerNavigation.text}
					</a>
				{/each}

				<br />
				{#each globals.metaNavigation as metaNavigation}
					<a href={metaNavigation.url} class="block">
						{metaNavigation.text}
					</a>
				{/each}

				<br />
				<div class="flex flex-wrap gap-4">
					{#each globals.socialMedia as socialMedia}
						<a
							href={socialMedia.url}
							target="_blank"
							title={socialMedia.service}
							class="flex w-min gap-1"
						>
							<Icon name={socialMedia.service} />
						</a>
					{/each}
				</div>
			</div>

			<GameOfLife />
		</div>
	</div>
	<div class="bg-bg-accent-light py-4 dark:bg-bg-accent-dark" bind:this={afterWrapper}>
		<p
			class="container mx-auto text-gray transition-all duration-300"
			style={`transform: translateY(${100 - percentageAfter}%);`}
		>
			© {new Date().getFullYear()} Jonas Leonhard - Build Version:
			<a
				class="inline-flex w-min gap-1 rounded-2xl bg-nycTaxi p-2 px-4 text-black"
				href={`https://github.com/JonasLeonhard/vps/commit/${globals.translations.currentGitHash}`}
				target="_blank"
				>{globals.translations.currentGitHash.slice(0, 7)} <Icon name="ExternalLink" /></a
			>
		</p>
	</div>
</footer>
