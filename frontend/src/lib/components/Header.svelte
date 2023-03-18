<script lang="ts">
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Headroom from '$lib/components/Headroom.svelte';

	import type { Language } from '$lib/types';

	export let languages: Language[];
	export let currentLanguage: Language;
</script>

<Headroom>
	<div class="container m-auto flex">
		<!-- Items: Left -->
		<div class="mr-auto flex items-center">
			<span>TODO: add icon/slogan here.</span>
		</div>
		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<LanguageSelect {languages} {currentLanguage} />
			<ThemeToggle />
		</div>
	</div>
</Headroom>
