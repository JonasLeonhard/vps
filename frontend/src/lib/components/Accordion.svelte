<script lang="ts">
	import { Richtext } from '$lib/components';

	interface AccordionItem {
		details: string;
		summary: string;
	}
	[];

	export let items: AccordionItem[] = [];

	let open: number[] = [];

	const onDetailsClick = (index: number) => {
		open = open.includes(index)
			? open.filter((openIndex) => openIndex !== index)
			: [...open, index];
	};
</script>

<div
	class={`flex flex-col gap-6 rounded-lg p-6 ring-black/5 dark:ring-white/10 ${
		open.length > 0 ? 'bg-light shadow-lg ring-1 dark:bg-dark' : ''
	}`}
>
	{#each items as item, index}
		<details on:click={() => onDetailsClick(index)} on:keydown={() => onDetailsClick(index)}>
			<summary class="cursor-pointer select-none items-center text-sm font-semibold leading-6">
				{item.summary}
			</summary>
			<div class="mt-3 text-sm leading-6 text-text-accent">
				<Richtext>
					{@html item.details}
				</Richtext>
			</div>
		</details>
	{/each}
</div>
