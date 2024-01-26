<script lang="ts">
	import type { PageData } from '$lib/types';

	import { Icon, Richtext } from '$lib/components';
	import { tableOfContentsActiveHeadlineId } from '$lib/stores/tableOfContentsActiveHeadlineId';
	import { clickOutside } from '$lib/utils';
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';

	const {
		page: { blocks }
	} = getContext<PageData>('pageData');

	let scrollY = 0;

	let open = false;
	const toggleOpen = () => (open = !open);
</script>

<svelte:window bind:scrollY />
{#if $tableOfContentsActiveHeadlineId && blocks.filter((block) => block.type === 'heading').length > 1 && scrollY > 0}
	<nav class="relative flex items-center" transition:fade>
		<details class="group" bind:open>
			<summary class="cursor-pointer list-none" class:pointer-events-none={open}>
				<Richtext>
					<h3 class="flex cursor-pointer items-center">
						{$tableOfContentsActiveHeadlineId}
						<Icon class="my-auto hidden group-open:block" name="ChevronDown" />
						<Icon class="my-auto block group-open:hidden" name="ChevronRight" />
					</h3>
				</Richtext>
			</summary>
			{#if open}
				<div
					transition:fade
					class="absolute left-0 top-20 max-h-[50vh] w-max max-w-[50vw] overflow-scroll rounded-lg bg-light/90 px-6 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-[2px] dark:bg-dark/90 dark:ring-white/10"
					use:clickOutside
					on:click_outside={toggleOpen}
				>
					<Richtext class="pb-0">
						{#each blocks as block}
							{#if block.type === 'heading'}
								<a
									class="text-bg-bg-accent-dark block font-pixel no-underline transition-all hover:text-primary"
									class:text-primary={block.content.text === $tableOfContentsActiveHeadlineId}
									class:pl-4={block.content.level === 'h2'}
									class:pl-8={block.content.level === 'h3'}
									class:pl-10={block.content.level === 'h4'}
									class:pl-12={block.content.level === 'h5'}
									class:pl-14={block.content.level === 'h6'}
									on:click={toggleOpen}
									href={`#${encodeURIComponent(block.content.text)}`}>{block.content.text}</a
								>
							{/if}
						{/each}
					</Richtext>
				</div>
			{/if}
		</details>
	</nav>
{/if}
