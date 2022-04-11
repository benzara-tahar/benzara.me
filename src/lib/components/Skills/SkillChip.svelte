<svelte:options accessors={true} />

<script lang="ts">
	import type { Skill } from '$lib/types/skill';
	export let skill: Skill;
	export let className: string;
</script>

<span
	class="flex items-center text-base transition duration-300 border rounded-full cursor-pointer bg-gray-200 hover:bg-gray-400 dark:bg-rhino-600 align-center hover:dark:bg-gray-900 ease w-max dark:border-slate-800 border-slate-200 {className ||
		''} group"
>
	{#if skill.image}
		<img
			class="hidden w-10 h-10 p-1 transition bg-cover rounded-full sm:inline-block group-hover:grayscale-0 max-w-none dark:bg-gray-900 bg-slate-300 group-hover:bg-primary-500"
			alt={skill.name}
			src={skill.image}
		/>
	{/if}
	<span class="p-2 text-sm text-gray-700 dark:text-gray-200 ">
		{skill.name}
	</span>
</span>
