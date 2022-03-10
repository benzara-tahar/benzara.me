<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';
	import { dev } from '$app/env';

	export const load: ErrorLoad = ({ error, status }) => {
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
	export let error: Error;
</script>

<svelte:head>
	<Metadata title="Oups! Error" />
</svelte:head>

<div
	class="
    flex flex-col
    items-center
    justify-center
    h-screen
    bg-gradient-to-r
  
  "
>
	<div class="px-40 py-20   rounded-md">
		<div class="flex flex-col items-center">
			<h1 class="font-bold text-primary-600 text-black dark:text-white text-9xl">{status}</h1>

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

	{#if dev}
		<div class="rounded-md md:max-w-7xl max-w-2xl  mx-auto text-red-500 p-10 my-4">
			<div
				class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
				role="alert"
			>
				<span class="font-medium">Do not worry!</span> This error is shown in dev mode only
			</div>

			<p>
				{error.message}
			</p>
			{#if error.stack}
				<pre class="text-red-300 whitespace-pre-wrap"><code>{error.stack}</code></pre>
			{/if}
		</div>
	{/if}
</div>

<!-- <style lang="scss">
	@use 'src/styles/pages/error';
</style> -->
