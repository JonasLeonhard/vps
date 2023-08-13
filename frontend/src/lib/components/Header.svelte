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
			<HeaderSettings {globals} {currentLanguage} {languages} />
		</div>
	</div>
</Headroom>
