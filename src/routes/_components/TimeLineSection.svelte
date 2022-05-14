<script lang="ts">
	interface TimeLineItem {
		title: string;
		htmlContent: string;
		date: Date;
		location: string;
	}

	let sections: TimeLineItem[] = [
		{
			title: 'BORN',
			htmlContent: 'I came to this racing world screeming, hello world!',
			date: new Date('1992-02-08'),
			location: 'Algiers'
		},
		{
			title: 'HISTORY',
			htmlContent: 'Won second prize of Imagine Cup Competetion',
			date: new Date('2013-09-11'),
			location: 'Algiers'
		},
		{
			title: 'EDUCATION',
			htmlContent: 'After 3 years at hight school. I obtained my Bachelor Degree',
			date: new Date('2010-12-01'),
			location: 'Algiers, Ain Defla'
		},
		{
			title: 'EDUCATION',
			htmlContent:
				'Graduated after 5 amazing years at university, Got my Master Degree in Computer Science',
			date: new Date('2015-06-24'),
			location: 'Algiers, ESI'
		},
		{
			title: 'EXPERIENCES',
			htmlContent: 'I worked as a Fullstack developer at RedFabriq',
			date: new Date('2018-12-01'),
			location: 'Kouba, Algiers'
		},

		{
			title: 'EXPERIENCES',
			htmlContent: 'I said it is time to stop working for others, so i quit my job',
			date: new Date('2021-11-18'),
			location: 'Algiers'
		},
		{
			title: 'NOW',
			htmlContent: 'I am currently jobless',
			date: new Date('1995-12-01'),
			location: 'ALGIERS'
		}
	];

	const headers = [...new Set(sections.map((section) => section.title))];
</script>

<div class="w-full h-[400vh] snap-y snap-mandatory  relative" style="transform: translateY(-25vh);">
	<svg
		id="visual"
		viewBox="0 0 900 300"
		style="aspect-ratio: 900/300;transform:translateY(-1px)"
		class="w-full relative top-0"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
	>
		<!-- <rect x="0" y="0" width="900" height="300" fill="black" /> -->
		<path
			d="M0 171L21.5 180.3C43 189.7 86 208.3 128.8 208.7C171.7 209 214.3 191 257.2 175.3C300 159.7 343 146.3 385.8 142.2C428.7 138 471.3 143 514.2 152.2C557 161.3 600 174.7 642.8 175.8C685.7 177 728.3 166 771.2 172.2C814 178.3 857 201.7 878.5 213.3L900 225L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
			class="dark:fill-gray-800 fill-zinc-100 "
		/>
		<path
			d="M0 73L21.5 70.3C43 67.7 86 62.3 128.8 60.7C171.7 59 214.3 61 257.2 69.2C300 77.3 343 91.7 385.8 89.5C428.7 87.3 471.3 68.7 514.2 74.3C557 80 600 110 642.8 110.3C685.7 110.7 728.3 81.3 771.2 67.3C814 53.3 857 54.7 878.5 55.3L900 56L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
			class="dark:fill-gray-900 fill-zinc-200 "
		/>
	</svg>
	<section>
		<div class="container h-screen sticky top-0">
			<h1 class="heading-1  top-0 sticky">
				<span class="gradient-text"> Timeline </span> & Events
			</h1>
		</div>

		<div class=" container flex  bg-red-900 p-20 items-start justify-center relative ">
			<div class="container relative flex flex-col  overflow-auto ">
				<!-- header -->
				<div class=" ">
					{#each headers as header, index}
						<span
							class="font-bold text-gray-500 text-2xl {index == 0 ? ' gradient-text text-4xl' : ''}"
						>
							{header}
						</span>
					{/each}
				</div>

				{#each sections.slice(0, 1) as section, index}
					<div class="flex items-center justify-center min-h-screen w-full bg-slate-{index}00">
						<!-- content -->
						<span class="font-bold text-gray-500 text-6xl max-w-3xl">
							{section.htmlContent}
						</span>
					</div>
				{/each}
				<!-- arrow -->

				<svg
					class="absolute bottom-10 "
					width="31"
					height="17"
					viewBox="0 0 31 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.5833 1L15.2917 15.2917L1 1"
						stroke="#CDCDCD"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<!-- date and location -->

				<div class="" />
			</div>
		</div>
	</section>
</div>
