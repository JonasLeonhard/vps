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

<Dialog
	bind:open={isOpen}
	onClose={() => {
		isOpen = false;
		mouseOver = false;
	}}
>
	<div class="flex flex-col gap-4">
		<input placeholder="WIP SEARCH FOR ARTICLES" />
		<hr />
		<Richtext class="px-4">
			<h2>{globals.navigationLabel || 'Navigation'}</h2>
		</Richtext>
		<div class="mb-4 mr-auto flex items-center px-4">
			<nav>
				<ul class="flex w-full flex-col gap-3">
					{#each globals.navigation as navigation}
						<li>
							<a
								title={navigation.title}
								id={navigation.id}
								href={`/${currentLanguage.code}/${navigation.url}`}
								target={navigation.popup ? '_blank' : undefined}
								data-sveltekit-preload-data
							>
								{navigation.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</Dialog>
