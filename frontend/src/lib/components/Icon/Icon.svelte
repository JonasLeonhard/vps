<script lang="ts">
	import type { Icon } from '$lib/types';
	import Settings from './Settings.svelte';
	export let name: Icon;
</script>

<div class={$$props.class}>
	{#if name === 'Settings'}
		<Settings />
	{:else}
		Icon undefined: {name}
	{/if}
</div>
