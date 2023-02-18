<script lang="ts">
	import LanguageSelect from '$src/lib/components/LanguageSelect.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	// TODO: why does the import get removed without this?
	console.log(LanguageSelect);
</script>

<h1 class="text-3xl font-bold underline">
	Hello {data.currentLanguage.code}!
</h1>

<LanguageSelect languages={data.languages} currentLanguage={data.currentLanguage} />

<div class="mx-auto max-w-lg p-8">
	<details
		class="rounded-lg p-6 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10"
		open
	>
		<summary class="select-none text-sm font-semibold leading-6 text-slate-900 dark:text-white">
			Why do they call it Ovaltine?
		</summary>
		<div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
			<p>The mug is round. The jar is round. They should call it Roundtine.</p>
		</div>
	</details>
</div>

<article class="prose">
	<h1>test</h1>
</article>
