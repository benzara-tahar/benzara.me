<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
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

<nav class="bg-gray-900 py-5  px-5 font-mono">
	<div class="mx-auto max-w-7xl flex justify-between">
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
	</div>
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
			<div class="flex space-x-6 mt-6 sm:mt-0">
				<!-- twitter -->
				<a
					class="text-gray-900 dark:text-white hover:text-blue-600"
					target="_blank"
					href="https://twitter.com/BenzaraTahar"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-twitter"
						><path
							d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
						/></svg
					>
				</a>
				<!-- github -->
				<a
					class="text-gray-900 dark:text-white hover:text-blue-600"
					target="_blank"
					href="https://github.com/benzara-tahar"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
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
				</a>
				<!-- linkedin -->
				<a
					class="text-gray-900 dark:text-white hover:text-blue-600"
					target="_blank"
					href="https://www.linkedin.com/in/belahcen-benzara-tahar/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-linkedin"
						><path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
					>
				</a>
			</div>
		</div>
	</nav>
{/if}

<style lang="scss">
	@use './Navbar.scss';
</style>
