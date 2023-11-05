<script lang="ts">
	import { Richtext, Icon } from '$lib/components';
	export let level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export let text: string;

	let clicked = false;

	const onCopyClick = (e: MouseEvent, text: string) => {
		clicked = true;
		const encodedText = encodeURIComponent(text);
		const urlWithHash = `${window.location.href}#${encodedText}`;
		navigator.clipboard.writeText(urlWithHash);
		console.log(e);
		(e?.target as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		setTimeout(() => {
			clicked = false;
		}, 1000);
	};
</script>

<Richtext>
	<svelte:element
		this={level || 'h2'}
		class="group relative"
		id={encodeURIComponent(text)}
		on:click={(e) => onCopyClick(e, text)}
		title="Copy Link"
	>
		<Icon
			name={clicked ? 'Copied' : 'Link'}
			class="absolute -left-8 top-[50%] -translate-y-[50%] opacity-0 transition-all hover:opacity-100 group-hover:opacity-100"
			onClick={(e) => onCopyClick(e, text)}
		/>
		{@html text}
	</svelte:element>
</Richtext>
