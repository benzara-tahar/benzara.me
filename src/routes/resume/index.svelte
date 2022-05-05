<script lang="ts">
	import About from './.components/About.svelte';
	import Education from './.components/Education.svelte';
	import Experience from './.components/Experience.svelte';
	import Interests from './.components/Interests.svelte';
	import Languages from './.components/Languages.svelte';
	import Skills from './.components/Skills.svelte';
	import Socials from './.components/Socials.svelte';
</script>

<main
	class="relative flex flex-col w-full max-w-4xl min-h-screen p-10 my-10 mx-auto overflow-hidden text-slate-800 dark:text-slate-100 dark:bg-slate-800/30  
	 border-1 rounded shadow-md border-primary-500 print:border-none   bg-repeat"
>
	<div class="z-10 flex md:flex-row flex-col mt-4">
		<div
			class="flex flex-col md:w-1/3 w-full space-y-2 border-r-[1.5px] dark:border-slate-700/40 border-slate-100/40 md:order-1 order-2"
		>
			<Socials />
			<span class="max-w-[200px]  h-[1.5px] w-full dark:bg-slate-700/40 bg-slate-100/40" />
			<Skills />
			<span class="max-w-[200px]  h-[1.5px] w-full dark:bg-slate-700/40 bg-slate-100/40" />
			<Languages />
			<span class="max-w-[200px]  h-[1.5px] w-full dark:bg-slate-700/40 bg-slate-100/40" />
			<Interests />
		</div>

		<div class="flex flex-col md:w-2/3 w-full md:pl-3 pl-0  space-y-3 order-1 md:order-2">
			<About />
			<Education />
			<Experience />
		</div>
	</div>
</main>

<style lang="scss">
	@page {
		size: auto; /* auto is the initial value */
		margin: 0; /* this affects the margin in the printer settings */
	}
</style>
