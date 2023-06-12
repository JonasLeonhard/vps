<script lang="ts">
	import type { Icon } from '$lib/types';
	import Settings from './Settings.svelte';
	import Copy from './Copy.svelte';
	import Copied from './Copied.svelte';

	export let name: Icon;
</script>

<div class={$$props.class}>
	{#if name === 'Settings'}
		<Settings />
	{:else if name === 'Copy'}
		<Copy />
	{:else if name === 'Copied'}
		<Copied />
	{:else}
		Icon undefined: {name}
	{/if}
</div>
