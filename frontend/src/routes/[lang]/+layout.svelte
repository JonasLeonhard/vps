<script lang="ts">
	import { Footer, Header, Noise, PageTransition, Seo } from '$lib/components';
	import { setContext } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	setContext('pageData', data);
</script>

<Seo />
<Header />
<main class="min-h-[calc(100vh+15rem)] pt-60">
	<PageTransition path={data.path}>
		<slot />
	</PageTransition>
	<Noise />
</main>
<Footer />
