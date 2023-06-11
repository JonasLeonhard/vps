<script lang="ts">
	import Headroom from '$lib/components/Headroom.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';

	import type { Language, Globals } from '$lib/types';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];

	const CENTER_ITEM_ID = 'Nav__Center';
	const centerNavItem = globals.navigation.find((navigation) => navigation.id == CENTER_ITEM_ID);
</script>

<Headroom
	offset={40}
	tolerance={80}
	class="to-transparent bg-gradient-to-b from-white after:absolute after:top-0 after:-z-10 after:contents after:h-[calc(100%-11px)] after:w-full after:backdrop-blur-[2px] dark:from-black"
>
	<div class="container mx-auto flex py-3 px-3 md:px-0">
		<!-- Items: Left -->
		<div class="mr-auto flex items-center">
			<nav>
				<ul class="flex gap-3">
					{#each globals.navigation as navigation}
						{#if navigation.id != CENTER_ITEM_ID}
							<li>
								<a
									title={navigation.title}
									id={navigation.id}
									href={`/${currentLanguage.code}/${navigation.url}`}
									target={navigation.popup ? '_blank' : '_self'}
								>
									{navigation.text}
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		</div>
		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<!-- Nav-Items -->

			<Icon name="Settings" />
			<LanguageSelect {languages} {currentLanguage} />
			<ThemeToggle />
		</div>
	</div>
	<!-- TODO: dark/light mode, black-transparent gradient below header content?-->
	<div
		class="absolute bottom-0 m-auto flex w-full items-center before:contents before:h-[2px] before:w-full before:bg-black after:contents after:h-[2px] after:w-full after:bg-black dark:before:bg-white dark:after:bg-white"
	>
		<span class="min-w-max px-5">
			<a
				title={centerNavItem?.title || '~'}
				id={centerNavItem?.id || 'Nav__Center'}
				href={`/${currentLanguage?.code}/${centerNavItem?.url || ''}`}
				target={centerNavItem?.popup ? '_blank' : '_self'}
			>
				{centerNavItem?.text || 'Jonas Leonhard.'}
			</a>
		</span>
	</div>
</Headroom>
