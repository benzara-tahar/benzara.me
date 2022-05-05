<script lang="ts">
	import About from './.components/About.svelte';
	import Bubbles from './.components/Bubbles.svelte';
	import Education from './.components/Education.svelte';
	import Experience from './.components/Experience.svelte';
	import Skills from './.components/Skills.svelte';
	import Socials from './.components/Socials.svelte';
</script>

<main
	class="relative flex flex-col w-full max-w-4xl min-h-screen p-10 my-10 mx-auto overflow-hidden text-slate-800 dark:text-slate-100 dark:bg-slate-800 bg-white border-1 rounded shadow-md border-primary-300 print:border-none"
>
	<div class="z-10 ">
		<About />
	</div>

	<div class="z-10 flex mt-4">
		<div
			class="flex flex-col w-1/3 space-y-2 border-r-[1.5px] dark:border-slate-700/40 border-slate-100/40"
		>
			<Socials />
			<span class="max-w-[200px]  h-[1.5px] w-full dark:bg-slate-700/40 bg-slate-100/40" />
			<Skills />
		</div>

		<div class="flex flex-col w-2/3 pl-3 space-y-3">
			<Education />
			<Experience />
		</div>
	</div>

	<!-- <Bubbles /> -->
</main>

<style lang="scss">
	@page {
		size: auto; /* auto is the initial value */
		margin: 0; /* this affects the margin in the printer settings */
	}
	.hyphens-manual {
		-webkit-hyphens: manual;
		-ms-hyphens: manual;
		hyphens: manual;
	}
</style>
