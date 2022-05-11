<script lang="ts">
	import { skills as AllSkills } from './_data/skills-data';
	import { onMount } from 'svelte';
	import { shuffleArray } from '$lib/utils/arrays';
	import SkillChip from './SkillChip.svelte';
	let screenY: number = 0;
	let scrollY: number = 0;
	let container: HTMLElement;
	let skills = shuffleArray(AllSkills);
	let chips: SkillChip[] = [];
	let currentTrigger = '';

	$: scrollProgress = Math.min(1, scrollY / container?.clientHeight);

	const triggerMap = {
		frontend: 'Frontend Stack',
		backend: 'Backend Stack',
		scallability: 'Scallability & Architectures',
		quality: 'Testing & Quality',
		team: 'Project Management',
		security: 'Auth & Security',
		devops: 'Devops & CI/CD'
	};
	onMount(() => {
		let spans = document.querySelectorAll('.trigger-word');
		let index = 0;
		const interval = setInterval(() => {
			currentTrigger = spans[index].getAttribute('data-trigger');
			// focus next keyword
			const previous = index === 0 ? spans.length - 1 : index - 1;
			spans[index].classList.add('focus');
			spans[previous].classList.remove('focus');

			// blur corresponding skill chips
			chips
				.filter((chip) => chip.skill.tags.indexOf(currentTrigger) === -1)
				.forEach((chip) => (chip.isBlured = true));
			chips
				.filter((chip) => chip.skill.tags.indexOf(currentTrigger) !== -1)
				.forEach((chip) => (chip.isBlured = false));

			index = (index + 1) % spans.length;
		}, 3500);

		return () => clearInterval(interval);
	});
</script>

<svelte:window bind:scrollY />

<!-- class="w-full dark:bg-zinc-900 bg-zinc-200 relative" -->

<section
	class="w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-800 dark:to-primary-900
 from-zinc-200 to-primary-500 relative "
	bind:this={container}
	style="transform: translateY({-scrollProgress * 20 + 20}vh)"
>
	<!-- svg separator -->
	<svg
		class="absolute top-0 left-0 right-0 w-full dark:fill-gray-900 fill-zinc-200 z-[-1]"
		style="transform: translateY(-99%);"
		id="wave"
		viewBox="0 0 1440 420"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0,168L30,147C60,126,120,84,180,112C240,140,300,238,360,273C420,308,480,280,540,280C600,280,660,308,720,329C780,350,840,364,900,371C960,378,1020,378,1080,322C1140,266,1200,154,1260,91C1320,28,1380,14,1440,21C1500,28,1560,56,1620,70C1680,84,1740,84,1800,126C1860,168,1920,252,1980,238C2040,224,2100,112,2160,105C2220,98,2280,196,2340,217C2400,238,2460,182,2520,168C2580,154,2640,182,2700,189C2760,196,2820,182,2880,203C2940,224,3000,280,3060,280C3120,280,3180,224,3240,224C3300,224,3360,280,3420,266C3480,252,3540,168,3600,168C3660,168,3720,252,3780,280C3840,308,3900,280,3960,231C4020,182,4080,112,4140,133C4200,154,4260,266,4290,322L4320,378L4320,420L4290,420C4260,420,4200,420,4140,420C4080,420,4020,420,3960,420C3900,420,3840,420,3780,420C3720,420,3660,420,3600,420C3540,420,3480,420,3420,420C3360,420,3300,420,3240,420C3180,420,3120,420,3060,420C3000,420,2940,420,2880,420C2820,420,2760,420,2700,420C2640,420,2580,420,2520,420C2460,420,2400,420,2340,420C2280,420,2220,420,2160,420C2100,420,2040,420,1980,420C1920,420,1860,420,1800,420C1740,420,1680,420,1620,420C1560,420,1500,420,1440,420C1380,420,1320,420,1260,420C1200,420,1140,420,1080,420C1020,420,960,420,900,420C840,420,780,420,720,420C660,420,600,420,540,420C480,420,420,420,360,420C300,420,240,420,180,420C120,420,60,420,30,420L0,420Z"
		/></svg
	>
	<section class="container flex flex-col  min-h-screen  items-center justify-center">
		<div class="flex flex-col items-centers  lg:flex-row  lg:gap-10">
			<div class="mx-auto lg:order-1 ">
				<fieldset
					class="flex flex-wrap max-w-3xl p-4  gap-2 border border-slate-200 rounded-md dark:border-slate-900"
				>
					<legend class="px-3 mx-auto font-mono text-slate-300 dark:text-slate-600"
						>{triggerMap[currentTrigger] || 'Skills'}</legend
					>
					{#each skills as skill, index}
						<SkillChip bind:this={chips[index]} {skill} />
					{/each}
				</fieldset>
			</div>
			<div class="mx-autos">
				<h1 class="heading-1 my-10 ">
					Hands dirty with these <span class="gradient-text">Skills </span>
				</h1>
				<p
					class="max-w-lg mt-4 text-lg leading-loose tracking-wide text-justify text-slate-700 md:max-w-2xl dark:text-slate-300"
				>
					I specialize in crafting
					<span
						class="text-slate-800 trigger-word dark:text-primary-500"
						data-trigger="scallability"
					>
						scallable</span
					>,
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="quality">
						hight quality
					</span>
					,
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="security">
						secure
					</span>
					and performant web applications. starting from
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="frontend">
						frontend
					</span>
					and
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="backend">
						backend
					</span>
					development to
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="devops">
						deployment
					</span>. Able to effectively self-manage during independent projects, as well as
					<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="team">
						collaborate
					</span>
					in a team setting.
				</p>
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	.trigger-word {
		border-bottom: 1px dashed #9c9c9c;
		font-weight: 500;
		cursor: pointer;
		position: relative;
		display: inline-block;
		transition: all 0.5s ease-in-out;
		&:hover,
		&:global(.focus) {
			transform: translateY(-2px);
			color: #8ec200;
			&::after {
				width: 100%;
			}
		}
		&::after {
			transition: all 0.5s cubic-bezier(0.17, 0.59, 0.27, 0.92);
			background-color: #8ec200;
			position: absolute;
			height: 2px;
			width: 0;
			content: '';
			left: 0;
			bottom: 0;
		}
	}
</style>
