<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	import type { Language } from '$lib/types';

	export let currentLanguage: Language;
	export let languages: Language[];

	let isOpen = false;
</script>

<Icon
	name="Settings"
	class="cursor-pointer rounded-md bg-bg-accent-light p-4 dark:bg-bg-accent-dark"
	onClick={() => {
		console.log('Settings clicked');
		isOpen = !isOpen;
	}}
/>

{#if isOpen}
	<LanguageSelect {languages} {currentLanguage} />
	<ThemeToggle />
{/if}
