<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import logoPng from '$static/logo.png';
	import ThemeSwitcher from '../../components/DarkThemeSwitcher.svelte';
	import { user as userStore } from '$store/user.store';

	import Logo from './TerminalLogo.svelte';

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
</script>

<nav class="py-5 container flex justify-between font-code">
	<!-- logo -->
	<Logo />
	<!-- Primary Navbar items -->
	<div class="hidden md:flex items-center justify-center space-x-3 h-8">
		{#each menu as item, index}
			<a
				href={item.url}
				class=" px-2  font-normal tracking-wider relative {$page.url.pathname === item.url
					? 'text-primary-400 border-b-primary-400 border-b-2'
					: 'text-gray-900 dark:text-gray-100'}"
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
	<!-- Mobile menu button -->
	<button
		class="outline-none mobile-menu-button md:hidden inline-block"
		on:click={() => (hidden = !hidden)}
	>
		<svg
			class=" w-8 h-8 text-gray-200 hover:text-primary "
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
</nav>

<!-- mobile menu -->

{#if !hidden}
	<nav
		in:fly={{ y: 10, duration: 300 }}
		out:fly={{ y: 10, duration: 300 }}
		class="fixed w-full h-screen top-0 left-0 bg-gray-900 z-50"
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
					class="w-8 h-8 fill-gray-200 hover:fill-primary p-1"
				>
					<polygon
						points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
					/>
				</svg>
			</button>

			<!-- menu -->
			<ul class="flex flex-col  items-center justify-center">
				{#each menu as item}
					<li class:active={$page.url.pathname === item.url} on:click={() => (hidden = true)}>
						<a
							href={item.url}
							class="block text-4xl font-bold px-2 py-4 text-gray-200   hover:text-secondary"
							>{item.text}</a
						>
					</li>
				{/each}
			</ul>

			<!-- social icons -->
			<SocialIcons />
		</div>
	</nav>
{/if}

<style lang="scss">
	@use './Navbar.scss';
</style>
