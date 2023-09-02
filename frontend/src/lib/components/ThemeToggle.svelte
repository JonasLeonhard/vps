<script lang="ts">
	import SlideToggle from '$lib/components/SlideToggle.svelte';
	import { theme } from '$lib/stores/theme';
	import type { Globals } from '$lib/types';

	export let globals: Globals;

	$: checked = $theme === 'light';

	const onThemeChange = () => {
		theme.set(checked ? 'light' : 'dark');
	};
</script>

<svelte:head>
	<script defer>
		const renderedTheme = document.documentElement.dataset.theme;

		if (renderedTheme == '%theme%') {
			const userPrefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
			const userPreferedTheme = userPrefersLightTheme ? 'light' : 'dark';

			document.documentElement.dataset.theme = userPreferedTheme;
		}
	</script>
</svelte:head>

<SlideToggle
	class="px-4"
	name="theme"
	bind:checked
	label={$theme === 'light' ? globals.translations.themeLight : globals.translations.themeDark}
	on:change={onThemeChange}
	iconLeft="Sun"
	iconRight="Moon"
/>
