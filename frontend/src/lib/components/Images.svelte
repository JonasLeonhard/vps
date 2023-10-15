<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';

	export let images: ImageT[] = [];

	const getImageOffset = (image: ImageT, type: 'thumb' | 'hero') =>
		`object-position: ${image.content.focus || 'center'}; --random-offset: -${
			(type === 'thumb' ? image.serverThumbOffset : image.serverOffset) || 0
		}px;`;
</script>

<div class="flex gap-5 lg:gap-8 xl:gap-20">
	<div class="flex w-full flex-1 flex-col gap-5 lg:gap-10 lg:pl-40">
		{#each images as image}
			<Image
				class="images__image h-auto w-full rounded-3xl object-cover md:max-h-[70vh]"
				style={getImageOffset(image, 'hero')}
				{image}
			/>
		{/each}
	</div>

	<div class="sticky top-40 flex h-min max-h-[70vh] flex-col gap-5">
		{#each images as image}
			<Image
				class="images__image w-14 rounded-lg border lg:w-20"
				style={getImageOffset(image, 'thumb')}
				{image}
			/>
		{/each}
	</div>
</div>

<style>
	@screen lg {
		:global(.images__image) {
			transform: translateX(var(--random-offset));
		}
	}
</style>
