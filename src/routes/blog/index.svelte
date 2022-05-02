<script>
	export let posts;
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
		{#each posts as post}
			<li class="text-gray-500 text-lg text-justify mt-4  max-w-xl leading-relaxed ">
				<a href="/blog/{post.slug}">
					{post.title}
				</a>
			</li>
		{/each}
	</ul>
</main>
