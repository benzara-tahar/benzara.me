<script lang="ts">
	import type { Project } from '$lib/types/project';
	// import githubSvg from '$static/svg/github.svg';
	// import linkSvg from '$static/svg/github.svg';

	export let project: Project;
</script>

<div
	class="transition-all
	hover:-translate-y-1 cursor-pointer flex dark:text-slate-300 text-slate-700 w-full  border  border-slate-200 dark:border-slate-800 rounded-md "
>
	<div class="flex flex-col">
		<!-- thumbnail -->
		<img
			src={project.thumbnail}
			alt={project.title}
			class="bg-cover max-h-64 rounded-t-md dark:bg-black bg-slate-400 p-1 mb-4"
		/>
		<!-- title and description  and tags -->
		<div class="flex flex-col px-6">
			<h3 class="dark:text-white text-slate-700  text-2xl font-bold">{project.title}</h3>
			<p class="text-sm dark:text-slate-400 text-slate-500  mt-4">
				{@html project.shortDescription}
			</p>

			<!-- tags -->
			<div class="flex items-start  flex-wrap gap-x-3 py-4 ">
				{#each project.tags as tag}
					<span class="font-mono dark:text-primary-500 text-primary-600">#{tag}</span>
				{/each}
			</div>
		</div>

		<!-- urls -->
		<div class="flex gap-4 p-6 mt-auto text-slate-400 ">
			{#if project.githubUrl}
				<a target="_blank" href={project.githubUrl}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="hover:stroke-slate-100"
						><path
							class="text-red"
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						/></svg
					>
				</a>
			{/if}
			{#if project.url}
				<a target="_blank" href={project.url}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</a>
			{/if}
		</div>
	</div>
</div>
