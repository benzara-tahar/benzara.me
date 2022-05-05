import type { Skill } from '$lib/types/skill';

// todo! better way to handle assets imports using plugins
import microservicesSvg from '$static/techs/microservices.png';
import rabbitmqSvg from '$static/techs/rabbitmq.png';
import cqrsSvg from '$static/techs/cqrs.png';
import cleanArchitectureSvg from '$static/techs/clean-architecture.png';

import cypressSvg from '$static/techs/cypress.png';
import jestSvg from '$static/techs/jest.png';
import moqSvg from '$static/techs/moq.png';
import auth0Svg from '$static/techs/auth0.png';
import identityServerSvg from '$static/techs/is4.png';
import passportJsSvg from '$static/techs/passportjs.png';
import angularSvg from '$static/techs/angular.png';
import svelteSvg from '$static/techs/svelte.png';
import sassSvg from '$static/techs/sass.png';
import javascriptSvg from '$static/techs/javascript.png';
import typescriptSvg from '$static/techs/typescript.png';
import tailwindSvg from '$static/techs/tailwind.png';
import aspnetcoreSvg from '$static/techs/asp.png';
import nestjsSvg from '$static/techs/nestjs.png';
import csharpSvg from '$static/techs/csharp.png';
import gitlabSvg from '$static/techs/gitlab.png';
import dockerSvg from '$static/techs/docker.png';
import githubSvg from '$static/techs/github.png';
import azureSvg from '$static/techs/azure.png';
import jiraSvg from '$static/techs/jira.png';
import clickupSvg from '$static/techs/clickup.png';
import agileSvg from '$static/techs/agile.png';

import sqliteSvg from '$static/techs/sqlite.png';
import firebaseSvg from '$static/techs/firebase.png';
import mysqlSvg from '$static/techs/mysql.png';
import mongodbSvg from '$static/techs/mongodb.png';
import restapiSvg from '$static/techs/rest.png';

export const skills: Skill[] = [
	{
		name: 'Microservices',
		image: microservicesSvg,
		tags: 'scallability'
	},
	{
		name: 'Rabbitmq',
		image: rabbitmqSvg,
		tags: 'scallability'
	},
	{
		name: 'CQRS',
		image: cqrsSvg,
		tags: 'scallability'
	},
	{
		name: 'CleanArchitecture',
		image: cleanArchitectureSvg,
		tags: 'scallability'
	},
	// let qualitySkills:
	{
		name: 'Xunit',
		tags: 'quality'
	},
	{
		name: 'Cypress',
		image: cypressSvg,
		tags: 'quality'
	},
	{
		name: 'Jest',
		image: jestSvg,
		tags: 'quality'
	},
	{
		name: 'Moq',
		image: moqSvg,
		tags: 'quality'
	},
	// let secureSkills: Auth0 identity server passportJs

	{
		name: 'Auth0',
		image: auth0Svg,
		tags: 'security'
	},
	{
		name: 'IdentityServer',
		image: identityServerSvg,
		tags: 'security'
	},
	{
		name: 'PassportJs',
		image: passportJsSvg,
		tags: 'security'
	},

	{
		name: 'Angular',
		image: angularSvg,
		tags: 'frontend'
	},
	{
		name: 'Svelte(kit)',
		image: svelteSvg,
		tags: 'frontend'
	},
	{
		name: 'SASS',
		image: sassSvg,
		tags: 'frontend'
	},
	{
		name: 'Javascript',
		image: javascriptSvg,
		tags: 'frontend,backend'
	},

	{
		name: 'Typescript',
		image: typescriptSvg,
		tags: 'frontend,backend'
	},
	{
		name: 'Tailwind',
		image: tailwindSvg,
		tags: 'frontend'
	},

	{
		name: 'Asp.net Core',
		image: aspnetcoreSvg,
		tags: 'backend'
	},
	{
		name: 'Nestjs',
		image: nestjsSvg,
		tags: 'backend'
	},
	{
		name: 'C#',
		image: csharpSvg,
		tags: 'backend'
	},
	{
		name: 'Gitlab',
		image: gitlabSvg,
		tags: 'devops'
	},
	{
		name: 'Docker',
		image: dockerSvg,
		tags: 'devops,scallable'
	},
	{
		name: 'Github',
		image: githubSvg,
		tags: 'devops'
	},
	{
		name: 'Azure',
		image: azureSvg,
		tags: 'devops'
	},
	{
		name: 'Jira',
		image: jiraSvg,
		tags: 'team'
	},
	{
		name: 'Clickup',
		image: clickupSvg,
		tags: 'team'
	},
	{
		name: 'Agile',
		image: agileSvg,
		tags: 'team'
	},

	{
		name: 'SQLite',
		image: sqliteSvg,
		tags: 'backend'
	},
	{
		name: 'Firebase',
		image: firebaseSvg,
		tags: 'backend'
	},
	{
		name: 'MySQL',
		image: mysqlSvg,
		tags: 'backend'
	},
	{
		name: 'MongoDB',
		image: mongodbSvg,
		tags: 'backend'
	},
	{
		name: 'RestApi',
		image: restapiSvg,
		tags: 'backend'
	}
];
