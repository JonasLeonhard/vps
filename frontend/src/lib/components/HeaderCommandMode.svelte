<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Richtext from '$lib/components/Richtext.svelte';
	import { spring } from 'svelte/motion';

	import type { Language, Globals } from '$lib/types';

	export let globals: Globals;
	export let currentLanguage: Language;

	let isOpen = false;
	let mouseOver = false;
	let search = '';

	const closeDialog = () => {
		isOpen = false;
		mouseOver = false;
	};

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.25,
			damping: 0.5
		}
	);

	$: mouseOverClasses =
		mouseOver || isOpen
			? 'z-10 animate-borderGradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:400%_400%] [animation-duration:4s] scale-110 transition-[bg-gradient-to-r]'
			: '';
</script>

<Icon
	name="Terminal"
	class={`cursor-pointer rounded-md bg-bg-accent-light p-4 dark:bg-bg-accent-dark  ${mouseOverClasses}`}
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
			<input placeholder="WIP SEARCH FOR ARTICLES" bind:value={search} class="bg-primary/0" />
			{#if search}
				<div class="absolute right-6 top-[50%] -translate-y-[50%]">
					{globals.translations.results || 'Results'}: <span class="text-secondary">1</span>
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
									href={`/${currentLanguage.code}/${navigation.url}`}
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
				<li>
					<a
						class="duration-400 flex w-full cursor-pointer gap-2 rounded-lg bg-secondary/0 p-2 transition-all hover:bg-bg-accent-light hover:text-primary dark:hover:bg-bg-accent-dark"
						data-sveltekit-preload-data
						href="/"
						on:click={closeDialog}
						on:keypress={closeDialog}
					>
						<Icon name="Article" />
						article result wip
					</a>
				</li>
			</ul>
		{/if}
	</div>
</Dialog>
