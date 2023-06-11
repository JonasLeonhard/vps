<script lang="ts">
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import theme from 'svelte-highlight/styles/github-dark';

	export let language = 'typescript';
	export let code: string;
	export let highlightedlines: { linenr: number }[] = [];
	export let startinglinenumber = 1;
</script>

<svelte:head>
	{@html theme}
</svelte:head>

{#await import(`./../../../node_modules/svelte-highlight/languages/${language}`)}
	loading code...
{:then syntaxHighlighter}
	<Highlight language={syntaxHighlighter.default} {code} let:highlighted>
		<LineNumbers
			{highlighted}
			hideBorder
			highlightedLines={highlightedlines.map((line) => line.linenr)}
			startingLineNumber={startinglinenumber}
		/>
	</Highlight>
{/await}
