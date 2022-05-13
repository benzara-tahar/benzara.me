<script lang="ts">
	import { page } from '$app/stores';

	export let title = '{benzara.me} Peotry in <code/>';
	export let description = 'A place where I share my ideas';
	export let keywords = 'web, html, css, javascript, angular, svelte, sveltekit';
	export let image = '';
	$: imageFile = `https://${$page.url.host}/img/me-light.jpg`;
	// $: imageFile = image.startsWith('/') ? image : `/branding/banner-${image}.png`;
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="author" content="Benzara Tahar Benlahcene" />

<meta content={title} name="og:title" />
<meta content={title} name="twitter:title" />

<meta content={imageFile} name="og:image" />
<meta content={imageFile} name="twitter:image" />

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.benzara.me/" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/img/me-light.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.benzara.me/" />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content="/img/me-light.jpg" />
