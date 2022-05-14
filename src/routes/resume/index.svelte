<script lang="ts">
	import { fly } from 'svelte/transition';

	import About from './_components/About.svelte';
	import Education from './_components/Education.svelte';
	import Experience from './_components/Experience.svelte';
	import Interests from './_components/Interests.svelte';
	import Languages from './_components/Languages.svelte';
	import Skills from './_components/Skills.svelte';
	import Socials from './_components/Socials.svelte';
</script>

<main
	in:fly={{ duration: 500, x: 10 }}
	out:fly={{ duration: 500, y: 30 }}
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

<style lang="postcss">
	@page {
		size: auto; /* auto is the initial value */
		margin: 0; /* this affects the margin in the printer settings */
	}
</style>
