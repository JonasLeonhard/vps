<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';
	import { inview } from 'svelte-inview';

	export let images: ImageT[] = [];

	let indexesInView: number[] = [];
	let imageDivs: HTMLDivElement[] = [];

	const onThumbnailClick = (index: number) => {
		indexesInView = [index];
		(imageDivs?.[index] as HTMLDivElement)?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};
</script>

<div class="flex gap-5 lg:gap-8 xl:gap-20">
	<div class="flex w-full flex-1 flex-col gap-5 lg:gap-10 lg:pl-40">
		{#each images as image, index}
			<div
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
			>
				<Image
					class="images__image h-auto w-full rounded-3xl object-cover transition-all md:max-h-[70vh]"
					style="object-position: {image.content.focus ||
						'center'};  --random-offset: {image.serverThumbOffset}px; --scale: 100%"
					{image}
				/>
			</div>
		{/each}
	</div>

	<div class="sticky top-40 flex h-min max-h-[70vh] flex-col gap-5">
		{#each images as image, index}
			<div
				class={`images__image relative cursor-pointer overflow-hidden rounded-lg transition-all ${
					indexesInView?.at(0) === index ? 'border border-secondary' : ''
				}`}
				style="--random-offset: {image.serverThumbOffset}px; --scale: {indexesInView?.at(-1) ===
				index
					? '100'
					: '90'}%"
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
