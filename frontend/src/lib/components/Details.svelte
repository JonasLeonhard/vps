<script lang="ts">
	export let summary: string;
	export let details: string;
</script>

<details
	class="rounded-lg p-6 open:bg-light open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-dark dark:open:ring-white/10"
	open
>
	<summary class="cursor-pointer select-none text-sm font-semibold leading-6">{summary}</summary>
	<div class="mt-3 text-sm leading-6 text-text-accent">
		<p>{details}</p>
	</div>
</details>
