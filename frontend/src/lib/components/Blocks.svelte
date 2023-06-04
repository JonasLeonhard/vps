<script lang="ts">
	import type { ContentBlock } from '$lib/types';
	import Details from '$lib/components/Details.svelte';

	export let blocks: ContentBlock[];
</script>

<ul class="container mx-auto my-4">
	{#each blocks as block, index}
		<li class="my-8">
			{#if block.type === 'details'}
				<Details {...block.content} />
			{:else}
				<li>{index} - {block.type}</li>
			{/if}
		</li>
	{/each}
</ul>
