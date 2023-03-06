<script lang="ts">
	import SlideToggle from '$lib/components/SlideToggle.svelte';
	import { theme } from '$lib/stores/theme';

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

<SlideToggle name="theme" bind:checked label="testToggle" on:change={onThemeChange} />
