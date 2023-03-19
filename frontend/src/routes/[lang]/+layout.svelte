<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header header={data.header} languages={data.languages} currentLanguage={data.lang} />
<main class="pt-20">
	<slot />
</main>
