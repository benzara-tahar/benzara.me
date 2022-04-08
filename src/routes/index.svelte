<script lang="ts">
	import Terminal from '$lib/components/Terminal/Terminal.svelte';
	import { onDestroy, onMount } from 'svelte';
</script>

<main class="container py-8 ">
	<div class="flex lg:flex-row flex-col items-center justify-start space-x-0 lg:space-x-6">
		<!-- intro -->
		<div class="w-full lg:w-1/2  mb-8 ">
			<h1
				class="text-white font-bold tracking-tight leading-tight  max-w-xl"
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

			<p class="text-gray-300 text-lg text-justify mt-4  max-w-xl leading-relaxed ">
				I am 30 years old <span class="keyword">passionate learner</span> having a keen interest in
				building eye-catching digital solutions that
				<span class="keyword">solves</span> real-word problems
			</p>
			<p class="text-gray-300 text-lg text-justify mt-4 max-w-xl leading-relaxed">
				Based in <span class="keyword">Algeria</span> I am currently working with various clients
				arround the world on
				<span class="keyword">Upwork</span>
			</p>
		</div>
		<!-- terminal -->
		<div class="lg:w-1/2 w-full   flex items-center justify-center  relative">
			<Terminal />
			<div class="absolute top-0 left-0 right-0  ">
				<div class="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
					<div class="mix-blend-multiply absolute w-[450px] h-[400px] rounded-[40rem] circle-obj" />
				</div>
				<div class="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
					<div
						class="mix-blend-multiply absolute w-[300px] h-[350px] rounded-[40rem] circle-obj2"
					/>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	.keyword {
		border-radius: 4px;
		color: white;
		padding: 2.5px 6px;
		background: rgb(46, 55, 63);
	}

	.circle-obj2 {
		background: radial-gradient(closest-side, #00fffb, rgba(233, 168, 2, 0));
		animation: traverse-up-right 20s ease-in-out infinite alternate;
		z-index: -1;
	}
	.circle-obj {
		background: radial-gradient(closest-side, #aceb00, rgba(233, 168, 2, 0));
		animation: traverse-up-left 22s ease-in-out infinite alternate;
		z-index: -1;
	}

	@keyframes traverse-up-left {
		33% {
			transform: translateY(10%) translateX(-40%) rotate(180deg);
		}

		66% {
			transform: translateY(-40%) translateX(-30%) rotate(-60deg);
		}

		100% {
			transform: translateY(0) translateX(0) rotate(0);
		}
	}

	@keyframes traverse-up-right {
		33% {
			transform: translateY(-20%) translateX(80%) rotate(180deg);
		}

		66% {
			transform: translateY(10%) translateX(30%) rotate(360deg);
		}

		100% {
			transform: translateY(0) translateX(0) rotate(0);
		}
	}
</style>
