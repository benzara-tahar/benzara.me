<script lang="ts">
	import { typewriter } from '$lib/transitions/typewriter.transition';
	import { onDestroy, onMount } from 'svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { dateDiffInDays } from '$lib/utils/date';
	let hi = 'Hi';
	let hiI18n = ['Hi', 'Holla', 'Bonjour', 'Salaam'];
	let intervals = [];
	let birthDate = new Date(1992, 1, 8);
	let diffInDays = dateDiffInDays(birthDate, new Date()) % 30;
	let diffInMonths = dateDiffInDays(birthDate, new Date()) % 12;

	onMount(() => {
		intervals.push(
			setInterval(() => {
				hi = hiI18n[(hiI18n.indexOf(hi) + 1) % hiI18n.length];
			}, 4000)
		);
	});

	onDestroy(() => {
		intervals.forEach(clearInterval);
	});
</script>

<main class="relative w-full container mx-auto  min-h-screen">
	<div class="flex flex-col mt-10 py-14 md:py-20 ">
		<span class="text-lg text-primary-600 dark:text-primary-100 ">
			{#key hi}
				<span transition:typewriter={{ delay: 0, speed: 100 }}>
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
				class="animated-gradient text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 via-yellow-400 "
			>
				Benzara Tahar Benlahcene
			</span>
		</h1>
		<h1
			class="text-gray-600 dark:text-gray-400 font-bold text-4xl md:text-5xl tracking-wide relative"
		>
			I build things you love.
		</h1>

		<p
			class="text-gray-700 dark:text-gray-200 text-2xl  max-w-3xl tracking-wider font-light text-justify leading-snug mt-8"
		>
			I am a

			<Popover>
				30 years
				<div slot="popover">
					<span class="text-base cursor-pointer">
						and {diffInMonths} months: {diffInDays} days
					</span>
				</div>
			</Popover>
			old [frontend|backend] developer, currently working as an idependent freelancer at Upwork, but
			Currently, I’m focused on building accessible, performant and beautiful web applications.
		</p>
	</div>
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
</style>
