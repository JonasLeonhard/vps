<script lang="ts">
	import Headroom from '$lib/components/Headroom.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	import type { Language, Header } from '$lib/types';

	export let currentLanguage: Language;
	export let header: Header;
	export let languages: Language[];
</script>

<Headroom offset={40} tolerance={80} class="to-transparent bg-gradient-to-b from-black">
	<div class="container m-auto flex">
		<!-- Items: Left -->
		<div class="mr-auto flex items-center">
			<nav>
				<ul class="flex gap-3">
					{#each header.navigation as navigation}
						<li>
							<a href={navigation.url}>
								{navigation.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<!-- Nav-Items -->

			<LanguageSelect {languages} {currentLanguage} />
			<ThemeToggle />
		</div>
	</div>
	<!-- TODO: dark/light mode, black-transparent gradient below header content?-->
	<div
		class="m-auto flex w-full -translate-y-4 items-center before:contents before:h-[2px] before:w-full before:bg-black after:contents after:h-[2px] after:w-full after:bg-black dark:before:bg-white dark:after:bg-white"
	>
		<span class="min-w-max px-5">Jonas Leonhard.</span>
	</div>
</Headroom>
