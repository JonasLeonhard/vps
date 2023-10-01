<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { Image } from '$lib/types';
	export let image: Image;
	export let loading: 'lazy' | 'eager' | null = null;
</script>

<img
	src={`${PUBLIC_BACKEND_URL}${image.url}`}
	alt={image.content.alt}
	loading={loading || 'lazy'}
/>
