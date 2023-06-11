<script lang="ts">
	export let language = 'typescript';
	export let rendered: string | undefined;
	export let code: string;
</script>

<code lang={language}>{@html rendered || code}</code>
