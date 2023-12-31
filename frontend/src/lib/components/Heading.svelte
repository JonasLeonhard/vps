<script lang="ts">
	import { page } from '$app/stores';
	import { Icon, Richtext } from '$lib/components';
	import { tableOfContentsActiveHeadlineId } from '$lib/stores/tableOfContentsActiveHeadlineId';
	import { inview } from 'svelte-inview';

	export let level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export let text: string;

	let clicked = false;
	let searchParams: URLSearchParams;

	page.subscribe(({ url }) => {
		searchParams = url.searchParams;
	});

	const onCopyClick = (e: MouseEvent, text: string) => {
		clicked = true;
		const encodedText = encodeURIComponent(text);
		const urlWithHash = `${window.location.href}#${encodedText}`;
		navigator.clipboard.writeText(urlWithHash);
		console.log(e);
		(e?.target as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		setTimeout(() => {
			clicked = false;
		}, 1000);
	};

	const replaceQueryParams = (input: string, searchParams: URLSearchParams) => {
		let result = input;
		searchParams.forEach((value, key) => {
			result = result.replace(`{${key}}`, value);
		});
		return result;
	};

	/**
	 * this inserts query params inside of {queryParamName's}: eg: a search query param '?q=test' would render '{q}' to 'test'
	 * To avoid xss attacks. We split the text from the cms into safe and unsafe parts. Unsafe beeing every part where query params would be replaced.
	 * Safe parts get rendered via the {@html part.text} directive. Allowing text from the cms to still contain html tags. While every input from user params
	 * gets rendered as unsafe. via {part.text}.
	 * Eg. "<em>Search</em> <u>Results: {q}</u>" gets split into
	 * [
	 * {
	 *  "text": "<em>Search</em> <u>Results: ",
	 *  "isSafe": true
	 * },
	 * {
	 *  "text": "<img src=x onerror=alert(1)>`",
	 *  "isSafe": false
	 * },
	 * {
	 *  "text": "</u>",
	 *  "isSafe": true
	 * }
	 * ]
	 * */
	$: parts = text.split(/({.*?})/g).map((part) => {
		if (part.startsWith('{') && part.endsWith('}')) {
			return { isSafe: false, text: replaceQueryParams(part, searchParams) };
		}

		return { isSafe: true, text: part };
	});
</script>

<Richtext>
	<svelte:element
		this={level || 'h2'}
		class="group relative"
		id={encodeURIComponent(text)}
		on:click={(e) => onCopyClick(e, text)}
		title="Copy Link"
		use:inview={{ threshold: 0 }}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			if (inView) {
				tableOfContentsActiveHeadlineId.update(() => text);
			}
		}}
	>
		<Icon
			name={clicked ? 'Copied' : 'Link'}
			class="absolute -left-8 top-[50%] -translate-y-[50%] opacity-0 transition-all hover:opacity-100 group-hover:opacity-100"
			onClick={(e) => onCopyClick(e, text)}
		/>
		<div>
			{#each parts as part}
				{#if part.isSafe}
					{@html part.text}
				{:else}
					<span class="text-secondary">{part.text}</span>
				{/if}
			{/each}
		</div>
	</svelte:element>
</Richtext>
