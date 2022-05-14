<script lang="ts">
	import { dev } from '$app/env';

	import { supabase } from '$lib/supabase';
	import { currentUser, isLoggedIn } from '$store/auth.store';
	import type { PostgrestError } from '@supabase/supabase-js';
	import { fly } from 'svelte/transition';

	export let error: PostgrestError;
	export let notes;
	let submited = false;

	let note: string = 'Tell me how awesome you are';

	async function signInWithGithub() {
		const { user, session, error } = await supabase.auth.signIn(
			{
				provider: 'github'
			},
			{
				// TODO: better prod and dev url handling
				redirectTo: dev
					? 'http://localhost:3000/community-wall'
					: 'https://benzara.me/community-wall'
			}
		);
		console.log({ user, session, error });
		if (error) {
			return;
		}
	}

	async function signout() {
		const { error } = await supabase.auth.signOut();
	}

	async function send() {
		const result = await supabase.from('community_wall').insert({
			text: note,
			user_id: $currentUser.id,
			avatar_url: $currentUser.avatar_url,
			name: $currentUser.name,
			email: $currentUser.email
		});
		if (!result.error) {
			notes = [...notes, ...result.data];
			submited = true;
		} else {
			error = result.error;
		}
	}
</script>

<main class="container py-8 min-h-screen">
	<h1 class="heading-1 max-w-7x">
		A community wall for you to <span class="gradient-text"> xp</span>ress
	</h1>

	{#if notes?.length}
		<ul class="my-10 flex flex-col gap-4 ">
			{#each notes as item}
				<li
					class=" flex flex-col p-6  justify-between gap-4
					dark:text-slate-200 text-slate-900 text-lg text-justify  max-w-xl leading-relaxed border dark:border-slate-900 border-slate-200 rounded-md"
				>
					<div class="flex itemx-center gap-4">
						<img
							class="w-12 h-12 rounded-full border-4 border-slate-800 p-1"
							src={item.avatar_url}
							alt="Rounded avatar"
						/>
						<div class="flex flex-col">
							<span>
								{item.name}
							</span>
							<span class="text-xs dark:text-slate-500 text-slate-400">
								{new Date(item.created_at).toDateString()},
								{new Date(item.created_at).toLocaleTimeString()}
							</span>
						</div>
					</div>

					<span>
						{item.text}
					</span>
				</li>
			{/each}
		</ul>
	{/if}

	{#if !submited}
		<div
			class="border dark:bg-slate-900 bg-slate-200 p-5 dark:border-slate-800 border-slate-300 rounded-md mt-10"
		>
			<h5 class="text-xl font-semibold dark:text-white text-slate-900">Leave a note</h5>
			<p class="text- font-semibold dark:text-slate-400 text-slate-700 my-4">
				Share a message with me or another visitor of my site.
			</p>
			{#if !$isLoggedIn}
				<form on:submit|preventDefault={signInWithGithub}>
					<button
						type="submit"
						class="
		flex items-center gap-3
		py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>Sign in with Github
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
							class="hover:stroke-slate-100"
							><path
								class="text-red"
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							/></svg
						>
					</button>
				</form>
			{:else}
				<textarea
					bind:value={note}
					id="message"
					rows="4"
					class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Leave a comment..."
				/>
				<button
					type="button"
					on:click={send}
					class="
		 mt-5
		py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>Send</button
				>
				<p class="text-  dark:text-slate-400 text-slate-700 my-4">
					Your information is only used to display your name.
				</p>
			{/if}
		</div>
	{:else}
		<p in:fly={{ x: -10 }} class="text-primary text-lg my-10">
			Thank you {$currentUser?.name} for your note 😊
		</p>
	{/if}

	{#if error}
		<br />
		<h1 class="text-lg text-red-500">Sorry, an error Occured</h1>
		<p class="dark:text-slate-500 text-black">
			{error.message}
		</p>
	{/if}
</main>
