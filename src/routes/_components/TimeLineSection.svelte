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

<section class="w-full h-[400vh] snap-y snap-mandatory  relative">
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
