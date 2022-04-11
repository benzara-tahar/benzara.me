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

	let height: string | number = '0';
	const dispatch = createEventDispatcher();

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

<button
	on:click={() => toggle(a)}
	class="box-border flex flex-col items-center justify-center space-y-1 pt-2   border-b-0  dark:bg-gray-900 bg-gray-100 cursor-pointer dark:hover:bg-rhino-600 transition-all {a.paused
		? ''
		: 'border-primary-400'}"
	style="min-width: 64px;  border-radius: 16px 16px 0 0"
>
	<!--TODO! fix inline svg fill is not changed when the sound is selected!  -->
	<img
		use:useInlineSvg
		src={a.svg}
		alt="icon"
		class=" w-7 h-7 {a.paused ? 'text-gray-400' : 'text-primary-400'}"
	/>
	<span
		class="{a.paused
			? 'dark:text-gray-400 text-gray-600'
			: 'text-primary-500'} cursor-pointer text-xs">{a.name}</span
	>
</button>
