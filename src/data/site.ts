// Content is grounded in Peter's CV (2026-09-23). Client work is described by
// domain only: no client names, product names, or identifying details.

export const site = {
	name: 'Peter Sormunen',
	title: 'Senior Full-Stack Developer',
	description:
		'Full-stack developer in Espoo, Finland. React and TypeScript, with Node.js or Java and Spring Boot on the backend. Ten years of production web work, from greenfield systems to modernising legacy codebases.',
	email: 'peter.sormunen@outlook.com',
	location: 'Espoo, Finland',
	timezone: 'UTC+2 (EET)',
	availability: 'Open to consulting engagements and new full-time roles',
	availabilityShort: 'Available for new work',
	linkedin: 'https://www.linkedin.com/in/petersormunen',
	github: 'https://github.com/sormpe',
	intro:
		'I help teams build new web applications and improve the ones they already have, from frontend to backend.',
};

export const highlights = [
	{ label: '10+ years', value: 'building for the web' },
	{ label: 'Full stack', value: 'frontend, backend, and cloud' },
	{ label: 'New and existing systems', value: 'from greenfield builds to modernisation' },
];

export const experience = [
	{
		company: 'Crowd Collective',
		title: 'Senior Consultant',
		period: '2021–present',
		logo: '/logos/cc-logo-black.svg',
		summary:
			'Consultant across client engagements in higher education, high-traffic consumer web, and B2B pricing, alongside internal tooling. My work has ranged from hands-on development to helping teams plan and deliver their work.',
		stack: 'React, TypeScript, Node.js, Java, Spring Boot, PostgreSQL, AWS',
	},
	{
		company: 'Aalto University',
		title: 'Software Developer, Research Assistant, Teaching Assistant',
		period: '2020–2021',
		logo: '/logos/aalto.svg',
		summary:
			'At Aalto, I combined software development, research, and teaching assistant work. I supported an introductory web programming course and developed a learning platform for my M.Sc. thesis.',
		stack: 'Gatsby, React, TypeScript, Node.js, MongoDB',
	},
	{
		company: 'Envault Corporation',
		title: 'Software Developer',
		period: '2016–2019',
		logo: null,
		summary:
			'Built frontend and React Native features across security products, refactoring existing code, supporting an Android app in production, maintaining WordPress sites, and carrying out black-box testing.',
		stack: 'JavaScript, React Native, PHP, WordPress, Ruby on Rails, PostgreSQL',
	},
];

export const education = [
	{
		school: 'University of Helsinki',
		degree: "Bachelor's Programme in Mathematical Sciences",
		period: '2026–present',
		logo: null,
		focus: 'Mathematics, economics, econometrics, and social science.',
	},
	{
		school: 'Aalto University',
		degree: 'Master of Science, Computer Science',
		period: '2018–2020',
		logo: '/logos/aalto.svg',
		focus: 'Study track in Web Technologies, Applications, and Science. Thesis on a learning platform for programming education.',
	},
	{
		school: 'Aalto University',
		degree: 'Bachelor of Science, Computer Science',
		period: '2015–2018',
		logo: '/logos/aalto.svg',
		focus: 'Major in Computer Science, minor in Information Networks.',
	},
	{
		school: 'Saimaa Vocational College Sampo',
		degree: 'Vocational Qualification in ICT',
		period: '2012–2015',
		logo: null,
		focus: 'Specialisation in software development, as a double degree with the Matriculation Examination.',
	},
];

export const projects = [
	{
		name: 'Consultant Matching Tool',
		category: 'Internal · Crowd Collective · 2026–',
		role: 'Full-stack AI developer',
		summary: 'An LLM-based tool that matches consultants to new job listings.',
		outcomes: [
			'Built spec-first: written specifications and implementation plans guide AI-agent-based development.',
		],
		stack: ['Python', 'AWS', 'LLM'],
	},
	{
		name: 'University Information Services',
		category: 'Client work · 2024–2026',
		role: 'Full-stack developer',
		summary: 'Full-stack work across several web services for a large university.',
		outcomes: [
			'Added TypeScript to older JavaScript codebases and moved component tests from Enzyme to React Testing Library, without pausing feature work.',
			'Worked on major features, including a new course search.',
			'Improved accessibility with the team’s specialists and supported design system adoption across services.',
		],
		stack: ['React', 'TypeScript', 'Java', 'Spring Boot'],
	},
	{
		name: 'High-Traffic Consumer Platform',
		category: 'Client work · 2024',
		role: 'Frontend developer',
		summary: 'Frontend development for a high-traffic consumer web service.',
		outcomes: [
			'Designed and built a rate-limiting proxy on AWS Lambda, deployed with CDK, to cut automated traffic.',
			'Helped the cloud team adopt TypeScript for new CDK projects.',
		],
		stack: ['React', 'TypeScript', 'AWS'],
	},
	{
		name: 'Pricing & Offer System',
		category: 'Client work · 2021–2023',
		role: 'Full-stack developer',
		summary: 'A greenfield internal pricing system that grew from price lists into offer generation.',
		outcomes: [
			'Joined on day one and took part in the key architecture decisions.',
			'Built and maintained integrations with the company’s ERP, the source for pricing and customer data.',
			'Worked through requirements with business stakeholders and turned their pricing rules into features.',
		],
		stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
	},
	{
		name: 'Programming Education Platform',
		category: 'Research · Aalto University · 2020–2021',
		role: 'Developer and M.Sc. thesis author',
		summary: 'A learning platform for an introductory web programming course at Aalto.',
		outcomes: [
			'Interviewed course instructors and built the platform around what they needed.',
			'Connected several grading services and added LTI, plus tooling for reusable code annotations.',
			'In use from the spring 2021 course, with positive feedback from users.',
		],
		stack: ['Gatsby', 'React', 'TypeScript', 'Node.js'],
	},
];

export const skills = [
	{ group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP'] },
	{ group: 'Frontend', items: ['React', 'Next.js', 'Gatsby', 'React Native'] },
	{ group: 'Backend & data', items: ['Node.js', 'Express', 'Spring Boot', 'GraphQL', 'PostgreSQL', 'MongoDB', 'ElasticSearch'] },
	{ group: 'Testing', items: ['Playwright', 'Cypress', 'Vitest', 'React Testing Library'] },
	{ group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'OpenShift', 'Ansible', 'Sentry'] },
	{ group: 'AI-assisted development', items: ['Claude Code', 'GitHub Copilot', 'Spec-driven development', 'LLM integration'] },
	{ group: 'Ways of working', items: ['Scrum facilitation', 'Accessibility', 'Design systems'] },
];
