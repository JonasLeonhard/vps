<script lang="ts">
	import SlideToggle from '$lib/components/SlideToggle.svelte';
	import { theme } from '$lib/stores/theme';

	let formRef: HTMLFormElement;
	$: checked = $theme === 'light';

	const onThemeChange = () => {
		// TODO: instead of submitting, can we just change the theme here?
		// formRef.submit();
		theme.set(checked ? 'light' : 'dark');
	};
</script>

<form method="POST" action="/?/setTheme" bind:this={formRef}>
	<SlideToggle name="theme" bind:checked label="testToggle" on:change={onThemeChange} />
</form>
