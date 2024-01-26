<script lang="ts">
	import type { PageData } from '$lib/types';

	import { page } from '$app/stores';
	import { getContext } from 'svelte';

	const { lang, languages } = getContext<PageData>('pageData');
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
	<select class="w-full" name="lang" bind:value={lang.code} on:change={onSelectChange}>
		{#each languages as globalLang}
			<option value={globalLang.code} selected={globalLang.code === lang.code}
				>{globalLang.name}</option
			>
		{/each}
	</select>
	<input name="url" aria-hidden="true" class="hidden" bind:value={$page.url} />
</form>
