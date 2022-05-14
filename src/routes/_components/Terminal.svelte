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

	$: progress = Math.min(scrollY / container?.clientHeight, 1);

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 500);
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
		<div class="flex flex-col  p-4 terminal relative ">
			<div class="entry">
				<span class="prompt">{promptPrefix}</span>
				<span class="current-dir"> ~{currentDir}</span>
			</div>
			<!-- whoami -->
			<div in:typewriter={{ delay: 500, duration: 500 }} class="entry">
				<span class="text-primary-500 ">$: </span>
				whoami
			</div>
			<div
				in:typewriter={{ delay: 1200, duration: 3000 }}
				class=" leading-relaxed dark:text-slate-200 text-zinc-500"
			>
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
			<div in:typewriter={{ delay: 5000, duration: 600 }} class="entry">
				<span class="text-primary-500 ">$: </span>
				<a href="https://ifconfig.me" target="_blank"> curl ifconfig.me </a>
			</div>
			<div
				in:typewriter={{ delay: 6000, duration: 3000 }}
				class=" leading-relaxed dark:text-slate-200 text-zinc-500"
			>
				<p>ip &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 127.0.0.1</p>
				<p>location &nbsp;&nbsp;: Algiers, Algeria</p>
				<p>
					local time : {new Date().toLocaleTimeString('en-US', {
						timeZone: 'Africa/Algiers'
					})}
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

		<div
			class="absolute pointer-events-none z-[-1] transform  scale-150 "
			style="transform: scale({(1.5 - progress) * 1.5}); ; "
		>
			<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg"
				><path
					stroke="null"
					transform="rotate(37.847 181.633 654.494)"
					id="bg-triangles_svg__svg_12"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m168.227 666.483 13.406-23.977 13.407 23.977h-26.813z"
				/><path
					stroke="null"
					transform="rotate(37.847 40.312 219.26)"
					id="bg-triangles_svg__svg_36"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m32.384 226.348 7.928-14.177 7.927 14.177H32.384z"
				/><path
					stroke="null"
					transform="rotate(37.847 94.978 44.593)"
					id="bg-triangles_svg__svg_39"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m87.05 51.682 7.928-14.178 7.928 14.178H87.05z"
				/><path
					stroke="null"
					transform="rotate(37.847 956.312 968.593)"
					id="bg-triangles_svg__svg_16"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m948.384 975.682 7.928-14.178 7.927 14.178h-15.855z"
				/><path
					stroke="null"
					transform="rotate(37.847 375.314 750.264)"
					id="bg-triangles_svg__svg_34"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m367.387 757.353 7.928-14.177 7.927 14.177h-15.855z"
				/><path
					stroke="null"
					transform="rotate(37.847 521.981 867.598)"
					id="bg-triangles_svg__svg_2"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m514.054 874.687 7.927-14.178 7.928 14.178h-15.855z"
				/><path
					transform="rotate(-56.89 506.502 351.234)"
					stroke="null"
					id="bg-triangles_svg__svg_27"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m489.502 366.435 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(-56.89 774.502 749.9)"
					stroke="null"
					id="bg-triangles_svg__svg_22"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m757.502 765.102 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(-56.89 727.836 129.9)"
					stroke="null"
					id="bg-triangles_svg__svg_30"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m710.836 145.102 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(-56.89 491.502 642.236)"
					stroke="null"
					id="bg-triangles_svg__svg_23"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m474.502 657.438 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(-56.89 346.169 136.903)"
					stroke="null"
					id="bg-triangles_svg__svg_3"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m329.169 152.104 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(52.792 668.504 338.233)"
					stroke="null"
					id="bg-triangles_svg__svg_31"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m651.504 353.435 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(52.792 223.17 879.567)"
					stroke="null"
					id="bg-triangles_svg__svg_4"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m206.17 894.768 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(-19.723 397.501 471.235)"
					stroke="null"
					id="bg-triangles_svg__svg_28"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m380.501 486.436 17-30.403 17 30.403h-34z"
				/><path
					transform="rotate(26.252 811.503 413.267)"
					stroke="null"
					id="bg-triangles_svg__svg_37"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m788.503 433.834 23-41.134 23 41.134h-46z"
				/><path
					stroke="null"
					id="bg-triangles_svg__svg_6"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m767.17 757.834 23-41.134 23 41.134h-46z"
				/><path
					stroke="null"
					transform="rotate(128.225 791.932 625.073)"
					id="bg-triangles_svg__svg_7"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m769.826 644.84 22.106-39.535 22.107 39.536h-44.213z"
				/><path
					stroke="null"
					id="bg-triangles_svg__svg_24"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m468.502 628.072 14-25.038 14 25.038h-28z"
				/><path
					stroke="null"
					id="bg-triangles_svg__svg_14"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m323.169 122.739 14-25.038 14 25.038h-28z"
				/><path
					stroke="null"
					id="bg-triangles_svg__svg_25"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m496.839 883.069 10-17.884 10 17.884h-20z"
				/><path
					stroke="null"
					id="bg-triangles_svg__svg_8"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m358.172 155.069 10-17.884 10 17.884h-20z"
				/><path
					stroke="null"
					transform="rotate(45 148.002 374.231)"
					id="bg-triangles_svg__svg_10"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m124.284 395.44 23.718-42.417 23.717 42.417h-47.435z"
				/><path
					stroke="null"
					transform="rotate(-24.273 184.292 435.273)"
					id="bg-triangles_svg__svg_18"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m172.145 446.136 12.147-21.725 12.147 21.725h-24.294z"
				/><path
					stroke="null"
					transform="rotate(24.565 681.296 350.273)"
					id="bg-triangles_svg__svg_33"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m669.149 361.135 12.147-21.724 12.147 21.724H669.15z"
				/><path
					stroke="null"
					transform="rotate(24.565 235.963 891.606)"
					id="bg-triangles_svg__svg_13"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m223.816 902.468 12.147-21.724 12.147 21.724h-24.294z"
				/><path
					stroke="null"
					transform="rotate(-24.273 637.517 747.268)"
					id="bg-triangles_svg__svg_19"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m629.455 754.478 8.062-14.42 8.063 14.42h-16.125z"
				/><path
					stroke="null"
					transform="rotate(-24.273 405.515 466.266)"
					id="bg-triangles_svg__svg_29"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m397.452 473.475 8.063-14.42 8.063 14.42h-16.126z"
				/><path
					stroke="null"
					transform="rotate(-24.273 543.517 210.263)"
					id="bg-triangles_svg__svg_1"
					class="dark:fill-slate-700/30 fill-zinc-200/50"
					d="m535.454 217.473 8.062-14.42 8.063 14.42h-16.125z"
				/></svg
			>
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
