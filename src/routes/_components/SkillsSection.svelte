<script lang="ts">
	import { skills as AllSkills } from './skills';
	import { onMount } from 'svelte';
	import { shuffleArray } from '$lib/utils/arrays';
	import SkillChip from './SkillChip.svelte';

	let skills = shuffleArray(AllSkills);
	let chips: SkillChip[] = [];
	let currentTrigger = '';
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
				.forEach((chip) =>
					chip.className.indexOf('blur') === -1 ? (chip.className += ' blur') : ''
				);
			chips
				.filter((chip) => chip.skill.tags.indexOf(currentTrigger) !== -1)
				.forEach((chip) => (chip.className = chip.className.replace(' blur', '')));

			index = (index + 1) % spans.length;
		}, 3500);
		return () => clearInterval(interval);
	});
</script>

<section class="flex flex-col my-12 " style="min-height: calc(100vh - 72px); ">
	<div class="flex flex-col items-centers justif-start lg:flex-row">
		<div class="lg:w-1/2 sm:pr-10 pr-0">
			<fieldset
				class="flex flex-wrap max-w-3xl px-4 pt-2 pb-4 border border-slate-200 rounded-md dark:border-slate-800/20"
			>
				<legend class="px-3 mx-auto font-mono text-slate-300 dark:text-slate-600"
					>{triggerMap[currentTrigger] || 'Skills'}</legend
				>
				{#each skills as skill, index}
					<SkillChip bind:this={chips[index]} {skill} className={' mx-1 my-2 '} />
				{/each}
			</fieldset>
		</div>
		<div class="lg:w-1/2 ">
			<h1 class="heading-1 my-10 ">
				Hands dirty with these <span class="gradient-text">Skills</span>
			</h1>
			<p
				class="max-w-lg mt-4 text-lg leading-loose tracking-wide text-justify text-slate-700 md:max-w-2xl dark:text-slate-300"
			>
				I specialize in crafting
				<span class="text-slate-800 trigger-word dark:text-primary-500" data-trigger="scallability">
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
				and ,
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
