<script lang="ts">
	import Details from '$lib/components/Details.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#each data.page.blocks as block, index}
	<li>{index} - {block.type}</li>
{/each}

<h1 class="text-3xl font-bold underline">
	Hello {data.lang.code}!
</h1>

<div class="mx-auto max-w-lg p-8">
	<Details summary="detailsSummary" details="detail information..." />
</div>

<article class="prose">
	<h1>test</h1>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
</article>
