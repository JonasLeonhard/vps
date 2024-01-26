<script lang="ts">
	import type { PageData } from '$lib/types';

	import { GameOfLife, Icon } from '$lib/components';
	import { getPercentageOfElementVisible, getPercentageOfViewport } from '$lib/utils';
	import { getContext } from 'svelte';

	const { globals } = getContext<PageData>('pageData');

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
			class="relative left-[-25%] -z-10 h-full w-[150%] translate-y-1 fill-bg-accent-light drop-shadow-[0px_-1px_1px_rgba(0,0,0,0.1)] dark:fill-bg-accent-dark dark:drop-shadow-[0px_-1px_1px_rgba(100,100,100,0.5)]"
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
				class="ml-4 inline-flex w-min gap-2 rounded-md bg-nycTaxi p-1 px-4 text-black"
				href={`https://github.com/JonasLeonhard/vps/commit/${globals.translations.currentGitHash}`}
				target="_blank"
				>{globals.translations.currentGitHash.slice(0, 7)}
				<Icon name="ExternalLink" class="[&>*]:h-4 [&>*]:w-4" /></a
			>
		</p>
	</div>
</footer>
