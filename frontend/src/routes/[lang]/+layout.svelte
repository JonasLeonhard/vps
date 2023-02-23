<script lang="ts">
	import LanguageSelect from '$src/lib/components/LanguageSelect.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// TODO: remove when eslint doesnt remove this anymore.
	console.log('LanguageSelect', LanguageSelect);
</script>

<LanguageSelect languages={data.languages} currentLanguage={data.lang} />
<slot />
