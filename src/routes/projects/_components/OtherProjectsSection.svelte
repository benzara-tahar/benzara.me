<script lang="ts">
	import OtherProjectCard from './OtherProjectCard.svelte';
	import projects from '../_data/other-projects-data';
</script>

<section class="flex flex-col ">
	<h1 class="heading-1">Other <span class="gradient-text"> Noteworthy </span> Projects</h1>

	<div
		class="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-10 items-stretch justify-start mt-8"
	>
		{#each projects as project}
			<OtherProjectCard {project} />
		{/each}
	</div>
</section>
