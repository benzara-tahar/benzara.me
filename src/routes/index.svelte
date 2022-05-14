<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte';
	import ExperiencesSection from './_components/ExperiencesSection.svelte';
	import HeroSection from './_components/HeroSection.svelte';
	import SkillsSection from './_components/SkillsSection.svelte';
	import TimeLine from './_components/TimeLineSection.svelte';
</script>

<svelte:head>
	<Metadata />
</svelte:head>

<!-- todo: enable scroll snapping and fix scroll parallax issues
snap-y snap-mandatory overflow-y-scroll h-screen -->
<main class="mx-auto w-full ">
	<!-- hero -->
	<HeroSection />
	<!-- skills -->
	<SkillsSection />
	<!-- timeline -->
	<!-- <TimeLine /> -->
	<ExperiencesSection />
</main>
