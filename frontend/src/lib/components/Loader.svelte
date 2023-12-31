<script lang="ts">
	import { Icon } from '$lib/components';

	let getPacPosition = () => Math.floor(Math.random() * 9);

	let pacPosition = getPacPosition();
</script>

<div class="grid h-16 w-16 grid-cols-3">
	{#each Array(9) as _, i}
		{#if pacPosition === i}
			<Icon
				class="relative after:absolute after:inset-0 after:-z-10 after:block after:h-full after:w-full after:animate-ping after:rounded-full after:bg-white after:opacity-15"
				name="Pacman"
			/>
		{:else}
			<Icon class="animate-pulse delay-[{Math.random() * 300}]" name="PointFilled" />
		{/if}
	{/each}
</div>
