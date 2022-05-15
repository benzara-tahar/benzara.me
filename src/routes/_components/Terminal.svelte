<script context="module">
	export let intro = true;
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { typewriter } from '$transitions/typewriter.transition';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	const promptPrefix = 'root@benzara.me';
	const currentDir = '/home';

	let terminalInput: HTMLInputElement;
	let container: HTMLElement;
	// don't show the terminal animation on first render if we are on the server
	let show = !browser;
	let output = '';
	let scrollY = 0;
	let localTime = new Date().toLocaleTimeString('en-US', {
		timeZone: 'Africa/Algiers'
	});
	const animationDuration = 5000;

	$: progress = Math.min(scrollY / container?.clientHeight, 1);

	onMount(() => {
		let timerId;
		setTimeout(() => {
			timerId = setInterval(() => {
				localTime = new Date().toLocaleTimeString('en-US', {
					timeZone: 'Africa/Algiers'
				});
			}, 1000);
		}, animationDuration);

		setTimeout(() => {
			show = true;
		}, 500);
		return () => {
			clearInterval(timerId);
		};
	});

	const focusTerminalInput = () => {
		terminalInput.focus();
	};

	function handleCommand(e: KeyboardEvent) {
		if (e.key.toLowerCase() !== 'enter') {
			return;
		}
		output =
			'Unknown command!\nSorry cli guy, this terminal is not not interactive ... yet, perhaps one day!';
	}
</script>

<svelte:window bind:scrollY />

<div
	bind:this={container}
	on:click={focusTerminalInput}
	on:mouseenter={focusTerminalInput}
	style="transform: rotateX({-24 * progress}deg) rotateY({24 * progress}deg);"
	class="font-code w-full dark:text-slate-500 text-zinc-800  rounded-md border dark:border-slate-800 border-zinc-300  dark:bg-slate-900/30 bg-zinc-400/10  h-[500px] flex flex-col -z-[0]"
>
	<!-- top bar -->
	<div class="flex flex-row items-center justify-between bg-slate-800s">
		<div class="flex flex-row space-x-2 px-6 py-3">
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-zinc-400" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-zinc-600" />
			<span class="w-3 h-3 rounded-full bg-opacity-70 bg-zinc-500" />
		</div>
		<div
			class="rounded-xl dark:text-gray-400 text-zinc-500  dark:bg-slate-800 bg-zinc-300 bg-opacity-40 px-2 py-1   flex items-center justify-center w-full mx-2 text-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-github"
				><path
					d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				/></svg
			>

			<a target="_blank" href="https://github.com/benzara-tahar" class="text-xs ml-1">
				github.com/benzara-tahar
			</a>
		</div>
	</div>
	<!-- cli -->
	{#if show}
		<div
			in:typewriter={{ delay: 500, duration: animationDuration }}
			class="flex flex-col  p-4 terminal relative"
		>
			<div class="entry">
				<span class="prompt">{promptPrefix}</span>
				<span class="current-dir"> ~{currentDir}</span>
			</div>
			<!-- whoami -->
			<div class="entry">
				<span class="text-primary-500 ">$: </span>
				whoami
			</div>
			<div class=" leading-relaxed dark:text-slate-200 text-zinc-500">
				<p>[x] curiosity driven human</p>
				<p>[x] challenging myself at a daily basis</p>
				<p>[x] Also a chess player ♟</p>
				<p>[x] and fork('aymen.exe'); fork('riad.so')</p>
				<p>[ ] still in progress...</p>
			</div>
			<div class="entry" in:fade={{ delay: 4400, duration: 1 }}>
				<span class="prompt">{promptPrefix}</span>
				<span class="current-dir"> ~{currentDir}</span>
			</div>

			<!-- curl ifconfig.me -->
			<div class="entry">
				<span class="text-primary-500 ">$: </span>
				<a href="https://ifconfig.me" target="_blank"> curl ifconfig.me </a>
			</div>
			<div class=" leading-relaxed dark:text-slate-200 text-zinc-500">
				<p>ip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 127.0.0.1</p>
				<p>location &nbsp;&nbsp;: Algiers, Algeria</p>
				<p>
					local time : {localTime}
				</p>
			</div>
			<div class="entry" in:fade={{ delay: 9000, duration: 1 }}>
				<span class="prompt">{promptPrefix}</span>
				<span class="current-dir"> ~{currentDir}</span>
			</div>

			<!-- input -->
			<input
				bind:this={terminalInput}
				type="text"
				class="input dark:text-white text-black"
				on:keyup={handleCommand}
			/>
			{#if output}
				<p class="text-red-500">{output}</p>
			{/if}
		</div>

		<!-- triangles -->
		<div class="w-full bg-purples-900  z-0 absolute inset-1 -top-28   pointer-events-none">
			{#each Array.from({ length: 50 }) as item}
				<span
					class="dark:bg-slate-300 bg-zinc-800 -z-[1]  hue-rotate-60 absolute "
					style="top: {Math.random() * 100}%; left: {Math.random() * 100}%;
					width: {Math.random() * 30}px; height: {Math.random() * 20}px;
					border-radius: {Math.random() * 50}px;
					opacity: {Math.min(0.2, Math.random() * 0.1)};
					
					"
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	:global(.terminal) {
		.current-dir {
			@apply left-3 text-primary-500;
		}
		.entry {
			@apply relative;
		}

		.input {
			@apply outline-none bg-transparent  caret-accent;
			&::after {
				content: '$:';
				@apply left-3 relative text-accent-500 font-bold;
			}
		}
	}
</style>
