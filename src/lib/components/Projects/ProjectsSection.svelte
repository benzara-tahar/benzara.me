<script lang="ts">
	import { onMount } from 'svelte';
	import { featuredProjects } from './projects';

	onMount(() => {
		return () => {};
	});
</script>

<section class="flex flex-col my-12 ">
	<h1
		class="font-bold leading-tight tracking-tight text-white gradient-text"
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		Featured Projects
	</h1>

	<div class="relative flex flex-col items-start my-10 justif-start ">
		{#each featuredProjects as e}
			{e.title}
		{/each}
	</div>

	<h1
		class="font-bold leading-tight tracking-tight text-white gradient-text"
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		Other Noteworthy Projects
	</h1>
</section>

<style lang="scss">
</style>
