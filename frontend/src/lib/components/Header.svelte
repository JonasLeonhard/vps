<script lang="ts">
	import HeaderCommandMode from '$lib/components/HeaderCommandMode.svelte';
	import HeaderSettings from '$lib/components/HeaderSettings.svelte';
	import Headroom from '$lib/components/Headroom.svelte';

	import type { Language, Globals } from '$lib/types';
	import Icon from './Icon/Icon.svelte';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];
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

<Headroom offset={40} tolerance={80} class="">
	<div class="container mx-auto flex px-3 py-3 md:px-0">
		<!-- Items: Left -->
		<a href={`/${currentLanguage.code}`} class="flex">
			<Icon name="Logo" />
		</a>
		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<!-- Nav-Items -->
			<HeaderCommandMode {globals} {currentLanguage} />
			<HeaderSettings {currentLanguage} {languages} />
		</div>
	</div>
</Headroom>
