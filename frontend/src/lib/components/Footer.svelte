<script lang="ts">
	import type { Globals } from '$lib/types';

	export let globals: Globals;
</script>

<footer class="container mx-auto my-8">
	{#each globals.footerNavigation as footerNavigation}
		{footerNavigation.text}
	{/each}

	<br />
	{#each globals.metaNavigation as metaNavigation}
		{metaNavigation.text}
	{/each}

	<br />
	{#each globals.socialMedia as socialMedia}
		{socialMedia.service}
	{/each}
</footer>