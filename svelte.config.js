import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
// import autoprefixer from 'autoprefixer';
// import cssnano from 'cssnano';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import tailwind from 'tailwindcss';
const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			preserve: ['module'],
			postcss: true
			// postcss: {
			// plugins: [tailwind, autoprefixer, cssnano]
			// }
			// scss: {
			// 	prependData: '@use "src/styles/variables.scss" as *;'
			// }
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

		vite: {
			// css: {
			// 	preprocessorOptions: {
			// 		scss: {
			// 			additionalData: '@use "src/styles/variables.scss" as *;'
			// 		}
			// 	}
			// },
			server: {
				fs: {
					allow: ['static/audio', 'static/fonts', 'static/techs', 'static/svg']
				}
			},
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
