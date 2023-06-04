<script lang="ts">
	import Blocks from '$lib/components/Blocks.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Blocks blocks={data.page.blocks} />
