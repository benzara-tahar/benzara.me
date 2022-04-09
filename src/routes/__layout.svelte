<!-- 1. Using a `load` function, pass the current URL to the layout component as a prop -->
<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { Navbar, Footer, PageTransition } from '$layout';
	import { fade } from 'svelte/transition';

	import { beforeNavigate, prefetchRoutes, afterNavigate } from '$app/navigation';
	import { navigationStatus } from '$store/navigation.store';
	import { onMount } from 'svelte';
	import { logCss as css, randomColor } from '$lib/utils/console.log';
	import Settings from '$lib/components/Settings.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';

	export let url;

	beforeNavigate(({ from, to }) => {
		navigationStatus.set('loading');
	});

	afterNavigate(({ from, to }) => {
		navigationStatus.set('loaded');
	});

	onMount(() => {
		// prefetchRoutes(['/about', '/blog', '/now', '/resume']);
		console.log(
			'%cHi there intruder 🕵️' +
				'%cif you spot some 🐞 🐝 🐞 🐜, report that in github issues so that we can make this place cleaner ✨✨\nOtherwise, if you enjoy what you see, ⭐ me on 🐙\nhttps://github.com/benzara-tahar/benzara.me',
			css(12, 'cyan'),
			css(
				12,
				'black',
				`background:#009E9C ; background: linear-gradient(90deg, #8EC200 0%, #29FFFC 49%, #CBFF3D 100%);`
				// `background:${randomColor()} ; background: linear-gradient(90deg, ${randomColor()} 0%, ${randomColor()} 49%, ${randomColor()} 100%);`
			)
		);
	});
</script>

{#if $navigationStatus === 'loading'}
	<div out:fade={{ delay: 500, duration: 300 }}>
		<PageLoader />
	</div>
{/if}

<!-- <Settings /> -->
<Navbar />

<PageTransition {url}>
	<slot />
</PageTransition>

<Footer />

<style global lang="scss">
	@use 'src/styles/app';
</style>
