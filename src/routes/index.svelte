<script lang="ts">
	import ExperiencesSection from '$lib/components/Experiences/ExperiencesSection.svelte';
	import HeroSection from '$lib/components/Hero/HeroSection.svelte';
	import FeaturedProjectsSection from '$lib/components/Projects/FeaturedProjectsSection.svelte';
	import SkillsSection from '$lib/components/Skills/SkillsSection.svelte';
</script>

<main class="container">
	<!-- hero -->
	<HeroSection />
	<!-- skills -->
	<SkillsSection />
	<!-- experiences -->
	<ExperiencesSection />
	<!-- Projects -->
	<FeaturedProjectsSection />
</main>
