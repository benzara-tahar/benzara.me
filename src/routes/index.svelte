<script lang="ts">
	import Terminal from '$lib/components/Terminal/Terminal.svelte';
	import { onDestroy, onMount } from 'svelte';
</script>

<main class="w-full py-8 max-w-7xl mx-auto xl:px-0 px-5   ">
	<div class="flex md:flex-row flex-col items-center justify-start space-x-0 md:space-x-6">
		<!-- intro -->
		<div class="w-full md:w-1/2 max-w-lg mb-8">
			<h1 class="text-white font-bold tracking-tight" style="font-size: clamp(1.2rem, 8vw, 3rem);">
				Hi, <span class="gradient-text">Lahcene</span> here
			</h1>
			<h1
				class="text-white font-bold tracking-tight leading-tight"
				style="font-size: clamp(1.2rem, 8vw, 3rem);"
			>
				I am a <span class="gradient-text">Full Stack</span> Developer
			</h1>

			<p class="text-gray-300 text-lg text-justify mt-4">
				I am 30 years old <span class="keyword">passionate learner</span> having a keen interest in
				building eye-catching digital solutions that
				<span class="keyword">solves</span> real-word problems
			</p>
			<p class="text-gray-300 text-lg text-justify mt-4">
				Based in <span class="keyword">Algeria</span> I am currently working with various clients
				arround the world on
				<span class="keyword">Upwork</span>
			</p>
		</div>
		<!-- terminal -->
		<div class="md:w-1/2 w-full   flex items-center justify-center ">
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

	.animated-gradient {
		animation: hue 10s infinite linear;
		-webkit-animation: hue 10s infinite linear;
	}

	@keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}

	// .blink {
	// 	position: relative;
	// 	&::after {
	// 		content: '|';
	// 		position: absolute;
	// 		color: cyan;
	// 		font-weight: 700;
	// 		right: -10px;
	// 		animation: blinker 1s linear infinite;
	// 	}
	// }
	// @keyframes blinker {
	// 	50% {
	// 		opacity: 0;
	// 	}
	// }
</style>
