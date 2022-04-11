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
	class="box-border flex flex-col items-center justify-center space-y-1 pt-2   border-b-0  dark:bg-gray-900 bg-gray-100 cursor-pointer dark:hover:bg-rhino-600 transition-all 
    {audio.paused ? '' : 'border-primary-400'}"
	style="min-width: 64px;  border-radius: 16px 16px 0 0"
>
	<!--TODO! fix inline svg fill is not changed when the sound is selected!  -->
	<img
		use:useInlineSvg
		src={audio.svg}
		alt="icon"
		class=" w-7 h-7 {audio.paused ? 'text-gray-400' : 'text-primary-400'}"
	/>
	<span
		class="{audio.paused
			? 'dark:text-gray-400 text-gray-600'
			: 'text-primary-500'} cursor-pointer text-xs">{audio.name}</span
	>
</button>
