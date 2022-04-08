<script lang="ts">
	import { onMount } from 'svelte';
	// import githubSvg from '../../../static/svg/github.svg';

	let audios = [
		{ name: 'nature', src: '/audio/nature.mp3' },
		{ name: 'beach', src: '/audio/beach.mp3' },
		{ name: 'paper', src: '/audio/paper.mp3' },
		{ name: 'rain', src: '/audio/rain.mp3' },
		{ name: 'typing', src: '/audio/typing.mp3' },
		{ name: 'shhh', src: '/audio/shhh.mp3' }
	];
	let audioControls = new Array<HTMLAudioElement>();

	const test = () => {
		console.log(audioControls);
		audioControls.forEach((audio) => {
			audio.play();
		});
	};
</script>

<section class="w-full bg-rhino-500 py-2">
	<div class="container  flex items-center justify-center space-x-6 ">
		{#each audios as { name, src }, index}
			<audio bind:this={audioControls[index]} controls class="hidden">
				<!-- <img src={githubSvg} alt="icon" class="w-16 h16" /> -->
				<source {src} type="audio/mpeg" />
			</audio>
			<div
				class=" flex flex-col items-center justify-center space-y-2 border-2 border-slate-300 rounded-md p"
				style="min-width: 80px; min-height: 80px;"
			>
				<input type="checkbox" value="None" id={name} {name} checked class="hidden" />
				<label class="text-white" for={name}>{name}</label>
			</div>
		{/each}
	</div>
</section>
