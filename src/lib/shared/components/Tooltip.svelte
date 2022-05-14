<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let title = '';
	let isHovered = false;
	let containerRef: HTMLElement = null;
	let tooltipRef: HTMLElement = null;

	const position = tweened(
		{ x: 0, y: 0 },
		{
			duration: 200,
			easing: cubicOut
		}
	);

	function mouseOver(event) {
		isHovered = true;
	}
	function mouseMove(event) {
		updatePosition(event);
	}
	function updatePosition(event) {
		const container = containerRef.getBoundingClientRect();
		const tooltip = tooltipRef?.getBoundingClientRect();
		const y = event.offsetY - (tooltip?.height + container?.height);
		let x = event.offsetX;
		if (x < 0) {
			x = 0;
		}
		$position = { x, y };
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span
	class="cursor-pointer relative  inline-block overflow-visible "
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	bind:this={containerRef}
>
	<slot />

	{#if isHovered}
		<div
			bind:this={tooltipRef}
			style="top: {$position.y}px; left: {$position.x}px; min-width: 200px;"
			class="shadow-lg flex items-center justify-center rounded  text-slate-700 bg-slate-200 dark:text-white dark:bg-slate-800  absolute p-2"
		>
			{title}
		</div>
	{/if}
</span>

<style>
</style>
