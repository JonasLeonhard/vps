<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="text-3xl font-bold underline">
	Hello {data.lang.code}!
</h1>

<div class="mx-auto max-w-lg p-8">
	<details
		class="rounded-lg p-6 open:bg-light open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-dark dark:open:ring-white/10"
		open
	>
		<summary class="cursor-pointer select-none text-sm font-semibold leading-6">
			Why do they call it Ovaltine?
		</summary>
		<div class="mt-3 text-sm leading-6 text-text-accent">
			<p>The mug is round. The jar is round. They should call it Roundtine.</p>
		</div>
	</details>
</div>

<article class="prose">
	<h1>test</h1>
</article>
