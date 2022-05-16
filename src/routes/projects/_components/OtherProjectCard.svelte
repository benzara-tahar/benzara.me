<script lang="ts">
  import type { Project } from '$lib/types/project';
  // import githubSvg from '$static/svg/github.svg';
  // import linkSvg from '$static/svg/github.svg';

  export let project: Project;
</script>

<div
  class="flex flex-col  bg-white rounded-lg border shadow-md  md:max-w-xl hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors cursor-pointer"
>
  <!-- thumbnail -->

  <img class="object-cover w-full h-96 rounded-t-lg " src={project.thumbnail} alt={project.title} />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white text-slate-700">
      {project.title}
    </h5>
    <p class="mb-3 font-normal dark:text-slate-400 text-slate-500">
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hover:stroke-primary-500"
          ><path
            d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
          /><line x1="8" y1="12" x2="16" y2="12" /></svg
        >
      </a>
    {/if}
  </div>
</div>
