<script lang="ts">
	import { page } from '$app/stores';

	export let title = '{benzara.me} | Welcome to my garden';
	export let description = 'A place where you find me';
	export let keywords = 'web, html, css, javascript, angular, svelte, sveltekit';
	export let image = '';
	$: imageFile = '/img/me-light.jpg';
	// $: imageFile = image.startsWith('/') ? image : `/branding/banner-${image}.png`;
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="author" content="Benzara Tahar Benlahcene" />

<meta content={title} name="og:title" />
<meta content={title} name="twitter:title" />

<meta content={imageFile} name="og:image" />
<meta content="https://{$page.url.host}{imageFile}" name="twitter:image" />
