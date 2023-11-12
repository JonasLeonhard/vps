<script lang="ts">
	export let open: boolean;
	export let onClose: () => void = () => null;

	let dialog: HTMLDialogElement;

	$: if (dialog && open) dialog.showModal();
	$: if (dialog && !open) dialog.close();
</script>

<dialog
	class="rounded-md border border-bg-accent-light bg-light p-0 text-black transition-all backdrop:bg-black/30 backdrop:backdrop-blur-sm dark:border-bg-accent-dark dark:bg-dark dark:text-white"
	class:scale-50={!open}
	class:opacity-50={!open}
	class:scale-100={open}
	class:opacity-100={open}
	bind:this={dialog}
	on:close={() => {
		open = false;
		onClose();
	}}
	on:click|self={() => {
		dialog.close();
	}}
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			dialog.close();
		}
	}}
>
	<slot />
</dialog>
