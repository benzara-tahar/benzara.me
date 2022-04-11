<script lang="ts">
	import type { Skill } from '$lib/types/skill';
	import SkillChip from './SkillChip.svelte';
	import SkillsGroup from './SkillsGroup.svelte';

	let databases: Skill[] = [
		{
			name: 'MySQL',
			image: '/static/svg/csharp.svg'
		},
		{
			name: 'MongoDB',
			image: '/static/svg/angular.svg'
		},
		{
			name: 'SQLite',
			image: '/static/svg/github.svg'
		},
		{
			name: 'Redis',
			image: '/static/svg/javascript.svg'
		},
		{
			name: 'MS SQLServer',
			image: '/static/svg/typescript.svg'
		},
		{
			name: 'Postgres',
			image: '/static/svg/nestjs.svg'
		}
	];

	let languages: Skill[] = [
		{
			name: 'C#',
			image: '/static/svg/csharp.svg'
		},
		{
			name: 'Javascript',
			image: '/static/svg/javascript.svg'
		},
		{
			name: 'Typescript',
			image: '/static/svg/typescript.svg'
		}
	];
	let tools: Skill[] = [
		{
			name: 'Github',
			image: '/static/svg/github.svg'
		},

		{
			name: 'VS Code',
			image: '/static/svg/vscode.svg'
		}
	];

	let frontend: Skill[] = [
		{
			name: 'Angular',
			image: '/static/svg/angular.svg'
		},

		{
			name: 'Svelte(Kit)',
			image: '/static/svg/svelte.svg'
		},
		{
			name: 'Sass',
			image: '/static/svg/sass.svg'
		}
	];

	let backend: Skill[] = [
		{
			name: '.net core',
			image: '/static/svg/netcore.svg'
		},
		{
			name: 'NestJs',
			image: '/static/svg/nestjs.svg'
		}
	];
</script>

<section class="flex flex-col my-8 ">
	<h1
		class="font-bold leading-tight tracking-tight text-white gradient-text"
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		Skills
	</h1>
	<p class="max-w-md leading-8 tracking-wide text-gray-700 dark:text-gray-300">
		Swiss army knife tools to get the job done
	</p>

	<div class="flex flex-wrap items-center justify-start gap-4 my-4 ">
		<SkillsGroup title="languages" group={languages} />
		<SkillsGroup title="frontend" group={frontend} />
		<SkillsGroup title="backaned" group={backend} />
		<SkillsGroup title="tools" group={tools} />
	</div>
</section>
