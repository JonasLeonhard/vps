<script lang="ts">
	import type { ScrollDirection } from '$lib/types';

	export let offset = 0;
	export let tolerance = 0;

	let y = 0;
	let lastY = 0;
	let lastScrollDirection: ScrollDirection = 'up';
	$: headerVisible = getScrollDirection(y) === 'down' ? false : true;

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
	class={`fixed flex h-20 w-full flex-col transition-all duration-700 ${$$props.class}`}
	class:top-0={headerVisible}
	class:-top-20={!headerVisible}
>
	<slot />
</header>
