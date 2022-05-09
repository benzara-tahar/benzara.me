<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import SocialIcons from '$lib/components/SocialIcons.svelte';

	import Logo from './Logo.svelte';
	import { initCanvasAnimation } from './canvasAnimation';
	import { settingsVisible } from '$lib/_store/app.store';
	import DarkThemeSwitcher from '$lib/components/DarkThemeSwitcher.svelte';
	// https://codepen.io/towc/pen/mJzOWJ
	let canvas: HTMLCanvasElement;
	let hidden = true;
	let menu = [
		{
			text: 'Home',
			url: '/'
		},
		{
			text: 'About',
			url: '/about'
		},
		{
			text: 'Projects',
			url: '/projects'
		},
		{
			text: 'Blog',
			url: '/blog'
		},
		{
			text: 'Now',
			url: '/now'
		},
		{
			text: 'Resume',
			url: '/resume'
		}
	];

	function showMobileMenu() {
		hidden = false;
		setTimeout(() => {
			initCanvasAnimation(canvas, window);
		}, 0);
	}

	function toggleSettings() {
		settingsVisible.update((v) => !v);
	}
</script>

<nav class="py-5 container flex justify-between font-code print:hidden h-[72px] cursor-none">
	<!-- logo -->
	<Logo />
	<!-- Primary Navbar items -->
	<div class="hidden md:flex items-center justify-center space-x-3 h-8">
		{#each menu as item}
			<!-- sveltekit:prefetch -->
			<a
				href={item.url}
				class=" px-2  font-normal tracking-wider relative {$page.url.pathname === item.url
					? 'text-primary-600 dark:text-primary-500 border-b-primary-400 border-b-2'
					: 'text-slate-900 dark:text-slate-400 blur-[1px] hover:text-slate-200 hover:blur-0 transition-all duration-300'}"
			>
				<!-- <span class="text-primary-400">
						{index + 1}.
					</span> -->
				<span>
					{item.text.toLowerCase()}
				</span>
			</a>
		{/each}
	</div>
	<div class="flex space-x-4">
		<DarkThemeSwitcher />
		<button
			class="dark:text-slate-300 text-slate-600 hover:text-primary-500"
			on:click={toggleSettings}
		>
			<!-- <svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 w-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				/>
			</svg> -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 w-7"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path
					d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
				/></svg
			>
		</button>
		<!-- Mobile menu button -->
		<button
			class="outline-none mobile-menu-button md:hidden inline-block"
			on:click={showMobileMenu}
		>
			<svg
				class=" w-7 h-7 dark:text-slate-300 text-slate-600 hover:text-primary "
				x-show="!showMenu"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</nav>

<!-- mobile menu -->

{#if !hidden}
	<nav
		in:fly={{ y: 10, duration: 300 }}
		out:fly={{ y: 10, duration: 300 }}
		class="fixed w-full h-screen top-0 left-0 bg-slate-900 z-50 print:hidden"
	>
		<div class="flex flex-col justify-between items-center w-full h-full p-5">
			<!-- close button -->
			<button class="outline-none  self-end" on:click={() => (hidden = !hidden)}>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 371.23 371.23"
					style="enable-background:new 0 0 371.23 371.23;"
					xml:space="preserve"
					class="w-8 h-8 fill-slate-200 hover:fill-primary p-1"
				>
					<polygon
						points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
					/>
				</svg>
			</button>

			<!-- menu -->
			<ul class="flex flex-col  items-center justify-center">
				{#each menu as item, index}
					<li
						in:fly={{ duration: 100, y: -30, delay: index * 50 }}
						class:active={$page.url.pathname === item.url}
						on:click={() => (hidden = true)}
					>
						<!-- sveltekit:prefetch -->
						<a
							href={item.url}
							class="block text-4xl font-bold px-2 py-4 text-slate-200   hover:text-secondary"
							>{item.text}</a
						>
					</li>
				{/each}
			</ul>

			<!-- social icons -->
			<SocialIcons />
		</div>

		<canvas
			bind:this={canvas}
			id="c"
			class="fixed -z-10 opacity-30 w-full h-screen top-0 left-0  pointer-events-none"
		/>
	</nav>
{/if}

<style lang="scss">
	@use './Navbar.scss';
</style>
