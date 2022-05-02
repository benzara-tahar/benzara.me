<script context="module" lang="ts">
	import { dev } from '$app/env';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = ({ error, status }) => {
		return {
			props: {
				status: status,
				error: error
			}
		};
	};
</script>

<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte';

	export let status: number;
	// export let error: Error;
</script>

<svelte:head>
	<Metadata title="Oups! Error" />
</svelte:head>

<div class="container">
	<div
		class="min-h-screen
    flex flex-col
    items-center
    justify-center
  "
	>
		<h1 class="font-bold text-primary-600  dark:text-white text-9xl">{status}</h1>

		<h6 class="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-200 md:text-3xl">
			<span class="text-orange-500">Oops!</span> Page not found
		</h6>

		<p class="mb-8 text-center text-gray-800 dark:text-gray-300 md:text-lg">
			The page you’re looking for doesn’t exist.
		</p>

		<a
			href="/"
			class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800"
		>
			<span
				class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
			>
				Go Home
			</span>
		</a>
	</div>
</div>

<!-- <style lang="scss">
	@use 'src/styles/pages/error';
</style> -->
