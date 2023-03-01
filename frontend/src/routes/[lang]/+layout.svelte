<script lang="ts">
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<LanguageSelect languages={data.languages} currentLanguage={data.lang} />
<ThemeToggle />
<slot />
