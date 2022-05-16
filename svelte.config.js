import { resolve } from 'path';
import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.svelte', '.md'];
// so ugly, find a good way to fix this once for good (make all the static directory serviable)
const allow = [
  'static/audio',
  'static/fonts',
  'static/techs',
  'static/svg',
  'static/img',
  'static/img/projects',
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  //  https://github.com/sveltejs/svelte-preprocess
  preprocess: [
    sveltePreprocess({
      preserve: ['module'],
      postcss: true,
    }),
    mdsvex({
      extensions: extensions,
      rehypePlugins: [
        rehypeExternalLinks, // Adds 'target' and 'rel' to external links
        rehypeSlug, // Adds 'id' attributes to Headings (h1,h2,etc)
        [
          rehypeAutolinkHeadings,
          {
            // Adds hyperlinks to the headings, requires rehypeSlug
            behavior: 'append',
            content: {
              type: 'element',
              tagName: 'span',
              properties: { className: ['heading-link'] },
              children: [{ type: 'text', value: '#' }],
            },
          },
        ],
      ],
    }),
  ],
  extensions,
  kit: {
    adapter: adapter(),
    // files: { serviceWorker: 'src/sw' },
    // serviceWorker: { register: true },
    vite: {
      server: { fs: { allow } },
      resolve: {
        alias: {
          $static: resolve('.', './static'),
          $components: resolve('.', './src/lib/shared/components'),
          $actions: resolve('.', './src/lib/shared/actions'),
          $transitions: resolve('.', './src/lib/shared/transitions'),
          $layouts: resolve('.', './src/lib/shared/layouts'),
          $store: resolve('.', './src/lib/store'),
          $models: resolve('.', './src/lib/models'),
          $data: resolve('.', './src/lib/data'),
          $core: resolve('.', './src/lib/core'),
          $utils: resolve('.', './src/lib/utils'),
          $environment: resolve('.', './src/environment'),
        },
      },
    },
  },
};

export default config;
