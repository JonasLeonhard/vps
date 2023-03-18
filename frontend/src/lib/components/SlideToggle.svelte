<script lang="ts">
	// TODO: https://github.com/skeletonlabs/skeleton/blob/dev/src/lib/components/SlideToggle/SlideToggle.svelte
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();

	export let name: string;
	export let checked = false;
	export let disabled = false;
	export let label = '';

	const onKeyDown = (event: any) => {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			dispatch('keyup', event);
			event.target.firstChild.click();
		}
	};
</script>

<div
	id={label}
	on:keydown={onKeyDown}
	role="switch"
	aria-label={label}
	aria-checked={checked}
	tabindex="0"
>
	<label class="flex items-center">
		<input class="hidden" type="checkbox" bind:checked on:change {disabled} {name} />
		<!-- Track -->
		<div
			class="flex h-6 w-12 cursor-pointer items-center rounded-full transition-all duration-200"
			class:cursor-not-allowed={disabled}
			class:bg-primary={checked}
			class:dark:bg-bg-accent-dark={!checked}
			class:bg-bg-accent-light={!checked}
		>
			<!-- Thumb -->
			<div
				class="h-6 w-6 scale-75 rounded-full bg-light shadow transition-all duration-200"
				class:cursor-not-allowed={disabled}
				class:translate-x-full={checked}
			/>
		</div>

		<!-- Label -->
		<span class="ml-3">
			{label}
		</span>
	</label>
</div>
