<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { Image } from '$lib/types';
	export let image: Image;
	export let loading: 'lazy' | 'eager' | null = null;

	// TODO: pixel in effect once enter viewport
</script>

<img
	class={$$props.class || 'h-full w-full rounded-3xl object-cover'}
	src={`${PUBLIC_BACKEND_URL}${image.url}`}
	alt={image.content.alt}
	width={image.dimensions.width}
	height={image.dimensions.height}
	loading={loading || 'lazy'}
	srcset={image.srcset
		?.split(',')
		?.map((srcset) => srcset.replace('/', `${PUBLIC_BACKEND_URL}/`))
		?.join(',')}
	sizes={image?.content?.sizes}
	style={$$props.style || `object-position: ${image?.content?.focus || 'center'};`}
	{...$$restProps}
/>
