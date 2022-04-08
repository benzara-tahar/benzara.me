<script lang="ts">
	import skills from '$lib/data/skills.json';
	import about from '$lib/data/about.json';
	import education from '$lib/data/education.json';
	import experiences from '$lib/data/experiences.json';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log({ skills, about, education, experiences });
	});
</script>

<main class=" hyphens-manual py-8 mx-auto ">
	<!-- Page -------------------------------------------------------------------------------------------------------->
	<div
		class="max-w-4xl  my-auto bg-gray-200 border-4 border-rhino-500 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white"
	>
		<!-- Name ---------------------------------------------------------------------------------------------------->
		<header
			class="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8 border-gray-300"
		>
			<div class="block">
				<h1 class="mb-0 text-4xl font-bold text-gray-750">{about.lastname} {about.firstname}</h1>
				<!--Job Title--------------------------------------------------------------------------------------------------------->
				<h2 class="m-0  text-2xl font-semibold text-gray-700 leading-snugish">
					{about.currentPosition}
				</h2>
				<!--Location --------------------------------------------------------------------------------------------------------->

				<h3 class="mt-2  font-semibold text-md text-gray-500 leading-snugish">
					{about.currentLocation}
				</h3>
			</div>
			<!--   Initials Block         -->
			<div
				class="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 bg-rhino-600 initials-container bg-gray-750 print:bg-black"
				style="padding-bottom: 1.5rem; padding-top: 1.5rem;"
			>
				<div class="text-center initial">B</div>
				<div class="text-center initial">T</div>
				<div class="text-center initial">B</div>
			</div>
		</header>

		<!-- Column -------------------------------------------------------------------------------------------------->
		<div
			class="grid gap-16 md:grid-cols-2 print:grid-cols-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
		>
			<!-- Contact Information ------------------------------------------------------------------------------------->
			<section class="pb-4 mt-4 first:mt-0">
				<!-- To keep in the same column -------------------------------------------------------------------------->
				<div class="break-inside-avoid">
					<section class="pb-2 mb-2 border-b-2 break-inside-avoid">
						<ul class="list-inside pr-7">
							<li
								class="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:"
							>
								<a href={about.website} class="group">
									<span class="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
										Website :
									</span>
									{about.website}
									<span
										class="inline-block font-normal text-black transition duration-100 ease-in t print:text-black group-hover:text-gray-700 print:"
									>
										↗
									</span>
								</a>
							</li>
							<li
								class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
							>
								<a href="https://github.com/{about.githubUsername}" class="group">
									<span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
										Github :
									</span>
									{about.githubUsername}
									<span
										class="inline-block font-normal text-black transition duration-100 ease-in  print:text-black group-hover:text-gray-700 print:"
									>
										↗
									</span>
								</a>
							</li>

							<li
								class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
							>
								<a href="mailto:{about.email}" class="group">
									<span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
										Email :
									</span>
									{about.email}
									<span
										class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
							</li>
							<li
								class="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
							>
								<a href="https://twitter.com/{about.twitterHandle}" class="group">
									<span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
										Twitter :
									</span>
									{about.twitterHandle}
									<span
										class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
							</li>
						</ul>
					</section>
				</div>
			</section>
			<!--Summary ---------------------------------------------------------------------------------------------------------->
			<section class="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0 ">
				<!-- To keep in the same column -->
				<div class="break-inside-avoid">
					<h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
						SUMMARY
					</h2>

					<section class="mb-2 break-inside-avoid">
						<p class="mt-2 leading-normal text-gray-700 text-md">
							{about.summary}
						</p>
					</section>
				</div>
			</section>
			<!--Experience ------------------------------------------------------------------------------------------------------>
			<section class="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
				<!-- To keep in the same column ------------------------------------------------------------------------->
				<div class="break-inside-avoid">
					<h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
						EXPERIENCE
					</h2>
					<!--Job 1-->
					<section class="mb-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-600 leading-snugish">
								Full Stack Web Developer
							</h3>
							<p class="leading-normal text-md text-gray-500">
								Jun 2018 &ndash; Present | Freelance
							</p>
						</header>
						<ul class="mt-2.1 text-md text-gray-700 leading-normal">
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								proactively cultivated client relationships
							</li>
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								designed full stack web experiences for clients
							</li>
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								actively engaged with clients about specifications and designs
							</li>
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								crafted literate, comprehensive source code
							</li>
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								provided commentary to improve maintainability
							</li>
							<li>
								<span class="transform -translate-y-px select-none text-gray-500"> &rsaquo; </span>
								fostered ongoing services to clients as requested or needed
							</li>
						</ul>
					</section>
					<!--                Additional Jobs Would Go Here-->
				</div>
			</section>
			<!--Education -------------------------------------------------------------------------------------------------------->
			<section class="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
				<!-- To keep in the same column -->
				<div class="break-inside-avoid">
					<h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
						EDUCATION
					</h2>
					<!-- school --------------------------------------------------------------------------->
					{#each education as item}
						<section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
							<h3 class="flex-grow text-base font-semibold text-gray-700 leading-snugish uppercase">
								{item.stage}
							</h3>

							<p class="mt-1 leading-normal text-md text-gray-600">
								<span class="font-semibold text-gray-700 text-md leading-snugish"
									>{item.school}
								</span>
							</p>
							<p class="leading-normal text-md text-gray-500">
								{item.location}
							</p>
							<p class="leading-normal text-md text-gray-500">
								{item.from} | {item.to}
							</p>
						</section>
					{/each}
				</div>
			</section>
			<!--Projects ---------------------------------------------------------------------------------------------------------->
			<section class="pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
				<div class="break-inside-avoid">
					<!-- To keep in the same column -->
					<h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
						PROJECTS
					</h2>
					<!--Project 1 --------------------------------------------------------------------------------------------------------->
					<section class="pb-4 mb-4 border-b-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-700 leading-snugish">
								<a href="https://github.com/WebPraktikos/universal-resume" class="group">
									Portfolio Website
									<span
										class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
								<span
									class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
								>
									<a href="https://github.com/Thomashighbaugh/ThomasLeonHighbaugh-Personal-Site">
										<i class="fab fa-github" />
									</a>
								</span>
							</h3>
							<p class="leading-normal text-md text-gray-500">
								Since 2019 | JSX, React, Next.js, SCSS
							</p>
						</header>
						<p class="mt-2.1 text-md text-gray-700 leading-normal">
							A unique and streamlined developer portfolio site that combines the useful aspect of
							development portfolios with a blog using Next.js. Interface is clean and features
							graphics designed personally for use within the site.
						</p>
					</section>
					<!--Project 2-->
					<section class="pb-4 mb-4 border-b-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-700 leading-snugish">
								<a href="https://github.com/WebPraktikos/tailwindcss-rich-docs" class="group">
									Keeper CRM
									<span
										class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
								<span
									class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
								>
									<a href="https://github.com/Thomashighbaugh/mern-contact-keeper">
										<i class="fab fa-github" />
									</a>
								</span>
							</h3>
							<p class="leading-normal text-md text-gray-500">2021 | MERN</p>
						</header>
						<p class="mt-2.1 text-md text-gray-700 leading-normal">
							Written as part of the process of learning the MERN stack, this application stores
							contacts for registered users and saves the information they input between sessions.
						</p>
					</section>
					<!--Project 3---------------------------------------------------------->
					<section class="pb-4 mb-4 border-b-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-700 leading-snugish">
								<a href="https://g5-blog-ccl-ife.vercel.app/" class="group">
									Crazy-Wise Gatsby Starter
									<span
										class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
								<span
									class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
								>
									<a href="https://github.com/Thomashighbaugh/crazy-wise-gatsby-starter">
										<i class="fab fa-github" />
									</a>
								</span>
							</h3>
							<p class="leading-normal text-md text-gray-500">
								2020 | React, Styled Components, Gatsby.js
							</p>
						</header>
						<p class="mt-2.1 text-md text-gray-700 leading-normal">
							A starter blog for Gatsby.js that has tinaCMS integrated into development server to
							ease the production of content and a very distinct appearance that is both modern and
							functional. All graphics used in the page heroes are custom pieces made for the site.
						</p>
					</section>
					<!--Project 4---------------------------------------------------------->
					<section class="mb-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-700 leading-snugish">
								<a href="https://github.com/Thomashighbaugh/Opitx/releases" class="group">
									Opitx Markdown Editor
									<span
										class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
									>
										↗
									</span>
								</a>
								<span
									class="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
								>
									<a href="https://github.com/Thomashighbaugh/Opitx/releases">
										<i class="fab fa-github" />
									</a>
								</span>
							</h3>
							<p class="leading-normal text-md text-gray-500">2019 | Electron, React, SCSS</p>
						</header>
						<p class="mt-2.1 text-md text-gray-700 leading-normal">
							An answer to a personal problem with Markdown editors avalable on Linux which provided
							a less than transparent process of saving in user defined locations that evolved into
							a Markdown editor written using electron and packaged for all major Linux
							distributions.
						</p>
					</section>
				</div>
			</section>
			<!--Begin Skills ----------------------------------------------------------------------------------------------------->
			<section class="pb-4 mt-4 first:mt-0">
				<!-- To keep in the same column -->
				<div class="break-inside-avoid">
					<h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
						SKILLS
					</h2>
					<!--Full Stack Development ------------------------------------------------------------------------------------------->
					<section class="mb-2 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold text-gray-700 leading-snugish">
								Full Stack Web Development
							</h3>
						</header>

						<div class="my-1 last:pb-1">
							<ul class="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
								{#each skills as skill}
									<li
										class="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-rhino-400 rounded-sm mr-1"
									>
										{skill}
									</li>
								{/each}
							</ul>
						</div>
					</section>
				</div>
			</section>
		</div>
		<!-- end Column -->
	</div>
	<!-- end Page -->
</main>

<style lang="scss">
	@page {
		size: auto; /* auto is the initial value */
		margin: 0; /* this affects the margin in the printer settings */
	}
	.hyphens-manual {
		-webkit-hyphens: manual;
		-ms-hyphens: manual;
		hyphens: manual;
	}
</style>
