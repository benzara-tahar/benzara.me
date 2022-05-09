<script context="module">
	// 1. Using a `load` function, pass the current URL to the layout component as a prop
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
	import SvelteSeo from 'svelte-seo';
</script>

<script lang="ts">
	import { Navbar, Footer, PageTransition } from '$layout';
	import { fade } from 'svelte/transition';
	import { theme } from '$store/app.store';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { navigationStatus } from '$store/navigation.store';
	import { onMount } from 'svelte';
	import { logCss as css } from '$lib/utils/console.log';
	import Settings from '$lib/components/Settings/Settings.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import Cursor from './_components/Cursor.svelte';

	export let url;

	beforeNavigate(() => {
		navigationStatus.set('loading');
	});

	afterNavigate(() => {
		navigationStatus.set('loaded');
	});

	onMount(() => {
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

<SvelteSeo title={'✨{ Benzara.me }✨  '} description="Benzara Tahar Benlahcene website" />
<main class="relative cursor-none">
	<!-- cursor -->
	<Cursor />

	{#if $navigationStatus === 'loading'}
		<div out:fade={{ delay: 500, duration: 300 }}>
			<PageLoader />
		</div>
	{/if}

	<Settings />
	{#if $theme === 'light'}
		<div
			class="absolute top-0  flex items-center justify-center bg-accent-500  text-white text-xs font-code p-2 tracking-tighter"
		>
			Light theme is still WIP
		</div>
	{/if}
	<Navbar />
	<PageTransition {url}>
		<slot><!-- optional fallback --></slot>
	</PageTransition>
	<Footer />
</main>

<style global>
	@import '../app.scss';
</style>
