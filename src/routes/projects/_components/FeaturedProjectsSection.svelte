<script lang="ts">
	import { onMount } from 'svelte';
	import Project from './FeaturedProjectCard.svelte';
	import { featuredProjects } from '../_data/featured-projects-data';
</script>

<section class="flex flex-col ">
	<h1 class="heading-1">
		<span class="gradient-text"> Featured </span> Projects
	</h1>

	<div class="relative flex flex-col items-start  justif-start ">
		{#each featuredProjects as project}
			<Project {project} />
		{/each}
	</div>
</section>
