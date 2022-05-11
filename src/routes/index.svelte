<script lang="ts">
	import HeroSection from './_components/HeroSection.svelte';
	import SkillsSection from './_components/SkillsSection.svelte';
	import TimeLine from './_components/TimeLine.svelte';
</script>

<svelte:head>
	<title>{'{benzara.me} | Welcome to my garden'}</title>

	<meta name="description" content="A place where you find me" />
	<meta name="keywords" content="web, html, css, javascript, angular, svelte, sveltekit" />
	<meta name="author" content="Benzara Tahar Benlahcene" />
</svelte:head>

<main class="mx-auto w-full">
	<!-- hero -->
	<HeroSection />
	<!-- skills -->
	<SkillsSection />
	<!-- timeline -->
	<TimeLine />
</main>
