<script lang="ts">
	import type { Skill } from '$lib/types/skill';
	import SkillsGroup from './SkillsGroup.svelte';
	import csharpSvg from '$static/svg/csharp.svg';
	import angularSvg from '$static/svg/angular.svg';
	import githubSvg from '$static/svg/github.svg';
	import vscodeSvg from '$static/svg/vscode.svg';
	import nestjsSvg from '$static/svg/nestjs.svg';
	import netcoreSvg from '$static/svg/netcore.svg';
	import svelteSvg from '$static/svg/svelte.svg';
	import sassSvg from '$static/svg/sass.svg';
	import javascriptSvg from '$static/svg/javascript.svg';
	import typescriptSvg from '$static/svg/typescript.svg';

	let databases: Skill[] = [
		{
			name: 'MySQL',
			image: csharpSvg
		},
		{
			name: 'MongoDB',
			image: angularSvg
		},
		{
			name: 'SQLite',
			image: githubSvg
		},
		{
			name: 'Redis',
			image: javascriptSvg
		},
		{
			name: 'MS SQLServer',
			image: typescriptSvg
		},
		{
			name: 'Postgres',
			image: nestjsSvg
		}
	];

	let languages: Skill[] = [
		{
			name: 'C#',
			image: csharpSvg
		},
		{
			name: 'Javascript',
			image: javascriptSvg
		},
		{
			name: 'Typescript',
			image: typescriptSvg
		},
		{
			name: 'C#',
			image: csharpSvg
		},
		{
			name: 'Java',
			image: javascriptSvg
		},
		{
			name: 'Kotlin',
			image: typescriptSvg
		},
		{
			name: 'C#',
			image: csharpSvg
		},
		{
			name: 'Go',
			image: javascriptSvg
		},
		{
			name: 'Typescript',
			image: typescriptSvg
		}
	];
	let tools: Skill[] = [
		{
			name: 'Github',
			image: githubSvg
		},

		{
			name: 'VS Code',
			image: vscodeSvg
		}
	];

	let frontend: Skill[] = [
		{
			name: 'Angular',
			image: angularSvg
		},

		{
			name: 'Svelte(Kit)',
			image: svelteSvg
		},
		{
			name: 'Sass',
			image: sassSvg
		}
	];

	let backend: Skill[] = [
		{
			name: '.net core',
			image: netcoreSvg
		},
		{
			name: 'NestJs',
			image: nestjsSvg
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

	<div class="flex flex-wrap items-start justify-start gap-4 my-4 ">
		<SkillsGroup title="languages" group={languages} />
		<SkillsGroup title="databases" group={databases} />
		<SkillsGroup title="frontend" group={frontend} />
		<SkillsGroup title="backaned" group={backend} />
		<SkillsGroup title="tools" group={tools} />
	</div>
</section>
