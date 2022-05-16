import type { Project } from '$lib/types/project';

export const featuredProjects: Project[] = [
  {
    title: 'LCS VMS',
    shortDescription: 'Visitor Management System',
    longDescription:
      'VMS is a solution  that tracks visitors entering your office replacing  the conventional visitor record with a medium that is more accessible. Itgives you access to monitor the visitor that enters your buildings, campuses, or other facilities. It is possible because the visitors have to log-in and use ID badges if they wish to enter certain places so the management can keep an eye on them.',
    thumbnail: '/img/projects/vms.png',
    url: 'https://lcs-visitor-kiosk.herokuapp.com/',
    githubUrl: '',
    tags: [
      'Asp.net_core',
      'CQRS',
      'Mediatr',
      'XUnit',
      'QRCoder',
      'EFCore',
      'Heroku',
      'Tailwind',
      'Angular',
      'NgxTranslate',
    ],
  },
  {
    title: 'DZSCHOOLS',
    shortDescription: 'School Management System',
    longDescription: `School management system developed in C# (WPF) that allows to accomplish and automate many tasks such as reports generation, scheduling, manage teachers and students all with an integrated role-based access policy.
		The application is very flexible, almost everything can be configured starting from school settings (name, year format(trimester/semester)) to the average calculation formulas for each module.`,
    thumbnail: '/img/projects/dzschools.png',
    url: 'https://dzschools.com',
    githubUrl: '',
    tags: [
      'CSharp',
      'WPF',
      'MVVM',
      'EntityFramework',
      'SQLite',
      'DevExpress',
      'InnoSetup',
      'CrystalReports',
    ],
  },
  {
    title: 'Corroboration',
    shortDescription: 'Document Sharing application for cnr.dz',
    longDescription: `The application offers a possibility corroborate between the 51 CNR agencies located in the states all around the country. The purpose is to verify and validate the insurer career periods in other states because for now, a decentralized solution is used.
		You can think of it as an emailing service but with business constraint and workflow validation.
		The application offers detailed insight of the number of requests sent and received by each agency and their status (pending, resolved, ...etc.). This allow the administration to take the proper actions and decisions.
		More the 50K request have been sent via the application. in which more then 100K attachement that occupies arround 61Go have been uploaded to the server.
		The web application is for internal use by the CNR agencies.`,
    thumbnail: 'img/projects/corroboration.png',
    url: '',
    githubUrl: '',
    tags: ['CSharp', 'AngularJS', 'Asp.net_core', 'SqlServer', 'EFCore'],
  },
  // {
  // 	title: '',
  // 	shortDescription: '',
  // 	longDescription: ``,
  // 	thumbnail: '',
  // 	url: 'https://something.com',
  // 	githubUrl: 'https://something.com',
  // 	tags: []
  // }
];

export default featuredProjects;
