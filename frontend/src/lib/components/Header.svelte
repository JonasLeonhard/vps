<script lang="ts">
	import { HeaderCommandMode, HeaderSettings, Headroom, Icon } from '$lib/components';
	import type { Language, Globals } from '$lib/types';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];
</script>

<Headroom offset={40} tolerance={180}>
	<div class="container mx-auto flex py-3">
		<!-- Items: Left -->
		<a href={`/${currentLanguage.code}`} aria-label="Home" class="flex">
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
