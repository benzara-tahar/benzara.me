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
				I’m Benzara, a developer, creative coder, blogger and self-proclaimed designer who
				specializes in front-end development. My mission is to translate user-focussed designs into
				pixel-perfect websites or applications that run blazing fast. I’m currently working as a
				senior front end developer at LogicGate where I help develop an agile GRC cloud solution
				that combines powerful functionality with intuitive design to enhance enterprise GRC
				programs. Prior to LogicGate, I worked as a senior full-stack engineer at Cognizant where I
				helped architect and develop full-stack RESTful microservices, train and prepare developers
				for delivery, and assist in leading the front-end practice in a lab-based working
				environment.
			</p>
		</div>
		<div class="sm:w-1/2 my-10">
			<Photo />
		</div>
	</div>

	<h1 class="heading-1">
		My toolbox <span class="gradient-text"> 🚀</span>
	</h1>
</main>
