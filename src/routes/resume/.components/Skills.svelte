<script>
	const languages = ['C#', 'Javascript', 'Typescript', 'CSS/SASS', 'HTML'];

	const libs = ['Tailwind', 'Cypress', 'Jest', 'Moq', 'React', 'NodeJs', 'Angular', 'Svelte(kit) '];
	const tools = ['Git', 'Gitlab', 'Docker', 'Github', 'Azure', 'Jira', 'Clickup', 'Agile'];
	const others = [
		'Nestjs',
		'Microservices',
		'Xunit',
		'Auth0',
		'IdentityServer',
		'PassportJs',
		'CQRS',
		'CleanArchitecture',
		'Asp.net Core',
		'Rabbitmq',
		'SQLite',
		'Firebase',
		'MySQL',
		'MongoDB',
		'RestApi'
	];
</script>

<section class="m">
	<h1 class="mb-2 text-lg font-semibold text-primary-500">SKILLS</h1>
	<h2 class="mb-2 text-base font-semibold dark:text-slate-300 text-slate-700">
		Programming Languages
	</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each languages as e}
			<span
				class="px-2 py-1 text-xs border rounded text-slate-400 dark:border-slate-500 border-slate-400 "
			>
				{e}
			</span>
		{/each}
	</div>

	<h2 class="mb-2 text-base font-semibold dark:text-slate-300 text-slate-700">
		Libraries & Frameworks
	</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each libs as e}
			<span
				class="px-2 py-1 text-xs border rounded text-slate-400 dark:border-slate-500 border-slate-400 "
			>
				{e}
			</span>
		{/each}
	</div>

	<h2 class="mb-2 text-base font-semibold dark:text-slate-300 text-slate-700">Tools & Platforms</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each tools as e}
			<span
				class="px-2 py-1 text-xs border rounded text-slate-400 dark:border-slate-500 border-slate-400 "
			>
				{e}
			</span>
		{/each}
	</div>

	<h2 class="mb-2 text-base font-semibold dark:text-slate-300 text-slate-700">Backend</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each others as e}
			<span
				class="px-2 py-1 text-xs border rounded text-slate-400 dark:border-slate-500 border-slate-400 "
			>
				{e}
			</span>
		{/each}
	</div>
</section>
