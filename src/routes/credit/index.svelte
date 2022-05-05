<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<main class="container py-8 min-h-screen">
	<h1 class="heading-1">
		He who does not thank people has not thanked <span class="gradient-text">Allaah </span>
	</h1>

	<div
		class="relative dark:text-slate-400 text-slate-500 text-lg mt-10 "
		in:fly={{ y: 10, delay: 500 }}
	>
		<p>This website would have not possible without :</p>
		<br />
		<ul class=" text-justify tracking-wider mx-auto">
			<li>🙏 My parents for giving me best things they could give since I opened my eyes</li>
			<li>🙏 My wife for always existing in my life, for her support and love</li>
			<li>🙏 My 2 special kids for giving me another taste of life</li>
			<li>
				🙏 My friend and previous teacher Bouelam Timetoucine for guiding me in first steps in 2008
			</li>
			<li>
				🙏 My friend and previous English teacher HK Asia for teaching me who to write these words,
				and for believing in me
			</li>
			<li>
				🙏 My friend and previous coworker AbdelMalek Benzamem for openning my eyes about the modern
				web tooling
			</li>
			<li>
				🙏 My friend and previous coworker Rémi Vion for a whole new shift during a short span of
				time in productivity, www ecosystem, gaming and a lot more
			</li>
		</ul>
	</div>
</main>

<style>
	ul {
		@apply flex flex-wrap gap-4 items-stretch;
	}
	li {
		@apply flex items-center w-96 p-4 rounded-md border border-slate-600;
	}
</style>
