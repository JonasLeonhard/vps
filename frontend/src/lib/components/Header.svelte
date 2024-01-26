<script lang="ts">
	import type { PageData } from '$lib/types';

	import {
		HeaderCommandMode,
		HeaderSettings,
		Headroom,
		Icon,
		TableOfContents
	} from '$lib/components';
	import { getContext } from 'svelte';

	const { lang } = getContext<PageData>('pageData');
</script>

<Headroom offset={40} tolerance={180}>
	<div class="container mx-auto flex py-3">
		<!-- Items: Left -->
		<div class="flex gap-3">
			<a href={`/${lang.code}`} aria-label="Home" class="flex">
				<Icon name="Logo" />
			</a>
			<TableOfContents />
		</div>

		<!-- Items: Right -->
		<div class="ml-auto flex items-center gap-3">
			<!-- Nav-Items -->
			<HeaderCommandMode />
			<HeaderSettings />
		</div>
	</div>
</Headroom>
