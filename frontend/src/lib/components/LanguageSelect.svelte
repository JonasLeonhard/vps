<script lang="ts">
	import type { Language } from '$lib/types/index';

	import { page } from '$app/stores';

	export let languages: Language[];
	export let currentLanguage: Language;
	let formRef: HTMLFormElement;

	const onSelectChange = () => {
		formRef.submit();
	};
</script>

<form
	class="w-full px-4 text-text-light dark:text-text-light"
	method="POST"
	action="/?/setLang"
	bind:this={formRef}
>
	<select class="w-full" name="lang" bind:value={currentLanguage.code} on:change={onSelectChange}>
		{#each languages as lang}
			<option value={lang.code} selected={lang.code === currentLanguage.code}>{lang.name}</option>
		{/each}
	</select>
	<input name="url" aria-hidden="true" class="hidden" bind:value={$page.url} />
</form>
