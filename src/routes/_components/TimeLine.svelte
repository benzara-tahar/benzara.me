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

<section class="w-full">
	<svg
		width="100%"
		height="100%"
		id="svg"
		viewBox="0 0 1440 500"
		xmlns="http://www.w3.org/2000/svg"
		class="transition duration-300 ease-in-out delay-150"
		><path
			d="M 0,500 C 0,500 0,125 0,125 C 64.56461708394701,139.9692562592047 129.12923416789403,154.93851251840942 188,154 C 246.87076583210597,153.06148748159058 300.047680412371,136.215206185567 364,131 C 427.952319587629,125.78479381443299 502.6800441826216,132.20066273932252 555,125 C 607.3199558173784,117.79933726067748 637.2321428571429,96.98214285714286 688,100 C 738.7678571428571,103.01785714285714 810.391384388807,129.87076583210603 873,150 C 935.608615611193,170.12923416789397 989.2023195876288,183.534793814433 1055,170 C 1120.7976804123712,156.465206185567 1198.7993372606777,115.990058910162 1265,104 C 1331.2006627393223,92.009941089838 1385.600331369661,108.50497054491899 1440,125 C 1440,125 1440,500 1440,500 Z"
			stroke="none"
			stroke-width="0"
			class="fill-primary-700 transition-all duration-300 ease-in-out delay-150 path-0"
			transform="rotate(-180 720 250)"
		/><path
			d="M 0,500 C 0,500 0,250 0,250 C 71.1181885125184,231.04473490427097 142.2363770250368,212.08946980854196 200,210 C 257.7636229749632,207.91053019145804 302.17268041237116,222.68685567010309 361,232 C 419.82731958762884,241.31314432989691 493.0729013254787,245.16310751104572 549,260 C 604.9270986745213,274.8368924889543 643.5357142857143,300.6607142857143 695,296 C 746.4642857142857,291.3392857142857 810.7842415316642,256.19403534609717 875,238 C 939.2157584683358,219.8059646539028 1003.3273195876288,218.56314432989691 1069,225 C 1134.6726804123712,231.43685567010309 1201.9064801178204,245.55338733431518 1264,251 C 1326.0935198821796,256.4466126656848 1383.04675994109,253.2233063328424 1440,250 C 1440,250 1440,500 1440,500 Z"
			stroke="none"
			stroke-width="0"
			class="fill-primary-800 transition-all duration-300 ease-in-out delay-150 path-1"
			transform="rotate(-180 720 250)"
		/><path
			d="M 0,500 C 0,500 0,375 0,375 C 68.50239322533136,407.27043446244477 137.00478645066272,439.5408689248896 190,420 C 242.99521354933728,400.4591310751104 280.48324742268045,329.10695876288656 341,330 C 401.51675257731955,330.89304123711344 485.06222385861554,404.0312960235641 557,420 C 628.9377761413845,435.9687039764359 689.2678571428571,394.76785714285717 744,377 C 798.7321428571429,359.23214285714283 847.8663475699558,364.89727540500735 893,368 C 938.1336524300442,371.10272459499265 979.2667525773195,371.6430412371134 1050,373 C 1120.7332474226805,374.3569587628866 1221.066642120766,376.530559646539 1291,377 C 1360.933357879234,377.469440353461 1400.466678939617,376.2347201767305 1440,375 C 1440,375 1440,500 1440,500 Z"
			stroke="none"
			stroke-width="0"
			class="fill-primary-900 transition-all duration-300 ease-in-out delay-150 path-2"
			transform="rotate(-180 720 250)"
		/></svg
	>
	<div class=" container flex  relative p-20 items-start justify-center">
		<h1 class="heading-1 mb-10">
			<span class="gradient-text"> Timeline </span> & Events
		</h1>
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
