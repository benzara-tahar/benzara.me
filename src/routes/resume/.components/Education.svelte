<script>
	const educations = [
		{
			fromto: '2016 - 2018',
			school: 'Ahmed Zahana',
			degree: 'Bachelor Degree',
			location: 'Ain Defla, Algeria'
		},

		{
			fromto: '2010 - 2015',
			school: 'Higher School Of Computer Schience',
			degree: 'Master Degree',
			location: 'Algiers, Algeria'
		}
	];
</script>

<section class="flex flex-col items-start text-sm">
	<h1 class="pb-2 text-lg font-semibold tracking-wider uppercase text-primary-500">Education</h1>
	{#each educations as edu}
		<div class="flex flex-col dark:text-slate-400 text-slate-600">
			<div class="flex flex-row items-start space-x-6">
				<strong class="min-w-96">{edu.fromto}</strong>
				<div class="flex flex-col">
					<strong>
						{edu.degree} | {edu.school}
					</strong>
					<span class="dark:text-slate-400 text-slate-600">{edu.location}</span>
				</div>
			</div>
		</div>
	{/each}
</section>
