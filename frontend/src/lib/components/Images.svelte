<script lang="ts">
	import { Image } from '$lib/components';
	import type { Image as ImageT } from '$lib/types';

	export let images: ImageT[] = [];
</script>

{#each images as image}
	<Image {image} />
{/each}
