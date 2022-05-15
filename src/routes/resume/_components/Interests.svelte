<script>
	const interests = ['Chess', 'Learning', 'Reading', 'Traveling', 'Anime'];
</script>

<section class="flex flex-col">
	<h1 class="mb-2  font-semibold text-primary-500">INTERESTS</h1>

	<div class="flex flex-wrap gap-2">
		{#each interests as intereset, index}
			<span class=" dark:text-slate-400 text-slate-600 ">
				#{intereset}
			</span>
		{/each}
	</div>
</section>
