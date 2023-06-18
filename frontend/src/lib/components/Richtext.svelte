<script lang="ts">
	export let text: string | undefined;
</script>

<div
	class="prose prose-neutral dark:prose-invert prose-code:bg-primary prose-code:rounded-sm prose-code:p-1 prose-code:before:content-none prose-code:after:content-none"
>
	{@html text}
	<slot />
</div>
