<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Icon } from '$lib/components';

	export let language = 'typescript';
	export let filename: string | undefined;
	export let rendered: string | undefined;
	export let code: string;

	let copied = false;
	let open = true;

	const onCopy = () => {
		navigator.clipboard.writeText(code);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	};

	const toggleCode = () => {
		open = !open;
	};
</script>

<code
	class="group relative block overflow-hidden rounded-xl bg-[#1e1e2e] pt-12 transition-all [&>*]:p-6"
	class:pb-5={!open}
	class:delay-150={!open}
	lang={language}
>
	<div class="absolute top-1 flex gap-2" title="Toggle">
		<div
			class="h-4 w-4 cursor-pointer rounded-xl bg-fusionRed"
			on:click={toggleCode}
			on:keydown={toggleCode}
		/>
		<div
			class="h-4 w-4 cursor-pointer rounded-xl bg-flirtatious"
			on:click={toggleCode}
			on:keydown={toggleCode}
		/>
		<div
			class="h-4 w-4 cursor-pointer rounded-xl bg-algalFuel"
			on:click={toggleCode}
			on:keydown={toggleCode}
		/>
	</div>
	<div
		class="absolute left-[50%] top-0 -translate-x-[50%] text-gray/50"
		title={filename || language}
	>
		{filename || language}
	</div>

	<button
		class="absolute right-3 top-[10px] flex flex items-center justify-center rounded-md border bg-bg-accent-light !p-3 p-4 opacity-0 transition-all group-hover:opacity-100 dark:bg-bg-accent-dark"
		on:click={onCopy}
		title="Copy"
	>
		<Icon name={copied ? 'Copied' : 'Copy'} />
	</button>
	{#if open}
		<div transition:fade={{ duration: 300 }}>
			{@html rendered || code}
		</div>
	{/if}
</code>
