<script lang="ts">
	import { Footer, Header, Noise, PageTransition, Seo } from '$lib/components';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Seo pageSeo={data.page.seo} globalsSeo={data.globals.seo} pageTitle={data.page.title} />
<Header
	globals={data.globals}
	languages={data.languages || []}
	currentLanguage={data.lang}
	blocks={data?.page?.blocks || []}
/>
<main class="min-h-[calc(100vh+15rem)] pt-60">
	<PageTransition path={data.path}>
		<slot />
	</PageTransition>
	<Noise />
</main>
<Footer globals={data.globals} />
