<script lang="ts">
	import { onMount } from 'svelte';
	import Project from './Project.svelte';
	import { featuredProjects } from './projects';

	onMount(() => {
		return () => {};
	});
</script>

<section class="flex flex-col my-12 ">
	<h1 class="heading-1">
		<span class="gradient-text"> Featured </span> Projects
	</h1>

	<div class="relative flex flex-col items-start  justif-start ">
		{#each featuredProjects as project}
			<Project {project} />
		{/each}
	</div>

	<h1 class="heading-1">Other <span class="gradient-text"> Noteworthy </span> Projects</h1>
</section>

<style lang="scss">
</style>
