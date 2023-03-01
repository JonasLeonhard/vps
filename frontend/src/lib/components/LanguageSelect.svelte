<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Language } from '$lib/types/index';

	export let languages: Language[];
	export let currentLanguage: Language;

	// TODO: what is the correct type here?
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSelectChange = (event: any) => {
		event.target.parentElement.submit();
	};
</script>

<form method="POST" action="/?/setLang" use:enhance>
	<select name="lang" bind:value={currentLanguage.code} on:change={onSelectChange}>
		{#each languages as lang}
			<option value={lang.code} selected={lang.code === currentLanguage.code}>{lang.name}</option>
		{/each}
	</select>
	<input name="url" aria-hidden="true" class="hidden" bind:value={$page.url} />
</form>
