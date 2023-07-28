<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
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

{#if isOpen}
	<div class="mr-auto flex items-center">
		<nav>
			<ul class="flex gap-3">
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
{/if}
