<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<footer
	class=" print:hidden text-center lg:text-left bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-600"
>
	<div class="container">
		<div class="flex flex-col sm:flex-row justify-between items-center py-8 sm:px-0 px-5 ">
			<div class="flex flex-col space-y-2 items-center sm:items-start">
				<p class="tracking-wide">Designed and developed by Benzara Tahar Benlahcene.</p>
				<p class="tracking-wide">
					Built with <a
						class="text-primary hover:text-primary-400"
						target="_blank"
						href="https://kit.svelte.dev/">SvelteKit</a
					>. Hosted on
					<a target="_blank" class="text-primary hover:text-primary-400" href="https://vercel.com/"
						>Vercel</a
					>.
				</p>
			</div>

			<!-- social icons -->
			<SocialIcons />
		</div>
	</div>
</footer>
