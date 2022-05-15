<script lang="ts">
	import { inview } from 'svelte-inview';
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

	// const headers = [...new Set(sections.map((section) => section.title))];
	const dates = [...new Set(sections.map((section) => section.date))];
</script>

<div class="w-full elative md:-mt-40 -mt-20">
	<section class="container relative overflow-visible">
		<div class="-mt-20 mb-10">
			<h1 class="heading-1  top-10 sticky">
				<span class="gradient-text"> Timeline </span> & Events
			</h1>
		</div>

		<div class="h-[300vh] relative">
			<div
				class=" left-0 text-white text-3xl flex  gap-4 sticky top-10 max-w-[100vw] overflow-hidden"
			>
				{#each dates as date}
					<span>{date.getFullYear()}</span>
				{/each}
			</div>
			<!-- timeline -->

			<section
				use:inview={{ rootMargin: '-50px', unobserveOnEnter: true }}
				on:change={(e) => {
					console.log(e);
				}}
				class="flex items-center justify-center h-screen"
			>
				one
			</section>

			<section class="bg-lime-500 flex items-center justify-center h-screen">two</section>

			<section class="bg-purple-500 flex items-center justify-center h-screen">three</section>
		</div>
	</section>
</div>
