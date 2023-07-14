<script lang="ts">
	import type { Globals } from '$lib/types';

	export let globals: Globals;

	let scrollY = 0;
	let innerHeight = 0;
	let svgWrapper; // we use a svg wrapper, since svgs dont support offsetTop

	const getPercentageSeen = (element, innerHeight, scrollY) => {
		if (!element) return 0;

		// Get the relevant measurements and positions
		const viewportHeight = innerHeight;
		const scrollTop = scrollY;
		const elementOffsetTop = element.offsetTop;
		const elementHeight = element.offsetHeight; // was offsetHeight

		// Calculate percentage of the element that's been seen
		const distance = scrollTop + viewportHeight - elementOffsetTop;
		const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));

		// Restrict the range to between 0 and 100
		return Math.min(100, Math.max(0, percentage));
	};

	$: percentageSeen = getPercentageSeen(svgWrapper, innerHeight, scrollY);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<footer class="w-full overflow-hidden">
	<div bind:this={svgWrapper} style={`height: ${Math.min(percentageSeen, 20)}vh`}>
		<svg
			class="relative left-[-25%] h-full w-[150%] fill-bg-accent-dark"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 20"
		>
			<path d="M0,20 A20,20 0 0,1 40,20 Z" />
		</svg>
	</div>

	<div class="bg-bg-accent-dark">
		<div class="container z-10 mx-auto py-24">
			{#each globals.footerNavigation as footerNavigation}
				{footerNavigation.text}
			{/each}

			<br />
			{#each globals.metaNavigation as metaNavigation}
				{metaNavigation.text}
			{/each}

			<br />
			{#each globals.socialMedia as socialMedia}
				{socialMedia.service}
			{/each}
		</div>
	</div>
</footer>
