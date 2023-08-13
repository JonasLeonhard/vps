<script lang="ts">
	import Close from './Close.svelte';
	import Copied from './Copied.svelte';
	import Copy from './Copy.svelte';
	import Logo from './Logo.svelte';
	import Settings from './Settings.svelte';
	import Terminal from './Terminal.svelte';

	import type { Icon } from '$lib/types';

	export let name: Icon;
	export let onClick: () => void | null;
</script>

<button on:click={onClick} {...$$restProps}>
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
	{:else}
		Icon undefined: {name}
	{/if}
</button>
