<script lang="ts">
	import Photo from './PhotoRainEffect.svelte';

	import Terminal from './Terminal.svelte';
</script>

<!-- HERO -->
<section
	class="flex flex-col items-center justify-start space-x-0 lg:flex-row lg:space-x-6 snap-always snap-center "
	style="min-height: calc(100vh - 72px);"
>
	<!-- intro -->
	<div class="w-full mb-8 lg:w-1/2 ">
		<h1 class="heading-1">
			Hi, <span class="gradient-text">Lahcene</span> here
		</h1>
		<h1 class="heading-1">
			I am a <span class="gradient-text">Full Stack</span> Developer
		</h1>

		<p
			class="max-w-xl mt-4 text-lg leading-relaxed text-justify text-slate-600 dark:text-slate-300 "
		>
			I am 30 years old <span class="keyword">passionate learner</span> having a keen interest in
			building eye-catching digital solutions that
			<span class="keyword">solves</span> real-word problems
		</p>
		<p
			class="max-w-xl mt-4 text-lg leading-relaxed text-justify text-slate-600 dark:text-slate-300"
		>
			Based in <span class="keyword">Algeria</span> I am currently working with various clients
			arround the world on
			<span class="keyword">Upwork</span>
		</p>
	</div>
	<!-- terminal -->
	<!-- <div class="relative flex items-center justify-center w-full lg:w-1/2">
		<Terminal />
		<div class="absolute top-0 left-0 right-0 pointer-events-none">
			<div class="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
				<div class="mix-blend-multiply absolute w-[350px] h-[300px] rounded-[40rem] circle-obj" />
			</div>
			<div class="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
				<div class="mix-blend-multiply absolute w-[200px] h-[250px] rounded-[40rem] circle-obj2" />
			</div>
		</div>
	</div> -->

	<!-- me -->

	<div
		class="relative flex items-center md:justify-start justify-center ml-0 md:pl-10 w-full lg:w-1/2 "
	>
		<Photo />
		<div class="absolute top-0 left-0 right-0 pointer-events-none">
			<div class="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
				<div class="mix-blend-multiply absolute w-[350px] h-[300px] rounded-[40rem] circle-obj" />
			</div>
			<div class="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
				<div class="mix-blend-multiply absolute w-[200px] h-[250px] rounded-[40rem] circle-obj2" />
			</div>
		</div>
	</div>
</section>

<style lang="scss" global>
	// .keyword {
	// 	@apply rounded-md dark:text-white text-slate-700 px-2 py-1 bg-slate-50 dark:bg-slate-600;
	// }

	.circle-obj2 {
		background: radial-gradient(closest-side, #00fffb, rgba(233, 168, 2, 0));
		animation: traverse-up-right 20s ease-in-out infinite alternate;
		z-index: -1;
	}
	.circle-obj {
		background: radial-gradient(closest-side, #aceb00, rgba(233, 168, 2, 0));
		animation: traverse-up-left 22s ease-in-out infinite alternate;
		z-index: -1;
	}

	@keyframes traverse-up-left {
		33% {
			transform: translateY(10%) translateX(-40%) rotate(180deg);
		}

		66% {
			transform: translateY(-40%) translateX(-30%) rotate(-60deg);
		}

		100% {
			transform: translateY(0) translateX(0) rotate(0);
		}
	}

	@keyframes traverse-up-right {
		33% {
			transform: translateY(-20%) translateX(80%) rotate(180deg);
		}

		66% {
			transform: translateY(10%) translateX(30%) rotate(360deg);
		}

		100% {
			transform: translateY(0) translateX(0) rotate(0);
		}
	}
</style>
