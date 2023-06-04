<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header globals={data.globals} languages={data.languages} currentLanguage={data.lang} />
<main class="h-[calc(100vh+100px)] pt-20">
	<slot />
</main>
<Footer globals={data.globals} />
