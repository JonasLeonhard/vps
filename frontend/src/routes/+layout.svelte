<script>
	import '../app.css';
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

<slot />
