<script lang="ts">
	import { fly } from 'svelte/transition';
	import AnimatedCounter from '$components/AnimatedCounter.svelte';
	import Terminal from './Terminal.svelte';
	let clientHeight = 1;
	let scrollY = 0;
	$: scrollProgress = Math.min(1, scrollY / clientHeight);
</script>

<svelte:window bind:scrollY />

<!-- HERO -->
<section
	bind:clientHeight
	class="relative z-10 overflow-hidden"
	style="opacity: {1 - scrollProgress}; padding-bottom: 150px"
>
	<div class="rainbow-background" />
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
		</div>
	</div>
</section>

<style lang="postcss" global>
	.keyword {
		@apply rounded-md dark:text-white text-slate-700 px-2 py-1 bg-slate-300 dark:bg-slate-600;
	}

	.rainbow-background {
		position: absolute;
		background: 800% 800% /* pos */
			linear-gradient(
				to bottom right,
				hsl(133, 67%, 59%),
				hsl(172, 100%, 42%),
				hsl(202, 97%, 45%),
				hsl(0, 0%, 50%)
			);
		animation: rainbow-background-hue-rotate 10s infinite linear,
			scroll-gradient 15s infinite linear;
		inset-inline-end: 0;
		inset-block-end: 0;
		inline-size: 40vw;
		min-inline-size: 100vh;
		block-size: 100%;

		mask: url('/hero-mask.png') bottom / cover no-repeat;

		@media (prefers-color-scheme: light) {
			opacity: 0.5;
		}

		@media screen and (max-width: 1024px) {
			inline-size: 100%;
			transform: rotate(90deg) scale(1.5);
		}

		@media screen and (max-width: 648px) {
			block-size: 80vh;
			mask-size: 100% 100%;
		}
	}

	@keyframes scroll-gradient {
		from {
			background-position: 50% 0;
		}
		50% {
			background-position: 50% 100%;
		}
		to {
			background-position: 50% 0;
		}
	}
	@keyframes rainbow-background-hue-rotate {
		0% {
			filter: none;
		}
		50% {
			filter: hue-rotate(180deg);
		}
		to {
			filter: none;
		}
	}
</style>
