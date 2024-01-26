<script lang="ts">
	import { Blocks } from '$lib/components';
	import { setContext } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	setContext('pageData', data);
</script>

<Blocks />
