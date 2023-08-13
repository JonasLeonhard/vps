<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Richtext from '$lib/components/Richtext.svelte';
	import type { Language, Globals } from '$lib/types';

	export let globals: Globals;
	export let currentLanguage: Language;

	let isOpen = false;
</script>

<Icon
	name="Terminal"
	class="cursor-pointer rounded-md bg-bg-accent-light p-4 dark:bg-bg-accent-dark"
	onClick={() => {
		console.log('Settings clicked');
		isOpen = !isOpen;
	}}
/>

<Dialog bind:open={isOpen}>
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
