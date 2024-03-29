<script lang="ts">
	import type { DefaultPage, PageData, SearchResults } from '$lib/types';

	import { goto } from '$app/navigation';
	import { Dialog, Icon, Richtext } from '$lib/components';
	import debounce from 'lodash.debounce';
	import { getContext } from 'svelte';
	import { spring } from 'svelte/motion';

	const { globals, lang } = getContext<PageData>('pageData');

	let isOpen = false;
	let mouseOver = false;
	let search = '';
	let results: SearchResults | undefined = undefined;

	$: mouseOverClasses =
		mouseOver || isOpen
			? 'z-10 animate-borderGradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:400%_400%] [animation-duration:4s] scale-110 transition-[bg-gradient-to-r]'
			: '';

	$: searchUrl = `/${lang.code}/search?q=${encodeURIComponent(search)}`;

	const closeDialog = () => {
		isOpen = false;
		mouseOver = false;
	};

	const coords = spring(
		{ x: 0, y: 0 },
		{
			damping: 0.5,
			stiffness: 0.25
		}
	);

	const handleSearch = debounce(async () => {
		if (search) results = await fetch(`/api/search/${search}`).then((res) => res.json());
	}, 300);

	const getResultMatch = (result: DefaultPage) => {
		const matchData: Set<string> = new Set();

		const markSearchText = (text: string) => {
			if (text.includes(search))
				matchData.add(text.replace(new RegExp(search, 'g'), `<mark>${search}</mark>`));
		};

		markSearchText(result.title);

		result.blocks.forEach((block) => {
			if (block.type === 'heading') {
				markSearchText(block.content.text);
			}
		});

		return Array.from(matchData);
	};
</script>

<svelte:window
	on:keydown={(e) => {
		if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
			e.preventDefault();
			isOpen = !isOpen;
		}
	}}
/>

<Icon
	name="Terminal"
	title={globals.translations.doSearch}
	class={`cursor-pointer rounded-md border border-black/10 bg-bg-accent-light p-4 dark:border-light/10 dark:bg-bg-accent-dark ${mouseOverClasses}`}
	onClick={() => {
		isOpen = !isOpen;
	}}
	onMouseover={(hovered) => {
		mouseOver = hovered;
	}}
	onMousemove={(event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		coords.set({
			x: event.clientX - rect.left - rect.width / 2,
			y: event.clientY - rect.top - rect.height / 2
		});
	}}
	onMouseout={() => {
		coords.set({ x: 0, y: 0 });
	}}
	style={`translate: ${$coords.x}px ${$coords.y}px;`}
/>

<Dialog bind:open={isOpen} onClose={closeDialog}>
	<div class="flex min-w-[35vw] flex-col">
		<div class="relative p-4">
			<input
				placeholder="WIP SEARCH FOR ARTICLES"
				bind:value={search}
				on:keyup={handleSearch}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						closeDialog();
						goto(searchUrl);
					}
				}}
				class="bg-primary/0"
			/>
			{#if search}
				<div class="absolute right-6 top-[50%] flex -translate-y-[50%] gap-4">
					<p>
						{globals.translations.results || 'Results'}:
						<span class="text-secondary"
							>{results?.data?.length || 0} / {results?.pagination?.total || 0}</span
						>
					</p>
					<a href={searchUrl} on:click={closeDialog}>
						<Icon
							name="Adjustments"
							title={globals.translations.refineSearch}
							class="cursor-pointer hover:text-secondary"
						/>
					</a>
				</div>
			{/if}
		</div>
		<hr class="mb-4" />

		{#if !search}
			<Richtext class="mb-4 px-4">
				<h4>{globals.translations.navigationLabel || 'Navigation'}</h4>
			</Richtext>
			<div class="mb-4 mr-auto flex w-full items-center px-2">
				<nav class="w-full">
					<ul class="flex flex-col gap-3">
						{#each globals.navigation as navigation}
							<li>
								<a
									title={navigation.title}
									id={navigation.id}
									href={`/${lang.code}/${navigation.url}`}
									target={navigation.popup ? '_blank' : undefined}
									data-sveltekit-preload-data
									class="duration-400 flex w-full cursor-pointer gap-2 rounded-lg bg-secondary/0 p-2 transition-all hover:bg-bg-accent-light hover:text-primary dark:hover:bg-bg-accent-dark"
									on:click={closeDialog}
									on:keypress={closeDialog}
								>
									<Icon name="Branch" />
									{navigation.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		{:else}
			<ul class="mb-4 flex flex-col gap-3 px-2">
				{#each results?.data || [] as result}
					<li>
						<a
							class="duration-400 flex w-full cursor-pointer flex-col gap-2 rounded-lg bg-secondary/0 p-2 transition-all hover:bg-bg-accent-light hover:text-primary dark:hover:bg-bg-accent-dark"
							data-sveltekit-preload-data
							href={result.url}
							on:click={closeDialog}
							on:keypress={closeDialog}
						>
							<div class="flex gap-2">
								<Icon name={result.intendedTemplate === 'project' ? 'Users' : 'Article'} />
								<span>{result.title}</span>
							</div>
							{#each getResultMatch(result) as matchText}
								<div>{@html matchText}</div>
							{/each}
						</a>
					</li>
				{/each}

				{#if !results?.data?.length}
					<div class="flex gap-1">
						<Icon name="404" />
						<span class="font-pixel">- {globals.translations.noResults}</span>
					</div>
				{/if}
			</ul>
		{/if}
	</div>
</Dialog>
