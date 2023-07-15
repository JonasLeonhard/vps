<script>
	let contactVisible = false;
	const onShowContact = () => {
		contactVisible = true;
	};
</script>

<div class="h-32 w-1/2 bg-white text-gray">
	<canvas on:mouseenter={onShowContact} />
	{#if contactVisible}
		<button class="ml-auto"> contact </button>
	{/if}
</div>
