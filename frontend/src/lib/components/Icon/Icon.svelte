<script lang="ts">
	import type { Icon } from '$lib/types';
	import Settings from './Settings.svelte';
	import Copy from './Copy.svelte';
	import Copied from './Copied.svelte';
	import Terminal from './Terminal.svelte';
	import Logo from './Logo.svelte';

	export let name: Icon;
	export let onClick: () => void | undefined;
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
	{:else}
		Icon undefined: {name}
	{/if}
</button>
