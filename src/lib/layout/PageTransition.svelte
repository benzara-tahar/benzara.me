<!-- PageTransition.svelte -->
<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div
		class="relative w-full h-full m-0 flex"
		in:fly={{ x: -40, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ x: 20, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
