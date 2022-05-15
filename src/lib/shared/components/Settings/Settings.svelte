<script lang="ts">
	import natureSvg from '$static/svg/sounds/nature.svg';
	import beachSvg from '$static/svg/sounds/beach.svg';
	import paperSvg from '$static/svg/sounds/paper.svg';
	import rainSvg from '$static/svg/sounds/rain.svg';
	import typingSvg from '$static/svg/sounds/typing.svg';
	import shhhSvg from '$static/svg/sounds/shhh.svg';
	import AudioButton from './AudioButton.svelte';
	import { settingsVisible } from '$store/app.store';
	import { useClickOutside as clickOutside } from '$actions/useClickOutside';
	import type { SafeAny } from '$lib/models/types/safeAny';

	let audios = [
		{ name: 'nature', src: '/audio/nature.mp3', svg: natureSvg, paused: true },
		{ name: 'beach', src: '/audio/beach.mp3', svg: beachSvg, paused: true },
		{ name: 'paper', src: '/audio/paper.mp3', svg: paperSvg, paused: true },
		{ name: 'rain', src: '/audio/rain.mp3', svg: rainSvg, paused: true },
		{ name: 'typing', src: '/audio/typing.mp3', svg: typingSvg, paused: true },
		{ name: 'shhh', src: '/audio/shhh.mp3', svg: shhhSvg, paused: true }
	];
	let audioControls = new Array<HTMLAudioElement>();

	const toggle = (audio: SafeAny) => {
		let control = audioControls.find((c) => c.id === audio.name);
		if (audio.name === 'shhh') {
			audioControls.forEach((audio) => {
				audio.pause();
			});
			control.loop = false;
			control.play();
			audios.forEach((audio) => {
				audio.paused = true;
			});
			audios = audios;
			return;
		}
		if (audio.paused) {
			control.play();
		} else {
			control.pause();
		}
		audio.paused = !audio.paused;
		audios = audios;
	};
</script>

<!-- TODO fix typing! -->
<section
	use:clickOutside
	on:clickOutside={() => settingsVisible.update(() => false)}
	class="w-full bg-slate-300 dark:bg-slate-800 overflow-hidden transition-all duration-500  {$settingsVisible
		? 'settings opened'
		: 'settings closed'}"
>
	<div class="container  overflow-hidden mx-auto my-3 ">
		<div class="mx-auto  max-w-md">
			<p class="text-slate-500 text-sm  py-3 px-4 font-code tracking-tighter">
				<span class="text-primary-700 dark:text-primary-400/50">
					// ambient background noise I listen to while coding
				</span>
				<br />
				socket.on('listening',function()
				{'{'}
				<br />
				<span class="gradient-text ml-4">
					{'startCoding({ zen: true, dnd: true});'}
				</span>
				<br />
				});
			</p>
		</div>
		<div class="flex flex-wrap  mx-auto max-w-md items-center justify-center  gap-3">
			{#each audios as audio, index}
				<audio loop bind:this={audioControls[index]} id={audio.name} class="hidden">
					<source src={audio.src} type="audio/mpeg" />
				</audio>
				<AudioButton on:toggle={(e) => toggle(e.detail)} {audio} />
			{/each}
		</div>

		<div />
	</div>
</section>

<style lang="postcss">
	.settings {
		&.closed {
			max-height: 0;
		}
		&.opened {
			height: auto;
			max-height: 400px;
		}
	}
</style>
