<script>
	let items = [
		'Taking more risks',
		'Working on fast-resume.com',
		'working on my new website benzara.me',
		'fasting Ramandan, spending more time with my 2 kids',
		'learning svelte(kit)'
	];
</script>

<main class="container py-8 min-h-screen">
	<h1
		class="text-gray-700 dark:text-white font-bold tracking-tight leading-tight  "
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		Here is what I am doing <span class="gradient-text">Now</span>
	</h1>

	<ul class="list-decimal ml-6 ">
		{#each items as item}
			<li class="text-gray-500 text-lg text-justify mt-4  max-w-xl leading-relaxed ">
				{item}
			</li>
		{/each}
	</ul>
</main>
