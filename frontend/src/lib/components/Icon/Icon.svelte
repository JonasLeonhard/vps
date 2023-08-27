<script lang="ts">
	import Article from './Article.svelte';
	import Branch from './Branch.svelte';
	import Brightness from './Brightness.svelte';
	import Close from './Close.svelte';
	import Copied from './Copied.svelte';
	import Copy from './Copy.svelte';
	import Language from './Language.svelte';
	import Logo from './Logo.svelte';
	import Settings from './Settings.svelte';
	import Terminal from './Terminal.svelte';

	import type { Icon } from '$lib/types';

	export let name: Icon;
	export let onClick: () => void = () => null;
	export let onMouseover: (hovered: boolean) => void = () => null;
	export let onMousemove: (event: MouseEvent) => void = () => null;
	export let onMouseout: (event: MouseEvent) => void = () => null;
</script>

<button
	aria-label={name}
	on:click={onClick}
	on:mouseenter={() => onMouseover(true)}
	on:mouseover={() => onMouseover(true)}
	on:focus={() => onMouseover(true)}
	on:mouseleave={() => onMouseover(false)}
	on:focusout={() => onMouseover(false)}
	on:mousemove={onMousemove}
	on:mouseout={onMouseout}
	{...$$restProps}
>
	{#if name === 'Settings'}
		<Settings />
	{:else if name === 'Copy'}
		<Copy />
	{:else if name === 'Copied'}
		<Copied />
	{:else if name === 'Terminal'}
		<Terminal />
	{:else if name === 'Logo'}
		<Logo />
	{:else if name === 'Close'}
		<Close />
	{:else if name === 'Branch'}
		<Branch />
	{:else if name === 'Article'}
		<Article />
	{:else if name === 'Language'}
		<Language />
	{:else if name === 'Brightness'}
		<Brightness />
	{:else}
		Icon undefined: {name}
	{/if}
</button>
