<script lang="ts">
	import type { Skill } from '$lib/types/skill';
	import SkillChip from './SkillChip.svelte';

	export let group: Skill[];
	export let title: string;
</script>

<fieldset
	class="flex flex-wrap px-4 pt-2 pb-4 border-2 border-gray-200 rounded-full dark:border-gray-800"
>
	<legend class="px-3 mx-auto font-mono text-gray-300 dark:text-gray-600">{title}</legend>
	{#each group as skill}
		<div class="relative flex flex-wrap items-center justify-start gap-3">
			<SkillChip {skill} className={' mx-1 '} />
		</div>
	{/each}
</fieldset>
