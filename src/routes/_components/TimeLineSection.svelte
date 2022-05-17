<script lang="ts">
  import type { SafeAny } from '$lib/models/types/safeAny';

  import { onMount } from 'svelte';

  import { inview } from 'svelte-inview';
  interface TimeLineItem {
    title: string;
    htmlContent: string;
    date: Date;
    location: string;
  }

  let sectionNodes: NodeListOf<HTMLDivElement>;

  // onMount(() => {
  //   sectionNodes = document.querySelectorAll('.section-node');
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // });

  function handleScroll(event: SafeAny) {
    sectionNodes.forEach((node) => {
      const { height, top } = node.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      console.log({ height, screenHeight, top });
      // console.log(event);
      // console.log('----------');

      const isInView = ((top % screenHeight) + height) / screenHeight;
      console.log(isInView);

      // if (rect.top < window.innerHeight) {
      //   node.classList.add('inview');
      // } else {
      //   node.classList.remove('inview');
      // }
    });
  }

  let sections: (TimeLineItem & { inView?: boolean })[] = [
    {
      title: 'BORN',
      htmlContent: 'I came to this racing world screeming, hello world!',
      date: new Date('1992-02-08'),
      location: 'Algiers',
    },
    {
      title: 'HISTORY',
      htmlContent: 'Won second prize of Imagine Cup Competetion',
      date: new Date('2013-09-11'),
      location: 'Algiers',
    },
    {
      title: 'EDUCATION (Hightschool)',
      htmlContent: 'After 3 years at hight school. I obtained my Bachelor Degree',
      date: new Date('2010-12-01'),
      location: 'Algiers, Ain Defla',
    },
    {
      title: 'EDUCATION (University)',
      htmlContent:
        'Graduated after 5 amazing years at university, Got my Master Degree in Computer Science',
      date: new Date('2015-06-24'),
      location: 'Algiers, ESI',
    },
    {
      title: 'EXPERIENCES(Cnr)',
      htmlContent: 'I worked as a Fullstack developer at Cnr',
      date: new Date('2016-05-01'),
      location: 'Didouche mourad, Algiers',
    },

    {
      title: 'EXPERIENCES(RedFabriq)',
      htmlContent: 'I worked as a Fullstack developer at RedFabriq',
      date: new Date('2018-12-01'),
      location: 'Kouba, Algiers',
    },

    {
      title: 'EXPERIENCES(Upwork)',
      htmlContent: 'I said it is time to stop working for others, so i quit my job',
      date: new Date('2021-11-18'),
      location: 'Algiers',
    },
    {
      title: 'NOW',
      htmlContent: 'I am currently jobless',
      date: new Date('2022-12-01'),
      location: 'ALGIERS',
    },
  ];

  function handleInviewChange({ detail }: CustomEvent<ObserverEventDetails>) {
    const { node, inView, scrollDirection } = detail;
    const header = node.getAttribute('data-headerName');

    if (inView) {
      if (scrollDirection == 'up') {
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].title == header) {
            sections[i].inView = true;
            // return;
          } else {
            sections[i].inView = true;
          }
        }
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].title == header) {
            sections[i].inView = true;
            // return;
          } else {
            sections[i].inView = false;
          }
        }
      }

      sections = sections;
    }

    console.table({ inView, scrollDirection, header });
  }
</script>

<div class="w-full elative md:-mt-40 -mt-20">
  <section class="container relative overflow-visible">
    <div class="-mt-20 mb-10">
      <h1 class="heading-1  top-10 sticky">
        <span class="gradient-text"> Timeline </span> & Events
      </h1>
    </div>

    <div class="h-[{sections.length * 100}vh] relative">
      <div
        class="flex md:flex-col md:items-start items-center flex-wrap flex-row   gap-4 sticky md:top-44 top-5  overflow-hidden z-10 bg-slate-900/50 rounded-md md:p-10 p-4 w-fit"
      >
        {#each sections as { date, inView }, index}
          <span
            class="transition-all duration-500  font-bold {inView
              ? 'gradient-text text-4xl'
              : 'text-slate-500 text-lg'}"
            >{index === sections.length - 1 ? 'Now' : date.getFullYear()}</span
          >
        {/each}
      </div>
      <!-- timeline -->

      {#each sections as { title, htmlContent, date, location, inView }, index}
        <!-- style="margin-top: -{(headers.length + 1) * 3.25}rem;" -->
        <section
          class="flex flex-col items-center justify-center min-h-[50vh]  text-white py-20 section-node"
        >
          <p
            data-headerName={title}
            on:change={handleInviewChange}
            use:inview={{ rootMargin: '-50%' }}
            class=" text-2xl sm:text-4xl  max-w-md leading-relaxed tracking-wide text-center font-semibold transition-all duration-500
            {inView ? 'text-white-500' : 'text-slate-600 opacity-50'}"
          >
            <span>
              {@html htmlContent}
            </span>

            <br />
          </p>
          <div
            class="flex items-center justify-center gap-2 my-4  transition-all {inView
              ? 'text-slate-200 '
              : 'text-slate-600'}"
          >
            <span> {date.toLocaleDateString()}</span> -
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span> {location}</span>
          </div>
        </section>
      {/each}
      <!-- <div class="absolute inset-0">

      </div> -->
    </div>
  </section>
</div>
