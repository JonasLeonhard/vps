<script>
	let contactVisible = false;
	const onShowContact = () => {
		contactVisible = true;
	};
</script>

<div class="h-32 w-1/2 bg-white text-gray">
	<h1 class="font-pixel">text</h1>
	<canvas on:mouseenter={onShowContact} />
	{#if contactVisible}
		<button class="ml-auto"> contact </button>
	{/if}
</div>
