<script lang="ts">
	import type { Globals, Language } from '$lib/types';

	import { Dialog, Icon, LanguageSelect, Richtext, ThemeToggle } from '$lib/components';
	import { spring } from 'svelte/motion';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];

	let isOpen = false;
	let mouseOver = false;

	const coords = spring(
		{ x: 0, y: 0 },
		{
			damping: 0.5,
			stiffness: 0.25
		}
	);

	$: mouseOverClasses =
		mouseOver || isOpen
			? 'z-10 animate-borderGradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:400%_400%] [animation-duration:4s] scale-110 transition-[bg-gradient-to-r] transition-[scale-110]'
			: '';
</script>

<Icon
	name="Settings"
	title={globals.translations.openSettings}
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

<Dialog
	bind:open={isOpen}
	onClose={() => {
		isOpen = false;
		mouseOver = false;
	}}
>
	<div class="my-4 flex min-w-[35vw] flex-col gap-8">
		<Richtext class="flex gap-2 px-4">
			<Icon class="!my-auto h-min cursor-default" name="Language" />
			<h2 class="!mt-0">{globals.translations.language || 'Language'}</h2>
		</Richtext>
		<LanguageSelect {languages} {currentLanguage} />
		<hr />
		<Richtext class="flex gap-2 px-4">
			<Icon class="!my-auto h-min cursor-default" name="Brightness" />
			<h2 class="!mt-0">{globals.translations.theme || 'Theme'}</h2>
		</Richtext>
		<ThemeToggle {globals} />
	</div>
</Dialog>
