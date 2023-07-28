<script lang="ts">
	import { fly } from 'svelte/transition';

	import type { ScrollDirection } from '$lib/types';

	export let offset = 0;
	export let tolerance = 0;

	let y = 0;
	let lastY = 0;
	let lastScrollDirection: ScrollDirection = 'up';
	$: headerVisible = getScrollDirection(y) === 'down' ? false : true;
	$: headerDocked = y <= 0;
	$: classesHeaderDocked = headerDocked
		? 'py-12 after:h-0 after:opacity-0 after:duration-[0.25s]'
		: 'after:h-full after:opacity-1';

	const getScrollDirection = (y: number): ScrollDirection => {
		if (y < offset) return lastScrollDirection;

		// Some browsers (Safari or Browsers on iOS) will let you scroll "above" 0, into the negative numbers.
		// This will cause the header to collapse after the user scrolls to the top.
		if (y < 0) return 'up';

		const scrolled = lastY - y;

		if (Math.abs(scrolled) < tolerance) return lastScrollDirection;

		const scrollDirection = scrolled >= 0 ? 'up' : 'down';
		lastY = y;
		lastScrollDirection = scrollDirection;
		return scrollDirection;
	};
</script>

<svelte:window bind:scrollY={y} />
<header
	class={`to-transparent after:to-transparent fixed z-50 flex w-full flex-col transition-all duration-700 after:absolute after:top-0 after:-z-10 after:contents after:w-full after:bg-gradient-to-b after:from-white after:backdrop-blur-[2px] after:transition-all after:duration-1000 dark:after:from-black ${classesHeaderDocked} ${$$props.class}`}
	class:top-0={headerVisible}
	class:-top-20={!headerVisible}
>
	<slot />
	{#if !headerDocked && headerVisible}
		<div
			transition:fly={{
				delay: headerVisible ? 0 : 250,
				duration: 800,
				x: '-100%',
				opacity: 0
			}}
			class="block w-screen animate-borderGradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:400%_400%] py-[1px] [animation-duration:10s]"
		/>
	{/if}
</header>
