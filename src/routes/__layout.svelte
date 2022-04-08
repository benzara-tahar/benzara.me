<!-- 1. Using a `load` function, pass the current URL to the layout component as a prop -->
<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { Navbar, Footer, PageTransition } from '$layout';
	import { onMount } from 'svelte';
	import { logCss as css, randomColor } from '$lib/utils/console.log';

	export let url;

	onMount(() => {
		console.log(
			'%cHi there intruder 🕵️' +
				'%cif you spot some 🐞 🐝 🐞 🐜, report that in github issues so that we can make this place cleaner ✨✨\nOtherwise, if you enjoy what you see, ⭐ me on 🐙\nhttps://github.com/benzara-tahar/benzara.me',
			css(12, 'cyan'),
			css(
				12,
				'white',
				`background:${randomColor()} ; background: linear-gradient(90deg, ${randomColor()} 0%, ${randomColor()} 49%, ${randomColor()} 100%);`
			)
		);
	});
</script>

<Navbar />

<PageTransition {url}>
	<slot />
</PageTransition>

<Footer />

<style global lang="scss">
	@use 'src/styles/app';
</style>
