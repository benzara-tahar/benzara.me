<script lang="ts">
	import natureSvg from '$static/svg/sounds/nature.svg';
	import beachSvg from '$static/svg/sounds/beach.svg';
	import paperSvg from '$static/svg/sounds/paper.svg';
	import rainSvg from '$static/svg/sounds/rain.svg';
	import typingSvg from '$static/svg/sounds/typing.svg';
	import shhhSvg from '$static/svg/sounds/shhh.svg';
	import DarkThemeSwitcher from '../DarkThemeSwitcher.svelte';
	import { useInlineSvg } from '$actions/useInlineSvg.action';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { settingsVisible } from '$lib/_store/app.store';
	import type { Unsubscriber } from 'svelte/store';
	import AudioButton from './AudioButton.svelte';

	let height: string | number = '0';
	const dispatch = createEventDispatcher();

	let audios = [
		{ name: 'nature', src: '/audio/nature.mp3', svg: natureSvg, paused: true },
		{ name: 'beach', src: '/audio/beach.mp3', svg: beachSvg, paused: true },
		{ name: 'paper', src: '/audio/paper.mp3', svg: paperSvg, paused: true },
		{ name: 'rain', src: '/audio/rain.mp3', svg: rainSvg, paused: true },
		{ name: 'typing', src: '/audio/typing.mp3', svg: typingSvg, paused: true },
		{ name: 'shhh', src: '/audio/shhh.mp3', svg: shhhSvg, paused: true }
	];
	let audioControls = new Array<HTMLAudioElement>();

	const toggle = (audio: any) => {
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

	let unsubscribe: Unsubscriber;
	onMount(() => {
		// unsubscribe = settingsVisible.subscribe((isVisible) => {
		// 	height = isVisible ? '64px' : '0';
		// });
	});

	onDestroy(() => {
		// unsubscribe();
	});
</script>

<section
	class="w-full bg-gray-300 dark:bg-gray-500 overflow-hidden transition-all {$settingsVisible
		? 'settings opened'
		: 'settings closed'}"
>
	<div
		class="container flex items-center justify-center mt-0 space-x-1 overflow-x-scroll overflow-y-hidden sm:mt-2 sm:space-x-6"
	>
		{#each audios as audio, index}
			<audio loop bind:this={audioControls[index]} id={audio.name} class="hidden">
				<source src={audio.src} type="audio/mpeg" />
			</audio>
			<AudioButton on:toggle={(e) => toggle(e.detail)} {audio} />
		{/each}

		<div />
		<DarkThemeSwitcher />
	</div>
</section>

<style lang="scss">
	.settings {
		&.closed {
			height: 0;
		}
		&.opened {
			height: 64px;
		}
	}
</style>
