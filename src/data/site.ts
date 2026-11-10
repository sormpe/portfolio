// Content is grounded in Peter's CV (2026-09-23). Client work is described by
// domain only: no client names, product names, or identifying details.

export const site = {
	name: 'Peter Sormunen',
	title: 'Senior Full-Stack Developer',
	description:
		'Full-stack developer in Espoo, Finland. React and TypeScript, with Node.js or Java and Spring Boot on the backend. Ten years of production web work, from greenfield systems to modernising legacy codebases.',
	email: 'peter.sormunen@outlook.com',
	location: 'Espoo, Finland',
	timezone: 'Finnish time (EET/EEST)',
	availability: 'Open to consulting engagements and new full-\u2060time roles',
	linkedin: 'https://www.linkedin.com/in/petersormunen',
	github: 'https://github.com/sormpe',
	statement: 'Frontend, backend and cloud, on new\u00a0systems and the ones you already run.',
};

export const experience = [
	{
		company: 'Crowd Collective',
		title: 'Senior Consultant',
		period: '2021–present',
		projects: ['matching', 'university', 'high-traffic', 'pricing'],
		summary:
			'Consultant across client engagements in higher education, high-traffic consumer web, and B2B pricing, alongside internal tooling. My work has ranged from hands-on development to helping teams plan and deliver their work.',
	},
	{
		company: 'Aalto University',
		title: 'Software Developer, Research Assistant, Teaching Assistant',
		period: '2020–2021',
		projects: ['education'],
		summary:
			'At Aalto, I combined software development, research, and teaching assistant work. I supported an introductory web programming course and developed a learning platform for my M.Sc. thesis.',
	},
	{
		company: 'Envault Corporation',
		title: 'Software Developer',
		period: '2016–2019',
		projects: [],
		summary:
			'Built frontend and React Native features across security products, refactoring existing code, supporting an Android app in production, maintaining WordPress sites, and carrying out black-box testing.',
	},
];

export const education = [
	{
		school: 'University of Helsinki',
		degree: 'Bachelor’s Programme in Mathematical Sciences',
		period: '2026–present',
	},
	{
		school: 'Aalto University',
		degree: 'Master of Science, Computer Science',
		period: '2018–2020',
	},
	{
		school: 'Aalto University',
		degree: 'Bachelor of Science, Computer Science',
		period: '2015–2018',
	},
	{
		school: 'Saimaa Vocational College Sampo',
		degree: 'Vocational Qualification in ICT',
		period: '2012–2015',
	},
];

export const layers = [
	{
		id: 'frontend',
		name: 'Frontend',
		intro: 'Interfaces people use every day, and the codebases behind them.',
		order: ['pricing', 'university', 'high-traffic', 'education'],
	},
	{
		id: 'backend',
		name: 'Backend',
		intro: 'Services, integrations, and the business rules they carry.',
		order: ['pricing', 'matching', 'education', 'university'],
	},
	{
		id: 'cloud',
		name: 'Cloud',
		intro: 'Hosting, infrastructure, and the code that deploys it.',
		order: ['high-traffic', 'matching', 'pricing'],
	},
] as const;

export type LayerId = (typeof layers)[number]['id'];

// Newest first: this order is the By date view. Each layer sets its own order above.
export const projects: {
	id: string;
	name: string;
	category: string;
	years: string;
	role: string;
	summary: string;
	stack: string[];
	work: Partial<Record<LayerId, string[]>>;
}[] = [
	{
		id: 'matching',
		name: 'Consultant Matching Tool',
		category: 'Internal · Crowd Collective',
		years: '2026–present',
		role: 'Full-stack AI developer',
		summary: 'An LLM-based tool that matches consultants to new job listings.',
		stack: ['Python', 'AWS', 'LLM'],
		work: {
			backend: [
				'Built a Python service that collects job listings from several sources and uses an LLM to rank the best-fitting consultants.',
				'Built spec-first: written specifications and implementation plans guide AI-agent-based development.',
			],
			cloud: ['Runs on AWS and delivers its results automatically to the team’s chat.'],
		},
	},
	{
		id: 'university',
		name: 'University Information Services',
		category: 'Client work',
		years: '2024–2026',
		role: 'Full-stack developer',
		summary: 'Full-stack work across several web services for a large university.',
		stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
		work: {
			frontend: [
				'Added TypeScript to older JavaScript codebases and moved component tests from Enzyme to React Testing Library, without pausing feature work.',
				'Worked on major features, including a new course search.',
				'Improved accessibility with the team’s specialists and supported design system adoption across services.',
			],
			backend: ['Worked on backend services in Java and Spring Boot, with PostgreSQL.'],
		},
	},
	{
		id: 'high-traffic',
		name: 'High-Traffic Consumer Platform',
		category: 'Client work',
		years: '2024',
		role: 'Frontend developer',
		summary: 'Frontend development for a high-traffic consumer web service.',
		stack: ['React', 'TypeScript', 'AWS'],
		work: {
			frontend: ['Delivered new features and fixed production issues on a high-traffic service.'],
			cloud: [
				'Designed and built a rate-limiting proxy on AWS Lambda, deployed with CDK, to cut automated traffic.',
				'Helped the cloud team adopt TypeScript for new CDK projects.',
			],
		},
	},
	{
		id: 'pricing',
		name: 'Pricing & Offer System',
		category: 'Client work',
		years: '2021–2023',
		role: 'Full-stack developer',
		summary: 'A greenfield internal pricing system that grew from price lists into offer generation.',
		stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
		work: {
			frontend: ['Built the React and TypeScript interface for creating customer price lists and, later, offers.'],
			backend: [
				'Joined on day one and took part in the key architecture decisions.',
				'Built and maintained integrations with the company’s ERP, the source for pricing and customer data.',
				'Worked through requirements with business stakeholders and turned their pricing rules into features.',
			],
			cloud: ['Worked with the system’s hosting on AWS and Heroku, using Docker.'],
		},
	},
	{
		id: 'education',
		name: 'Programming Education Platform',
		category: 'Research · Aalto University',
		years: '2020–2021',
		role: 'Developer and M.Sc. thesis author',
		summary: 'A learning platform for an introductory web programming course at Aalto.',
		stack: ['Gatsby', 'React', 'TypeScript', 'Node.js'],
		work: {
			frontend: [
				'Built the Gatsby and React platform around what course instructors needed, including tools for reusable code annotations.',
				'In use from the spring 2021 course, with positive feedback from users.',
			],
			backend: ['Connected several grading services and added LTI.'],
		},
	},
];

export const skills = [
	{ group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP'] },
	{ group: 'Frontend', items: ['React', 'Next.js', 'Gatsby', 'React Native'] },
	{ group: 'Backend & data', items: ['Node.js', 'Express', 'Spring Boot', 'Ruby on Rails', 'GraphQL', 'PostgreSQL', 'MongoDB', 'ElasticSearch'] },
	{ group: 'Testing', items: ['Playwright', 'Cypress', 'Vitest', 'React Testing Library'] },
	{ group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'OpenShift', 'Ansible', 'Sentry'] },
	{ group: 'AI-assisted development', items: ['Claude Code', 'GitHub Copilot', 'Spec-driven development', 'LLM integration'] },
	{ group: 'Ways of working', items: ['Scrum facilitation', 'Accessibility', 'Design systems'] },
];

export const spokenLanguages = ['Finnish (native)', 'English (professional)', 'Swedish (basic)'];
