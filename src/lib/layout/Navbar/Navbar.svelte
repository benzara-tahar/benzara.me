<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import logoPng from '$static/logo.png';
	import ThemeSwitcher from '../../components/DarkThemeSwitcher.svelte';
	import { user as userStore } from '$store/user.store';

	let hidden = true;
	let menu = [
		{
			text: 'Features',
			url: '/features'
		},
		{
			text: 'Pricing',
			url: '/pricing'
		},
		{
			text: 'Contact',
			url: '/Contact'
		}
	];
</script>

<!-- <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-800">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a class=" flex normal-case text-xl font-bold text-blue-500 px-2 py-1" href="/">
			<span
				class=" md:visible invisible relative after:absolute after:h-2 after:bottom-0
				after:left-0  after:w-[79px] after:bg-red-300 
				after:bg-gradient-to-r after:from-green-400 after:to-blue-500
				after:rounded-r-3xl
				"
			>
				Twinter
			</span>
			<img src={logoPng} alt="logo" width="32" class="ml-2" />
		</a>

		<div class="flex flex-row space-x-4 items-center justify-center ">
			<ul class="list-none flex space-x-6 items-center mr-10">
				{#each menu as item}
					<li>
						<a
							class="font-medium text-lg hover:text-accent dark:hover:text-primary cursor-pointer {$page
								.url.pathname === item.url
								? 'text-primary'
								: 'text-gray-900 dark:text-gray-100'}"
							href={item.url}
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
			<ThemeSwitcher />
			{#if $userStore}
				<span
					class="px-2.5 py-2.5 border rounded-full text-gray-800 bg-gray-200 border-gray-300 dark:text-white dark:border-gray-900 dark:bg-gray-700 font-semibold cursor-default"
				>
					{$userStore.email}
				</span>
			{:else}
				<button
					type="button"
					class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 "
				>
					<svg
						class="mr-2 -ml-1 w-4 h-4"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="twitter"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
						/></svg
					>
					Sign in
				</button>
			{/if}
		</div>
	</div>
</nav> -->

<nav class="bg-gray-100 border-gray-200   rounded dark:bg-gray-800">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-4 px-2">
						<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
						<span class=" text-gray-800 dark:text-gray-200 font-bold text-lg">CodeME</span>
					</a>
				</div>
			</div>
			<!-- Primary Navbar items -->
			<div class="hidden md:flex items-center space-x-1">
				{#each menu as item}
					<a
						href={item.url}
						class="py-4 px-2 text-gray-900 dark:text-gray-100  font-medium relative "
						>{item.text}

						{#if $page.url.pathname === item.url}
							<svg
								class="absolute fill-white dark:fill-gray-900 pointer-events-none -bottom-3"
								width="100%"
								height="24"
								viewBox="0 0 193 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0.5 24C74.9 -19.2 159.833 6 193 24H0.5Z" />
							</svg>
						{/if}
					</a>
				{/each}
			</div>
			<!-- Secondary Navbar items -->

			<div class="hidden md:flex items-center space-x-6 ">
				<ThemeSwitcher />
				<!-- twitter button -->
				<button
					type="button"
					class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 "
				>
					<svg
						class="mr-2 -ml-1 w-4 h-4"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="twitter"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
						/></svg
					>
					Sign in
				</button>
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button" on:click={() => (hidden = !hidden)}>
					<svg
						class=" w-6 h-6 text-gray-500 hover:text-primary "
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
		</div>
	</div>
	<!-- mobile menu -->
	{#if !hidden}
		<div in:fly={{ y: -20 }} class="mobile-menu absolute w-full md:invisible">
			<ul class="">
				{#each menu as item}
					<li class:active={$page.url.pathname === item.url} on:click={() => (hidden = true)}>
						<a
							href={item.url}
							class="block text-sm px-2 py-4 text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 font-medium hover:text-secondary"
							>{item.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style lang="scss">
	@use './Navbar.scss';
</style>
