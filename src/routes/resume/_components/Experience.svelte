<script>
  const experiences = [
    {
      from: 'dec 2021',
      to: 'present  ',
      position: 'Independant Freelancer',
      company: 'upwork',
      tasks: [
        'wored with various  clients arround the world',
        '+11 projects',
        'Top Rated freelancer, maintaining 100% JSS',
      ],
    },
    {
      from: 'mai 2019',
      to: 'dec 2021',
      position: 'Princiapl Engineer',
      company: 'redfabriq',
      tasks: [
        'Worked with a team of talented people in an Agile environement on several projects.',
        'contributed in implementing payment solution using stripe, iot webhooks and APIs using azure C#/iotHub.',
        'Communicated with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      from: 'mai 2017',
      to: 'apr 2019',
      position: 'Fullstack Developer',
      company: 'cnr.dz',
      tasks: [
        'Developed  corroboration web application used by 58 agencies to automate documents validation process.',
        'Developed technical architecture of cis.cnr.dz that is used to consult pension and allocations online.',
        "Optimized data access time by indexing a 170 Gb relational database into an elastic search cluster and developed it's interal frontal application.",
      ],
    },
    {
      from: 'mai 2016',
      to: 'jun 2017',
      position: 'Software Developer',
      company: 'anem.dz',
      tasks: [
        'Maintained internal sharepoint portal used accross all departments.',
        'Architectured and developed  wassitonline.anem.dz, a job search portal. ',
        'Developed and Documented REST Api for client applications.',
      ],
    },
  ];
</script>

<section class="flex flex-col items-start ">
  <h1 class="pb-2  font-semibold tracking-wider uppercase text-primary-500">Relevant Experience</h1>
  {#each experiences as e, index}
    <div class={`flex flex-sol dark:text-slate-400 text-slate-600 ${index === 0 ? '' : 'pt-4'}`}>
      <div class="flex flex-col md:flex-row items-start space-x-6">
        <strong class="whitespace-pre dark:text-slate-200 text-slate-700">
          {e.from}-{e.to}
        </strong>
        <div class="flex flex-col">
          <strong>
            {e.position} @{' '}
            <span class="text-slate-400">{e.company}</span>
          </strong>

          <ul>
            {#each e.tasks as t}
              <li class="max-w-md text-sm text-justifyn">
                ▹ {t}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/each}
</section>
