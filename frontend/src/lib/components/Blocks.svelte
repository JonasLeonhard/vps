<script lang="ts">
	import { Accordion, Code, Details, Heading, Images, Richtext, Search } from '$lib/components';
	import type { ContentBlock } from '$lib/types';

	export let blocks: ContentBlock[] = [];

	const getClass = (block: ContentBlock) => {
		if (block.type === 'search') {
			return 'mx-auto my-4';
		}

		return 'container mx-auto my-4';
	};
</script>

<ul class="my-4">
	{#each blocks as block, index}
		{#if !block?.isHidden}
			{#if block.type === 'accordion'}
				<li class="container mx-auto my-8">
					<Accordion {...block.content} />
				</li>
			{:else if block.type === 'code'}
				<li class="container mx-auto my-8">
					<Code {...block.content} />
				</li>
			{:else if block.type === 'details'}
				<li class="container mx-auto my-8">
					<Details {...block.content} />
				</li>
			{:else if block.type === 'heading'}
				<li class="container mx-auto my-8">
					<Heading {...block.content} />
				</li>
			{:else if block.type === 'richtext'}
				<li class="container mx-auto my-8">
					<Richtext {...block.content} />
				</li>
			{:else if block.type === 'images'}
				<li class="container mx-auto my-8">
					<Images {...block.content} />
				</li>
			{:else if block.type === 'search'}
				<li class="mx-auto my-8 max-w-[1600px]">
					<Search {...block.content} />
				</li>
			{:else}
				<li>{index} - {block.type} : {console.log(blocks)}</li>
			{/if}
		{/if}
	{/each}
</ul>
