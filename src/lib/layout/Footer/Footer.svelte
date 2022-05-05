<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';

	const extraLinks = [
		{
			text: 'Change Log',
			href: '/change-log'
		},
		{
			text: 'Resume',
			href: '/resume'
		},

		{
			text: 'Newsletter',
			href: 'https://www.getrevue.co/profile/benzara'
		}
	];

	const specificLinks = [
		{
			text: 'Community Wall',
			href: '/community-wall'
		},
		{
			text: 'Notes',
			href: '/notes'
		},
		{
			text: 'Testimonials',
			href: '/testimonials'
		},
		{
			text: 'Credit',
			href: '/credit'
		}
	];
</script>

<footer
	class=" print:hidden  lg:text-left bg-slate-200 dark:bg-slate-900 dark:text-slate-400 text-slate-600"
>
	<div class="container py-10  flex md:flex-row flex-col md:gap-20 gap-8">
		<!-- extraLinks -->
		<div class="flex flex-col items-start">
			<h2 class="uppercase text-lg mb-2 font-semibold  dark:text-slate-100 text-slate-800">
				Extra
			</h2>
			<div class="flex flex-col items-start  gap-2 ">
				{#each extraLinks as { text, href }}
					<a
						{href}
						class="border-dashed border-b border-slate-600 hover:text-primary-500 flex  items-center whitespace-pre"
						target={href.startsWith('http') ? '_blank' : ''}
					>
						{text}
						{#if href.startsWith('http')}
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 32 32"
								id="i-external"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentcolor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							>
								<path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>
		<!-- specific links -->
		<div class="flex flex-col items-start">
			<h2 class="uppercase text-lg mb-2 font-semibold  dark:text-slate-100 text-slate-800">
				Specifics
			</h2>
			<div class="flex flex-col items-start  gap-2 ">
				{#each specificLinks as { text, href }}
					<a
						{href}
						class="border-dashed border-b border-slate-600 hover:text-primary-500 flex  items-center whitespace-pre"
						target={href.startsWith('http') ? '_blank' : ''}
					>
						{text}
						{#if href.startsWith('http')}
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 32 32"
								id="i-external"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentcolor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							>
								<path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>

		<div class="flex flex-col  items-start  gap-4 ">
			<!-- social icons -->
			<SocialIcons />
			<p class="tracking-wide text-left">Designed and developed by Benzara Tahar Benlahcene.</p>
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
	</div>
</footer>
