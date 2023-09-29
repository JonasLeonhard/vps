<script lang="ts">
	import { Icon } from '$lib/components';

	export let language = 'typescript';
	export let filename: string | undefined;
	export let rendered: string | undefined;
	export let code: string;

	let copied = false;
	const onCopy = () => {
		navigator.clipboard.writeText(code);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<code class="group relative block overflow-hidden rounded-xl [&>*]:p-6" lang={language}>
	<div
		class="absolute bottom-0 right-0 text-info/30 opacity-0 transition-all group-hover:opacity-100"
		title={language}
	>
		{filename || language}
	</div>

	<button
		class="absolute right-0 top-0 opacity-0 transition-all group-hover:opacity-100"
		on:click={onCopy}
	>
		<Icon name={copied ? 'Copied' : 'Copy'} />
	</button>
	{@html rendered || code}
</code>
