<script lang="ts">
	import { typewriter } from '$lib/transitions/typewriter.transition';
	import { onDestroy, onMount } from 'svelte';
	import { dateDiffInDays } from '$lib/utils/date';
	import Testimonials from './testimonial/index.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	let hi = 'Hi';
	let hiI18n = ['Hi', 'Holla', 'Bonjour', 'Salaam'];
	let intervals = [];
	let birthDate = new Date(1992, 1, 8);
	let diffInDays = dateDiffInDays(birthDate, new Date()) % 30;
	let diffInMonths = dateDiffInDays(birthDate, new Date()) % 12;
	let timer = '';
	onMount(() => {
		intervals.push(
			setInterval(() => {
				hi = hiI18n[(hiI18n.indexOf(hi) + 1) % hiI18n.length];
			}, 4000)
		);

		intervals.push(
			setInterval(() => {
				timer = new Date().toLocaleTimeString();
			}, 1000)
		);
	});

	onDestroy(() => {
		intervals.forEach(clearInterval);
	});
</script>

<main class="relative w-full container mx-auto  min-h-screen">
	<div class="flex flex-col mt-10 py-14 md:py-20 px-6 md:px-0 ">
		<span class="text-lg text-primary-600 dark:text-primary-100 ">
			{#key hi}
				<span transition:typewriter={{ delay: 0, speed: 100 }} class="blink">
					{hi}
				</span>
			{/key}
			<!-- , Welcome to my corner on the internet! I am -->
		</span>
		<span class="text-lg text-primary-600 dark:text-primary-100 ">
			Welcome to my corner on the internet! I am
		</span>
		<h1
			class="text-gray-700 dark:text-gray-200 font-bold text-4xl md:text-5xl tracking-wide relative"
		>
			<span
				class="animated-gradient  text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 via-yellow-400 text-clamp-h1"
			>
				<!-- style="font-size:clamp(2rem, 8vw, 3.5rem)" -->
				Benzara Tahar
				<span title="This is my firstname" class="cursor-pointer">Benlahcene</span>
			</span>
		</h1>
		<h2 class="text-gray-600 dark:text-gray-400 font-bold text-clamp-h2 tracking-wide relative">
			I build things you love.
		</h2>

		<p
			class="text-gray-700 w-clamp-p dark:text-gray-200 text-clamp-p max-w-3xl   tracking-wider font-light  text-left md:text-justify  leading-normal mt-8"
		>
			I am a <Tooltip title={timer}>
				<h1>30 years</h1>
			</Tooltip>
			old developer, currently working as an idependent freelancer at Upwork, but Currently, I’m focused
			on building accessible, performant and beautiful web applications.
		</p>
	</div>
	<Testimonials />
</main>

<style lang="scss">
	.animated-gradient {
		animation: hue 10s infinite linear;
		-webkit-animation: hue 10s infinite linear;
	}

	@keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}

	.blink {
		position: relative;
		&::after {
			content: '|';
			position: absolute;
			color: cyan;
			font-weight: 700;
			right: -10px;
			animation: blinker 1s linear infinite;
		}
	}
	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
