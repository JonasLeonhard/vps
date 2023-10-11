<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';

	export let images: ImageT[] = [];
</script>

<div class="flex gap-20">
	<div class="flex w-full flex-col gap-10 pl-40">
		{#each images as image}
			<Image class="w-full rounded-3xl" {image} />
		{/each}
	</div>

	<div class="sticky top-40 flex h-min flex-col gap-5">
		{#each images as image}
			<Image class="w-20 rounded-lg border" {image} />
		{/each}
	</div>
</div>
