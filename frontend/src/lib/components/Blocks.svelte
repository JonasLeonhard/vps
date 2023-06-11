<script lang="ts">
	import type { ContentBlock } from '$lib/types';
	import Accordion from '$lib/components/Accordion.svelte';
	import Details from '$lib/components/Details.svelte';

	export let blocks: ContentBlock[];
	console.log('blocks', blocks);
</script>

<ul class="container mx-auto my-4">
	{#each blocks as block, index}
		<li class="my-8">
			{#if block.type === 'details'}
				<Details {...block.content} />
			{:else if block.type === 'accordion'}
				<Accordion {...block.content} />
			{:else}
				<li>{index} - {block.type}</li>
			{/if}
		</li>
	{/each}
</ul>
