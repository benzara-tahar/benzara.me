<script lang="ts">
	import { Navbar, Footer } from '$layout';
	import { logCss as css, randomColor } from '$lib/utils/console.log';
	import { onMount } from 'svelte';

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
<div class="relative w-full h-full m-0 flex">
	<slot />
</div>
<Footer />

<style global lang="scss">
	@use 'src/styles/app';
</style>
