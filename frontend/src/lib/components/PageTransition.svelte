<script>
	import { fly } from 'svelte/transition';

	export let path = '';
</script>

{#key path}
	<div in:fly={{ y: -30, duration: 200, delay: 150 }} out:fly={{ y: -30, duration: 150 }}>
		<slot />
	</div>
{/key}
