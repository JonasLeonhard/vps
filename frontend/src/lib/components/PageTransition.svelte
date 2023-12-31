<script>
	import { fly } from 'svelte/transition';

	export let path = '';
</script>

{#key path}
	<div in:fly={{ delay: 150, duration: 200, y: -30 }} out:fly={{ duration: 150, y: -30 }}>
		<slot />
	</div>
{/key}
