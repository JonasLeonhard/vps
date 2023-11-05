<script lang="ts">
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
	class="group relative block overflow-hidden rounded-xl bg-[#1e1e2e] p-6 pb-3 pt-14 shadow-lg ring-1 ring-black/5 transition-all delay-300 dark:ring-white/10"
	lang={language}
>
	<div class="absolute top-1 mt-6 flex gap-2" title="Toggle">
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
		class="absolute left-[50%] top-0 -translate-x-[50%] p-6 text-gray/50"
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
	<div class="overflow-auto transition-all" class:max-h-0={!open} class:max-h-[80vh]={open}>
		{@html rendered || code}
	</div>
</code>
