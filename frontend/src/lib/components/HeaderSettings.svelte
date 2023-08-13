<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Richtext from '$lib/components/Richtext.svelte';

	import type { Globals, Language } from '$lib/types';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];

	let isOpen = false;

	console.log('globals', globals);
</script>

<Icon
	name="Settings"
	class="cursor-pointer rounded-md bg-bg-accent-light p-4 dark:bg-bg-accent-dark"
	onClick={() => {
		console.log('Settings clicked');
		isOpen = !isOpen;
	}}
/>

<Dialog bind:open={isOpen}>
	<div class="my-4 flex flex-col gap-8">
		<Richtext class="px-4">
			<h2>{globals.translations.language || 'Language'}</h2>
		</Richtext>
		<LanguageSelect {languages} {currentLanguage} />
		<hr />
		<Richtext class="px-4">
			<h2>{globals.translations.theme || 'Theme'}</h2>
		</Richtext>
		<ThemeToggle {globals} />
	</div>
</Dialog>
