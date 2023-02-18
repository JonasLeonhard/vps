<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Language } from '$lib/types/index';
	export let languages: Language[];
	export let currentLanguage: Language;

	// TODO: why does the import get removed without this?
	console.log(enhance);

	const onSelectChange = (event: any) => {
		event.target.parentElement.submit();
	};
</script>

<h2>
	<form method="POST" action="/?/setLang" use:enhance>
		<select name="lang" bind:value={currentLanguage.code} on:change={onSelectChange}>
			{#each languages as lang}
				<option value={lang.code}>{lang.name}</option>
			{/each}
		</select>
	</form>
</h2>
