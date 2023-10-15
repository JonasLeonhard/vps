<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';
	import { inview } from 'svelte-inview';

	export let images: ImageT[] = [];

	let indexesInView: { [key: number]: boolean } = {};
</script>

<div class="flex gap-5 lg:gap-8 xl:gap-20">
	<div class="flex w-full flex-1 flex-col gap-5 lg:gap-10 lg:pl-40">
		{#each images as image, index}
			<div
				use:inview
				on:inview_change={(event) => {
					const { inView, entry, scrollDirection, observer, node } = event.detail;
					console.log(inView, entry, scrollDirection, observer, node, index);
					indexesInView[index] = inView;
				}}
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
			<Image
				class={`images__image w-14 cursor-pointer rounded-lg transition-all hover:border hover:border-secondary lg:w-20 ${
					indexesInView?.[index] ? 'border border-secondary' : ''
				}`}
				style="object-position: {image.content.focus ||
					'center'}; --random-offset: {image.serverThumbOffset}px; --scale: {indexesInView[index]
					? '100'
					: '90'}%"
				{image}
			/>
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
