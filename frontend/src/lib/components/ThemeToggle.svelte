<script lang="ts">
	import SlideToggle from '$lib/components/SlideToggle.svelte';
	import { theme } from '$lib/stores/theme';

	$: checked = $theme === 'light';

	const onThemeChange = () => {
		theme.set(checked ? 'light' : 'dark');
	};
</script>

<SlideToggle name="theme" bind:checked label="themeToggle" on:change={onThemeChange} />
