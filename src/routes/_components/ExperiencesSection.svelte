<script lang="ts">
	import { onMount } from 'svelte';
	import { experiences } from './_data/experiences-data';
	onMount(() => {
		return () => {};
	});
</script>

<div class="container">
	<section class="flex flex-col my-12 ">
		<h1 class="heading-1">My past <span class="gradient-text">experiences </span></h1>
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
					<p class="max-w-3xl ml-10 leading-relaxed text-slate-400">● {description}</p>
				{/each}
			{/each}
		</div>
	</section>
</div>

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
