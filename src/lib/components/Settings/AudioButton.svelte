<script lang="ts">
	import { useInlineSvg } from '$actions/useInlineSvg.action';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { settingsVisible } from '$lib/_store/app.store';
	import type { Unsubscriber } from 'svelte/store';

	export let audio;
	let height: string | number = '0';
	const dispatch = createEventDispatcher();

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
	on:click={() => dispatch('toggle', audio)}
	class="box-border flex flex-col items-center justify-center space-y-1 pt-2   border-b-0  dark:bg-slate-900 bg-slate-100 cursor-pointer dark:hover:bg-slate-600 transition-all w-16 rounded-md p-2 
    {audio.paused ? '' : 'border-primary-400 dark:bg-slate-600 bg-[#2d2d2d] '}"
>
	<!--TODO! fix inline svg fill is not changed when the sound is selected!  -->
	<img
		use:useInlineSvg
		src={audio.svg}
		alt="icon"
		class=" w-7 h-7 {audio.paused ? 'text-slate-400' : 'text-primary-400'}"
	/>
	<span
		class="{audio.paused
			? 'dark:text-slate-400 text-slate-600'
			: 'gradient-text'} cursor-pointer text-xs">{audio.name}</span
	>
</button>
