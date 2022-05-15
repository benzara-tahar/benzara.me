<script>
	import { onMount } from 'svelte';
	import Photo from '../_components/Photo.svelte';
	const defaultProgressText = 'in progress';
	let progressText = defaultProgressText;

	onMount(() => {
		let interval = setInterval(() => {
			progressText += '.';
			if (progressText.length > defaultProgressText.length + 3) {
				progressText = defaultProgressText;
			}
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<main class="container py-8 min-h-screen">
	<h1 class="heading-1">
		I am <span class="gradient-text"> {progressText}</span>
	</h1>

	<div class="flex flex-wrap items-center justify-start">
		<div class="sm:w-1/2 sm:pr-6 pr-0 ">
			<p class="dark:text-slate-400 text-slate-700 text-lg  mt-4   leading-relaxed ">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ex, accusamus enim id
				quasi culpa. Consequatur, tempore soluta perferendis quaerat quibusdam facilis eveniet, in,
				voluptatem cupiditate maiores explicabo suscipit quis.
			</p>
			<p class="text-primary-500">comming soon...</p>
		</div>
		<div class="sm:w-1/2 my-10">
			<Photo />
		</div>
	</div>
</main>
