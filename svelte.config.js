import path from 'path';
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
	'static/img/projects'
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			preserve: ['module'],
			postcss: true
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
							children: [{ type: 'text', value: '#' }]
						}
					}
				]
			]
		})
	],
	extensions,
	kit: {
		adapter: adapter(),
		files: { serviceWorker: 'src/sw' },
		serviceWorker: { register: true },
		vite: {
			server: { fs: { allow } },
			resolve: {
				alias: {
					$static: path.resolve('./static'),
					$data: path.resolve('./src/lib/data'),
					$types: path.resolve('./src/lib/types'),
					$store: path.resolve('./src/lib/_store'),
					$actions: path.resolve('./src/lib/actions'),
					$transitions: path.resolve('./src/lib/transitions'),
					$layout: path.resolve('./src/lib/layout')
				}
			}
		}
	}
};

export default config;
