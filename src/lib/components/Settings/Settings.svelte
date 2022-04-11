<script lang="ts">
	import natureSvg from '$static/svg/sounds/nature.svg';
	import beachSvg from '$static/svg/sounds/beach.svg';
	import paperSvg from '$static/svg/sounds/paper.svg';
	import rainSvg from '$static/svg/sounds/rain.svg';
	import typingSvg from '$static/svg/sounds/typing.svg';
	import shhhSvg from '$static/svg/sounds/shhh.svg';
	import DarkThemeSwitcher from '../DarkThemeSwitcher.svelte';

	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { settingsVisible } from '$lib/_store/app.store';
	import type { Unsubscriber } from 'svelte/store';

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
	class="w-full bg-gray-300 dark:bg-rhino-500 overflow-hidden transition-all {$settingsVisible
		? 'settings opened'
		: 'settings closed'}"
>
	<div class="container  flex items-center justify-center space-x-6 mt-2">
		{#each audios as a, index}
			<audio loop bind:this={audioControls[index]} id={a.name} class="hidden">
				<source src={a.src} type="audio/mpeg" />
			</audio>
			<div
				on:click={() => toggle(a)}
				class=" flex flex-col items-center justify-center space-y-1 pt-2   border-b-0  dark:bg-gray-900 bg-gray-100 cursor-pointer dark:hover:bg-rhino-600 transition-all {a.paused
					? ''
					: 'border-primary-400 border'}"
				style="min-width: 64px;  border-radius: 16px 16px 0 0"
			>
				<img src={a.svg} alt="icon" class="w-7 h-7" />
				<span class="{a.paused ? 'text-gray-400' : 'text-primary-400'} cursor-pointer text-xs"
					>{a.name}</span
				>
			</div>
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
