<script lang="ts">
	import { each } from 'svelte/internal';
	import placeholderImage from '$static/img/user.png';

	let testimonials = [
		{
			employer: 'M.Udit',
			position: 'CEO @ Boolean Solutions',
			photo: '',
			text: 'It was a great experience working with Benzara. He was able to deliver quality work in a short span of time. He was always ready to help with solutions in mind and had a good understanding of best practices in the industry.'
		},
		{
			employer: 'A.Tran',
			position: 'CEO @ RIVERGON',
			photo: '',
			text: `Benzara has an in-depth knowledge of Angular and web development techniques. He earned my trust immediately.
Benzara communicated his plans and progress on a regular basis. He exceeded all mileslates. Additionally, Benzara was flexible and accommodating to requirement and schedule changes.
`
		},
		{
			employer: 'M.Joarder',
			position: 'Solo Employer',
			photo:
				'https://www.upwork.com/profile-portraits/c16qFmma3n8B_iR6tj436xZQZHMtA1qGojztRhbwNuOXFZ_OV4KKNj10UsCELdtNVl',
			text: `Benzara is an excellent person and he is the best I met in upwork, not only has he done the job as I asked, but he has improved it and has delivered some extra arrangements. Super professional, I deliver the work very quickly, and he has given me some tips to consider for free.
I will hire him again in my future jobs.`
		}
	];
</script>

<main class="container py-8 min-h-screen">
	<h1 class="heading-1 mb-8">
		Some <span class="gradient-text"> happy</span> clients I worked with
	</h1>

	<div class="lg:flex lg:justify-center lg:gap-x-10">
		{#each testimonials as testimonial}
			<div class="max-w-lg p-4   rounded-md shadow-md dark:shadow-current">
				<div class="mb-2">
					<p class="mb-2  text-slate-500 dark:text-slate-400 text-justify">{testimonial.text}</p>
					<div class="flex flex-col items-center justify-center">
						<div
							class="w-12 h-12 overflow-hidden bg-slate-100 border-2 border-slate-100 rounded-full "
						>
							<img
								src={testimonial.photo || placeholderImage}
								alt="img"
								class="object-cover object-center w-full h-full"
							/>
						</div>
						<h5 class="font-bold text-slate-500">{testimonial.employer}</h5>
						<p class="text-sm text-slate-400">{testimonial.position || ''}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
