<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';
	import { inview } from 'svelte-inview';
	import Scroller from '@sveltejs/svelte-scroller';

	export let images: ImageT[] = [];

	let indexesInView: number[] = [];
	let imageDivs: HTMLElement[] = [];
	let sectionIndex: number, sectionOffset: number, progress: number;

	const onThumbnailClick = (index: number) => {
		indexesInView = [index];
		(imageDivs?.[index] as HTMLElement)?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	const END_POSITIONS = [10, 30, 20, 14, 12];
	const SERVER_THUMB_OFFSET = [-20, 15, -10, 15, 0];
	const SERVER_IMAGE_OFFSET = [-70, 20, -30, 10, -70];

	const getEndposition = (index: number, prog: number) => {
		const endPosition = END_POSITIONS[index % 5];

		// only animate the current active section. If we look at an inactive section, set its progress to 1 or 0 respectivly
		if (index < sectionIndex) return endPosition * 0;
		if (index > sectionIndex) return endPosition * 1;

		// we start the animation at its endposition, then animate to its original position
		const clampedProgress = 1 - Math.max(Math.min(prog, 1), 0);
		return endPosition * clampedProgress;
	};
</script>

<div class="flex gap-5 lg:gap-8 xl:gap-20">
	<Scroller top={0} bottom={1} bind:index={sectionIndex} bind:offset={sectionOffset} bind:progress>
		<div slot="foreground" class="flex w-full flex-1 flex-col gap-2 lg:gap-10 lg:pl-40">
			{#each images as image, index}
				<section
					use:inview={{ threshold: 0.75 }}
					on:inview_change={(event) => {
						const { inView } = event.detail;
						if (inView) {
							indexesInView = [...indexesInView, index];
						} else {
							indexesInView = indexesInView.filter((i) => i !== index);
						}
					}}
					bind:this={imageDivs[index]}
					class="transition-all duration-75 will-change-transform"
					style:transform="translateY({getEndposition(index, sectionOffset)}%)"
					style:z-index={indexesInView?.at(-1) === index ? 1 : 0}
				>
					<Image
						class="images__image h-auto w-full rounded-3xl object-cover transition-all md:max-h-[70vh]"
						style="object-position: {image.content.focus ||
							'center'};  --random-offset: {SERVER_IMAGE_OFFSET[
							index % SERVER_IMAGE_OFFSET.length
						]}px; --scale: 100%"
						{image}
					/>
				</section>
			{/each}
		</div>
	</Scroller>

	<div class="sticky top-40 flex h-min max-h-[70vh] flex-col gap-5">
		{#each images as image, index}
			<div
				class={`images__image relative cursor-pointer overflow-hidden rounded-lg transition-all ${
					indexesInView?.at(0) === index ? 'border border-secondary' : ''
				}`}
				style="--random-offset: {SERVER_THUMB_OFFSET[
					index % SERVER_THUMB_OFFSET.length
				]}px; --scale: {indexesInView?.at(-1) === index ? '100' : '90'}%"
				on:click={() => onThumbnailClick(index)}
				on:keydown={() => onThumbnailClick(index)}
			>
				<Image
					class="w-14 transition-all hover:border hover:border-secondary lg:w-20"
					style="object-position: {image.content.focus || 'center'};"
					{image}
				/>
				<div
					class="absolute inset-0 h-full w-full bg-black transition-all duration-700 hover:opacity-0"
					class:opacity-50={indexesInView?.at(-1) !== index}
					class:opacity-0={indexesInView?.at(-1) === index}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	@screen lg {
		:global(.images__image) {
			transform: translateX(var(--random-offset)) scale(var(--scale));
		}
	}
</style>
