<script lang="ts">
	import { Icon } from '$lib/components';
	// INFO: this component gets loaded by Satori in renderComponentToPng. It only supports css/html that satori supports: https://github.com/vercel/satori#css
	// og image rendered by satori in GET api/og
	export let headline: string;
	export let subline: string | null;
</script>

<div class="flex h-full h-full w-full flex-col items-center justify-center bg-[#0f0d0b]">
	<Icon class="absolute left-10 top-10 text-white" name="Logo" />
	<svg
		class="absolute h-full w-full"
		id="visual"
		viewBox="0 0 900 600"
		width="900"
		height="600"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
	>
		<g transform="translate(900, 0)"
			><path
				d="M0 243.4C-34.2 242.3 -68.5 241.3 -93.1 224.8C-117.8 208.4 -132.8 176.7 -152.7 152.7C-172.7 128.8 -197.5 112.6 -213.4 88.4C-229.3 64.2 -236.4 32.1 -243.4 0L0 0Z"
				fill="#f26c4f"
			/></g
		>
		<g transform="translate(0, 600)"
			><path
				d="M0 -243.4C31.3 -239.7 62.5 -236.1 93.1 -224.8C123.7 -213.6 153.7 -194.9 169 -169C184.3 -143.1 185 -110.1 194.9 -80.7C204.9 -51.4 224.1 -25.7 243.4 0L0 0Z"
				fill="#c473ff"
			/></g
		></svg
	>

	<div class="relative z-10 flex w-full flex-col items-center justify-center text-white">
		<h2 class="text-8xl uppercase text-[#f26c4f]">{headline}</h2>
		{#if subline}
			<h3 class="text-3xl">{subline}</h3>
		{/if}
	</div>
</div>
