<script lang="ts">
	import { typewriter } from '$lib/transitions/typewriter.transition';
	import HexagonNeon from '$lib/components/HexagonNeon.svelte';
</script>

<main class="relative w-full bg-red-400" style="height: calc( 100vh - 100px);">
	<HexagonNeon className="absolute top-0 left-0 bottom-0 right-0   pointer-events-none" />
	<div class="flex flex-col mt-10">
		<h1
			in:typewriter={{ speed: 100 }}
			class="text-gray-700 dark:text-gray-200 font-bold text-4xl md:text-5xl text-center tracking-wide relative"
		>
			Go ahead! build something

			<span
				class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 via-green-400"
			>
				FANCY!
			</span>
			<span class="rocket"> 🚀 </span>
		</h1>
	</div>
</main>

<style lang="scss">
	.rocket {
		position: absolute;
		animation: jump 0.3s ease-out infinite forwards;
		cursor: pointer;
		&:hover {
			animation-duration: 0.2s;
		}
	}

	@keyframes jump {
		0% {
			transform: translateY(-2px);
		}

		50% {
			transform: translateY(2px);
		}

		100% {
			transform: translateY(-2px);
		}
	}
</style>
