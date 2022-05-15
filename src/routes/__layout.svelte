<script context="module">
	// 1. Using a `load` function, pass the current URL to the layout component as a prop
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { Navbar, Footer, PageTransition } from '$layouts';
	import { fade } from 'svelte/transition';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { navigationStatus } from '$store/navigation.store';
	import { onMount } from 'svelte';
	import { logCss as css } from '$utils/console.log';
	import Settings from '$components/Settings/Settings.svelte';
	import PageLoader from '$components/PageLoader.svelte';
	// import Cursor from './_components/Cursor.svelte';
	import Metadata from '$components/Metadata.svelte';

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
			)
		);
	});
</script>

<svelte:head>
	<Metadata />
</svelte:head>
<main
	class="relative"
	style="background-image:radial-gradient(#33333390 .8px, rgba(0,0,0,0) 1px);background-size:19px 19px;background-repeat:repeat;mask-image:linear-gradient(rgba(0, 0, 0, 1.0), transparent)"
>
	<!-- cursor -->
	<!-- <Cursor /> -->

	{#if $navigationStatus === 'loading'}
		<div out:fade={{ delay: 500, duration: 300 }}>
			<PageLoader />
		</div>
	{/if}

	<Settings />

	<Navbar />
	<PageTransition {url}>
		<slot><!-- optional fallback --></slot>
	</PageTransition>
	<Footer />
</main>

<style global>
	@import '../app.css';
</style>
