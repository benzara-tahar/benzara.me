<script lang="ts">
	import Terminal from '$lib/components/Terminal/Terminal.svelte';
	import { onDestroy, onMount } from 'svelte';
</script>

<main class="container py-8 ">
	<div class="flex lg:flex-row flex-col items-center justify-start space-x-0 lg:space-x-6">
		<!-- intro -->
		<div class="w-full lg:w-1/2  mb-8 ">
			<h1
				class="text-white font-bold tracking-tight max-w-xl"
				style="font-size: clamp(1.2rem, 8vw, 3rem);"
			>
				Hi, <span class="gradient-text">Lahcene</span> here
			</h1>
			<h1
				class="text-white font-bold tracking-tight leading-tight max-w-xl"
				style="font-size: clamp(1.2rem, 8vw, 3rem);"
			>
				I am a <span class="gradient-text">Full Stack</span> Developer
			</h1>

			<p class="text-gray-300 text-lg text-justify mt-4  max-w-xl">
				I am 30 years old <span class="keyword">passionate learner</span> having a keen interest in
				building eye-catching digital solutions that
				<span class="keyword">solves</span> real-word problems
			</p>
			<p class="text-gray-300 text-lg text-justify mt-4 max-w-xl">
				Based in <span class="keyword">Algeria</span> I am currently working with various clients
				arround the world on
				<span class="keyword">Upwork</span>
			</p>
		</div>
		<!-- terminal -->
		<div class="lg:w-1/2 w-full   flex items-center justify-center ">
			<Terminal />
		</div>
	</div>
</main>

<style lang="scss">
	.keyword {
		border-radius: 4px;
		color: white;
		padding: 4px 6px;
		background: rgb(46, 55, 63);
	}
</style>
