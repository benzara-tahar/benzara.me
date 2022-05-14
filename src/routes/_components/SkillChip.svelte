<svelte:options accessors={true} />

<script lang="ts">
	import type { Skill } from '$lib/models/interfaces/skill';

	export let skill: Skill;
	export let isBlured: boolean = false;
</script>

<span
	title={skill.name}
	class="
	{isBlured ? 'blur-[1px] grayscale' : ''}
	flex items-center text-base transition duration-300 border rounded-full cursor-pointer bg-zinc-300 hover:bg-zinc-100 dark:bg-slate-700 align-center hover:dark:bg-slate-900 ease w-max dark:border-slate-800 border-slate-200
	 group"
>
	{#if skill.image}
		<img
			class="w-10 h-10 p-1 transition bg-cover rounded-full group-hover:slatescale-0 max-w-none dark:bg-slate-900 bg-slate-300 group-hover:bg-primary-500"
			alt={skill.name}
			src={skill.image}
		/>
	{/if}
	<span class="hidden p-2 text-sm text-slate-700 dark:text-slate-200 sm:inline-block">
		{skill.name}
	</span>
</span>
