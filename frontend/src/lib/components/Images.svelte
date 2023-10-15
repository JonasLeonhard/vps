<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';
	import { inview } from 'svelte-inview';

	export let images: ImageT[] = [];

	const getImageStyle = (image: ImageT, type: 'thumb' | 'hero', inView: boolean) => {
		let style = `object-position: ${image.content.focus || 'center'};`;

		if (type === 'hero') {
			style += `--random-offset: -${image.serverOffset || 0}px;`;
		}

		if (type === 'thumb') {
			style += `--random-offset: -${image.serverThumbOffset || 0}px;`;
			style += `--scale: -${inView ? '100%' : '90%'}`;
		}

		return style;
	};

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
					style={getImageStyle(image, 'hero', indexesInView?.[index])}
					{image}
				/>
			</div>
		{/each}
	</div>

	<div class="sticky top-40 flex h-min max-h-[70vh] flex-col gap-5">
		{#each images as image, index}
			<Image
				class={`images__image w-14 rounded-lg transition-all lg:w-20 ${
					indexesInView?.[index] ? 'border border-secondary' : ''
				}`}
				style={getImageStyle(image, 'thumb', indexesInView?.[index])}
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
