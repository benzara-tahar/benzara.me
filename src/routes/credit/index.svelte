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
		<p>Credit for inspiration:</p>
		<br />
		<ul class=" mx-auto">
			<li>
				<a target="_blank" href="https://twitter.com/Rich_Harris">Rich_Harris</a> for inventing svelte
			</li>

			<li>
				<a target="_blank" href="https://twitter.com/code_laboratory">Frank's Laboratory</a> for his
				awesome canvas tutorials
			</li>

			<li>
				Matei Copot for this great <a target="_blank" href="https://codepen.io/towc/pen/mJzOWJ"
					>pen</a
				>
			</li>
			<li>
				All developers @<a target="_blank" href="https://awesome-portfolios.vercel.app/"
					>awesome-portfolios</a
				> for the inspiration
			</li>
		</ul>
		<br />
		<p>Special thanks to:</p>
		<br />
		<ul class=" text-justify tracking-wider mx-auto">
			<li>🙏 My parents for giving me best things they could give</li>
			<li>🙏 My wife for always existing in my life, for her support and love</li>
			<li>🙏 My 2 special kids for giving me another taste of life</li>
			<li>
				🙏 My friend and previous teacher Bouelam Timetoucine for guiding me in my very first steps
				in 2008
			</li>
			<li>
				🙏 My friend and previous English teacher HK Asia for teaching me how to write these words,
				and for believing in me
			</li>
			<li>
				🙏 My friend and previous coworker AbdelMalek Benzamem for openning my eyes about the modern
				web tooling at a time when I was still coding for desktop
			</li>

			<li>
				🙏 My friend and previous teacher Mohammed Amine Mostefai for all the pieces of advice and
				for sharing his vast knowledge in many occasions
			</li>
			<li>
				🙏 My friend and previous coworker Rémi Vion for a whole new shift during a short span of
				time in productivity, www ecosystem, gaming and a lot more...
			</li>
		</ul>
	</div>
</main>

<style>
	a {
		@apply hover:text-primary-500 border-b border-dashed border-slate-500 text-slate-600;
	}
	ul {
		@apply flex flex-wrap gap-4 items-stretch;
	}
	li {
		@apply flex items-center justify-center flex-col max-w-sm p-4 rounded-md  border  border-slate-500/30 w-full;
	}
</style>
