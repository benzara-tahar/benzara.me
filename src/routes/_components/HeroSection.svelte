<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AnimatedCounter from '../../lib/components/AnimatedCounter.svelte';
	import SlidingText from '../../lib/components/AnimatedCounter.svelte';
	import Terminal from './Terminal.svelte';
</script>

<!-- HERO -->
<section class="relative z-10 snap-start">
	<div
		class="container flex flex-col items-center justify-start space-x-0 lg:flex-row lg:space-x-6  mx-auto"
		style="min-height: calc(100vh - 72px);"
	>
		<!-- intro -->
		<div in:fly={{ x: -50, delay: 500, duration: 500 }} class="w-full mb-8 lg:w-1/2 ">
			<h1 class="heading-1 ">
				Hi, <span class="gradient-text">Lahcene</span> here
			</h1>
			<h1 class="heading-1  flex items-center justify-start flex-wrap">
				I am a &nbsp; <span class="flex">
					[<AnimatedCounter
						values={[' Creative ', ' Frontend ', ' Backend ', ' FullStack ']}
						interval={2000}
						direction="up"
						class=" text-primary"
					/>] &nbsp;
				</span>
				Developer
			</h1>

			<p
				class="max-w-xl mt-4 text-lg leading-loose text-justify text-slate-600 dark:text-slate-300 "
			>
				I am 30 years old <span class="keyword">passionate learner</span> having a keen interest in
				building eye-catching digital solutions that
				<span class="keyword">solves</span> real-word problems
			</p>
			<p
				class="max-w-xl mt-4 text-lg leading-loose text-justify text-slate-600 dark:text-slate-300"
			>
				Currently helping
				<a class="keyword" href="https://www.rehabguru.com/" target="_blank">RehabGurru</a>
				to take their Home Exercise Prescribing Platform to the
				<span class="keyword">next level.</span>
			</p>
		</div>

		<!-- me -->

		<div class="relative flex items-center md:justify-start justify-center  w-full lg:w-1/2 ">
			<Terminal />
			<!-- <Photo /> -->
			<div class="absolute top-0 left-0 right-0 pointer-events-none">
				<div class="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
					<div class="mix-blend-multiply absolute w-[500px] h-[500px] rounded-[40rem] circle-obj" />
				</div>
				<div class="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
					<div
						class="mix-blend-multiply absolute w-[400px] h-[550px] rounded-[40rem] circle-obj2"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss" global>
	.keyword {
		@apply rounded-md dark:text-white text-slate-700 px-2 py-1 bg-slate-300 dark:bg-slate-600;
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
