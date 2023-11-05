<script lang="ts">
	export let text: string | null = null;
</script>

<div
	class={`prose prose-neutral dark:prose-invert md:prose-lg lg:prose-xl 2xl:prose-2xl prose-code:rounded-sm prose-code:bg-primary prose-code:p-1 prose-code:before:content-none prose-code:after:content-none ${$$props.class}`}
>
	{#if text}
		{@html text}
	{/if}
	<slot />
</div>
