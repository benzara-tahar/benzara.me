<script lang="ts">
	import { fly } from 'svelte/transition';
	let items = [
		'Taking more risks',
		'Working on fast-resume.com',
		'working on my new website benzara.me',
		'learning svelte(kit) 💙',
		'Learning supabase ',
		'reading more about UI/UX'
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
	<p
		class="relative text-slate-500 text-lg mt-10 pl-8"
		in:fly={{ y: 10, delay: items.length * 200 + 1000 }}
	>
		<span class="flex h-4 w-4 absolute top-2 left-2 items-center justify-center">
			<span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 "
			/>
			<span class="relative inline-flex rounded-full h-3 w-3 bg-primary-500" />
		</span>
		I am available for freelance work.
		<a href="mailto:benzara.tahar@gmail.com" class="text-primary-500"> Let's cross path</a>
		and build great 💡 things for the web together
	</p>
</main>
