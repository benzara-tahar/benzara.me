<!-- <script context="module">
	export async function load({ fetch, url }) {
		const jsonUrl = url.pathname;
		// const jsonUrl = '/fixing-favicons';
		const res = await fetch(jsonUrl);
		console.log(jsonUrl, res, url);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${jsonUrl}`)
		};
	}
</script> -->
<script>
	export let post;
</script>

<main class="container py-8 min-h-screen">
	<h1
		class="text-gray-700 dark:text-white font-bold tracking-tight leading-tight  "
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		<span class="gradient-text">Share</span>
		your
		<span class="gradient-text">knowledge</span>
		. It is a way to achieve
		<span class="gradient-text">immortality</span>
	</h1>

	<ul class="">
		<li class="text-gray-500 text-lg text-justify mt-4  max-w-xl leading-relaxed ">
			<h1>
				{post.title}
			</h1>
			<p>{post.excerpt}</p>

			<div class="flex flex-row">
				{#each post.tags as tag}
					<span class="border border-red-400 rounded-2xl p-3">
						{tag}
					</span>
				{/each}
			</div>

			{@html post.html}
		</li>
	</ul>
	<h2>AAA</h2>
</main>

<style>
	h2 {
		color: yellow;
		font-size: 22px;
	}
</style>
