<script lang="ts">
	import Headroom from '$lib/components/Headroom.svelte';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';

	import type { Language, Globals } from '$lib/types';

	export let currentLanguage: Language;
	export let globals: Globals;
	export let languages: Language[];
</script>

<Headroom offset={40} tolerance={80} class="">
	<div class="container mx-auto flex px-3 py-3 md:px-0">
		<!-- Items: Left -->
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
		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<!-- Nav-Items -->

			<Icon name="Settings" />
			<LanguageSelect {languages} {currentLanguage} />
			<ThemeToggle />
		</div>
	</div>
</Headroom>
