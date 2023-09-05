<script lang="ts">
	import type { ContentBlock } from '$lib/types';
	import Accordion from '$lib/components/Accordion.svelte';
	import Code from '$lib/components/Code.svelte';
	import Details from '$lib/components/Details.svelte';
	import Richtext from '$lib/components/Richtext.svelte';

	export let blocks: ContentBlock[] = [];
</script>

<ul class="container mx-auto my-4">
	{#each blocks as block, index}
		<li class="my-8">
			{#if block.type === 'accordion'}
				<Accordion {...block.content} />
			{:else if block.type === 'code'}
				<Code {...block.content} />
			{:else if block.type === 'details'}
				<Details {...block.content} />
			{:else if block.type === 'richtext'}
				<Richtext {...block.content} />
			{:else}
				<li>{index} - {block.type}</li>
			{/if}
		</li>
	{/each}
</ul>
