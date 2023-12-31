<script lang="ts">
	import type { Icon as IconType } from '$lib/types';

	import { Icon } from '$lib/components';
	import { createEventDispatcher } from 'svelte/internal';
	import { scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let name: string;
	export let checked = false;
	export let disabled = false;
	export let label = '';
	export let iconLeft: IconType | null = null;
	export let iconRight: IconType | null = null;

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
	class={$$props.class}
>
	<label class="flex items-center">
		<input class="hidden" type="checkbox" bind:checked on:change {disabled} {name} />
		<!-- Track -->
		<div
			class="pointer-events-auto flex h-6 w-12 cursor-pointer items-center rounded-full transition-all duration-200"
			class:cursor-not-allowed={disabled}
			class:bg-primary={checked}
			class:dark:bg-bg-accent-dark={!checked}
			class:bg-bg-accent-light={!checked}
		>
			<!-- Thumb -->
			<div
				class="pointer-events-none h-6 w-6 scale-75 rounded-full bg-light shadow transition-all duration-200"
				class:cursor-not-allowed={disabled}
				class:translate-x-full={checked}
			>
				{#if iconLeft && checked}
					<div class="absolute inset-0" transition:scale={{ delay: 150, duration: 200, start: 0 }}>
						<Icon name={iconLeft} class="text-black" />
					</div>
				{/if}

				{#if iconRight && !checked}
					<div class="absolute inset-0" transition:scale={{ delay: 150, duration: 200, start: 0 }}>
						<Icon name={iconRight} class="text-black" />
					</div>
				{/if}
			</div>
		</div>

		<!-- Label -->
		<span class="ml-3">
			{label}
		</span>
	</label>
</div>
