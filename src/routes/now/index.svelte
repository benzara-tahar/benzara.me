<script lang="ts">
	import { fly } from 'svelte/transition';
	let items = [
		'Taking more risks',
		'Working on fast-resume.com',
		'working on my new website benzara.me',
		'fasting Ramandan, spending more time with my 2 kids',
		'learning svelte(kit)'
	];
</script>

<main class="container py-8 min-h-screen">
	<h1 class="heading-1">
		Here is what I am doing <span class="gradient-text">Now</span>
	</h1>

	<ul class="list-decimal ml-6 ">
		{#each items as item, index}
			<li
				in:fly={{ y: 10, delay: index * 200 }}
				class="text-slate-500 text-lg text-justify mt-4  max-w-xl leading-relaxed "
			>
				{item}
			</li>
		{/each}
	</ul>
</main>
