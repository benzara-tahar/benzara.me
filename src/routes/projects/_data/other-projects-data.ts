import type { Project } from '$lib/types/project';

export const otherProjects: Project[] = [
	{
		title: 'Awesome Portfolios',
		shortDescription:
			'A curated list of Awesome Developer Portfolio Websites For your inspiration, used it to search for inspiration while building my own portfolio.',

		thumbnail: '/img/projects/awesome-portfolios.png',
		url: 'https://awesome-portfolios.vercel.app',
		githubUrl: 'https://github.com/benzara-tahar/awesome-portfolios',
		tags: ['SvelteKit', 'Tailwindcss', 'Vercel']
	},
	{
		title: 'Gomoku Narabe',
		shortDescription:
			'Implementation of the famous Japanse game <a href="https://simple.wikipedia.org/wiki/Gomoku_Narabe_Renju" target="_blank"> <strong> Gomoku Narabe Renju</strong></a> in C# | WPF',
		thumbnail: '/img/projects/gomoku-narabe-renju.png',
		url: '',
		githubUrl: 'https://github.com/benzara-tahar/gomoku-narabe-renju',
		tags: ['C#', 'XAML', 'WPF', 'Alhpa_beta_pruning ', 'VS_Studio', 'Blend_for_Visual_Studio']
	},
	{
		title: 'Shuffle the Puzle',
		shortDescription:
			'A puzzle game that implements basic search algorithms ( Best First Search|  Depth First Search|  Breadth First Search|  Bidirectional Search)',

		thumbnail: '/img/projects/puzzle-solver.png',
		url: '',
		githubUrl: 'https://github.com/benzara-tahar/puzzle-solver',
		tags: ['C#', 'XAML', 'WPF', 'Alhpa_beta_pruning ', 'VS_Studio', 'Blend_for_Visual_Studio']
	},
	{
		title: 'iTypeGame',
		shortDescription:
			'A fun game that lets you improve your typing skills and English|French vocabulary (training vs challenge mode, integrated virtual keyboard',

		thumbnail: '/img/projects/itype-game.png',
		url: '',
		githubUrl: 'https://github.com/benzara-tahar/itype-game',
		tags: ['C#', 'XAML', 'WPF', 'VS_Studio', 'Blend_for_Visual_Studio']
	},
	{
		title: 'ANEM NAME',
		shortDescription:
			'A simple application to browse Anem NAMES (Acronym for Nomenclature Algérienne des Métiers et de Emplois which stands for Algerian Nomenclature of Trades and Jobs) [MVVM|WPF|MD]',

		thumbnail: '/img/projects/anem-name.png',
		url: '',
		githubUrl: 'https://github.com/benzara-tahar/anem-NAME',
		tags: ['C#', 'XAML', 'WPF', 'VS_Studio', 'Blend_for_Visual_Studio']
	},

	{
		title: 'Orthophonie',
		shortDescription:
			'Avolunteer project done to help Orthophonist , assess, diagnose, and treat speech, language, social communication, cognitive-communication, voice, fluency, and swallowing disorders in children and adults.',

		thumbnail: '/img/projects/orthophonie.png',
		url: '',
		githubUrl: 'https://github.com/benzara-tahar/orthophonie',
		tags: [
			'C#',
			'XAML',
			'SQLite',
			'EntityFramework',
			'InnoSetup',
			'WPF',
			'VS_Studio',
			'Blend_for_Visual_Studio'
		]
	},
	{
		title: 'Elbaraka Association website',
		shortDescription: `A wordpress website to present Albaraka association and their activities.
			<strong>EDIT:</strong> the website might not be accessible via the link since the client didn't renew the hosting (expired in 18 spet 2018). see the attached images bellow for more details.`,

		thumbnail: '/img/projects/elbarakadz.png',
		url: 'https://elbarakahdz.com/',
		tags: [
			'C#',
			'XAML',
			'SQLite',
			'EntityFramework',
			'InnoSetup',
			'WPF',
			'VS_Studio',
			'Blend_for_Visual_Studio'
		]
	}
];

export default otherProjects;
