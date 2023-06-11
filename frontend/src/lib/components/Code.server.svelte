<script lang="ts">
	export let language = 'typescript';
	export let code: string;
	export let highlightedlines: { linenr: number }[] = [];
	export let startinglinenumber = 1;
</script>

<code lang={language}>{code}</code>
