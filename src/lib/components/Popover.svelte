<script lang="ts">
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	let hovered = false;
	let spanRef = null;
	let popoverRef: HTMLElement = null;
	onMount(() => {
		popoverRef.style.top = '-' + (spanRef.clientHeight + 10) + 'px';
		// popoverRef.style.left = spanRef.clientWidth + 10 + 'px';
		console;
	});
</script>

<span
	bind:this={spanRef}
	class="relative"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<slot>
		content
		<!-- optional fallback --></slot
	>

	{#if $$slots.popover && hovered}
		<div
			bind:this={popoverRef}
			in:fly={{ y: 10 }}
			class="absolute  flex items-center justify-center transform -translate-y-full bod border rounded-md p-2 bg-black text-white "
		>
			<slot name="popover">
				<!-- optional fallback --></slot
			>
		</div>
	{/if}
</span>
