<!-- <script context="module">
	export async function load({ fetch, url }) {
		const jsonUrl = url.pathname;
		const res = await fetch(jsonUrl);
		console.log(jsonUrl, res);
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
  // export let post;
</script>

<main>
  <h1>Post layout</h1>
  <slot />

  <!-- {JSON.stringify(post)} -->
</main>
<!-- 
<div class="blog-layout">
	<main>
		<article id="blog-post">
			<div class="header">
				<h1>{post.title}</h1>
				<div class="note">Published on post.date}</div>
				<div class="note">{post.readingTime}</div>
				<div class="tags">
					{#each post.tags as tag}
						{tag}
					{/each}
				</div>
			</div>

			<div class="content">
				<slot />
			</div>
		</article> -->

<!-- {#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="bg-red-400">
				{#each post.relatedPosts as rel}
					{post.title}
				{/each}
			</div>
		{/if} -->
<!-- </main>
</div> -->
