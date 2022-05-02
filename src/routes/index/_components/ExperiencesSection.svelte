<script lang="ts">
	import { onMount } from 'svelte';
	import { experiences } from './experiences';

	onMount(() => {
		return () => {};
	});
</script>

<section class="flex flex-col my-12 ">
	<h1
		class="font-bold leading-tight tracking-tight text-white gradient-text"
		style="font-size: clamp(1.2rem, 8vw, 3rem);"
	>
		Experiences
	</h1>
	<div
		class="relative flex flex-col items-start my-10 justif-start before:bg-primary-500 before:w-[2px] before:absolute before:left-0 before:top-9 before:h-full "
	>
		{#each experiences as e}
			<div
				class="flex items-center justify-center p-2 ml-20 my-4 border-2 border-primary-500 text-primary-500 time min-w-[170px]"
			>
				<span class="text-sm"> {e.from} - {e.to}</span>
			</div>

			<h1 class="my-2 ml-10 text-lg tracking-wide text-white">{e.position} @ {e.company}</h1>
			{#each e.tasks as description}
				<p class="max-w-3xl ml-10 leading-relaxed text-justify text-gray-400">- {description}</p>
			{/each}
		{/each}
	</div>
</section>

<style lang="scss">
	.time::before {
		content: '';
		width: 5rem;
		background-color: #00d6d3;
		height: 2px;
		position: absolute;
		left: 0;
		transform: translateY(-50%);
	}
</style>
