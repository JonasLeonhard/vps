<script lang="ts">
	import { Icon } from '$lib/components';
	import { onMount } from 'svelte';

	type Grid = Cell[];
	type Cell = 'Empty' | 'Pacman' | 'PointFilled';
	type NewPosition = { direction: 'bot' | 'left' | 'right' | 'top'; pos: number };

	let grid = getGrid();
	let pacPosition = -1; // -1 == not shown
	let pacRotation = 0; // -- looks right

	onMount(() => {
		animateEnter();

		const interval = setInterval(() => {
			const newPosition = getAdjacentPosition(pacPosition);
			if (!newPosition) {
				// reset the grid
				grid = getGrid();
				pacPosition = -1;
				pacRotation = 0;
			} else {
				setPacPosition(newPosition);
			}
		}, 130);

		return () => {
			clearInterval(interval);
		};
	});

	function getGrid(): Grid {
		return Array(9).fill('PointFilled');
	}

	function getOuterPosition() {
		const outerPositions = [0, 1, 2, 3, 5, 6, 7, 8];
		return outerPositions[Math.floor(Math.random() * outerPositions.length)];
	}

	function setPacPosition(position: NewPosition) {
		grid[pacPosition] = 'Empty';
		pacPosition = position.pos;

		if (position.direction === 'left') {
			pacRotation = 180;
		} else if (position.direction === 'right') {
			pacRotation = 0;
		} else if (position.direction === 'top') {
			pacRotation = -90;
		} else if (position.direction === 'bot') {
			pacRotation = 90;
		}

		grid[pacPosition] = 'Pacman';
	}

	function animateEnter() {
		pacPosition = getOuterPosition();
		grid[pacPosition] = 'Pacman';
	}

	function getAdjacentPosition(position: number): NewPosition | undefined {
		const adjacentPositions: NewPosition[] = [];
		const row = Math.floor(position / 3);
		const col = position % 3;
		if (row > 0) {
			adjacentPositions.push({ direction: 'top', pos: position - 3 });
		}
		// below
		if (row < 2) {
			adjacentPositions.push({ direction: 'bot', pos: position + 3 });
		}
		if (col > 0) {
			adjacentPositions.push({ direction: 'left', pos: position - 1 });
		}
		if (col < 2) {
			adjacentPositions.push({ direction: 'right', pos: position + 1 });
		}
		const availablePositions = adjacentPositions.filter(
			(adjPos) => grid[adjPos.pos] === 'PointFilled'
		);
		if (availablePositions.length === 0) {
			return undefined;
		}
		return availablePositions[Math.floor(Math.random() * availablePositions.length)];
	}
</script>

<div class="grid h-16 w-16 grid-cols-3">
	{#each grid as cell}
		{#if cell === 'Pacman'}
			<Icon
				class="relative after:absolute after:inset-0 after:-z-10 after:block after:h-full after:w-full after:animate-ping after:rounded-full after:bg-white after:opacity-15"
				style="transform: rotate({pacRotation}deg)"
				name="Pacman"
			/>
		{:else if cell === 'PointFilled'}
			<div class="h-[24px] w-[24px] scale-50">
				<Icon
					class="animate-spin delay-[{Math.random() * 300}] origin-center-center h-min w-min"
					name="Loading"
				/>
			</div>
		{:else}
			<Icon class="animate-pulse delay-[{Math.random() * 300}]" name="PointFilled" />
		{/if}
	{/each}
</div>
