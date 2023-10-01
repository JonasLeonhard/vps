<script lang="ts">
	import { Accordion, Code, Details, Richtext, Images } from '$lib/components';
	import type { ContentBlock } from '$lib/types';

	export let blocks: ContentBlock[] = [];
</script>

<ul class="container mx-auto my-4">
	{console.log(blocks)}
	{#each blocks as block, index}
		{#if !block?.isHidden}
			<li class="my-8">
				{#if block.type === 'accordion'}
					<Accordion {...block.content} />
				{:else if block.type === 'code'}
					<Code {...block.content} />
				{:else if block.type === 'details'}
					<Details {...block.content} />
				{:else if block.type === 'richtext'}
					<Richtext {...block.content} />
				{:else if block.type === 'images'}
					<Images {...block.content} />
				{:else}
					<li>{index} - {block.type}</li>
				{/if}
			</li>
		{/if}
	{/each}
</ul>
