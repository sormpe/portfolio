import {
	siDocker,
	siGraphql,
	siNextdotjs,
	siNodedotjs,
	siOpenjdk,
	siPostgresql,
	siPython,
	siReact,
	siSpringboot,
	siTypescript,
} from 'simple-icons';

// The stack shown in the band and the background logo fields.
// AWS and Playwright publish no free logo, so they appear as names only.
export const stack: { name: string; path?: string }[] = [
	{ name: 'React', path: siReact.path },
	{ name: 'TypeScript', path: siTypescript.path },
	{ name: 'Node.js', path: siNodedotjs.path },
	{ name: 'Java', path: siOpenjdk.path },
	{ name: 'Spring Boot', path: siSpringboot.path },
	{ name: 'PostgreSQL', path: siPostgresql.path },
	{ name: 'AWS' },
	{ name: 'Docker', path: siDocker.path },
	{ name: 'Python', path: siPython.path },
	{ name: 'Next.js', path: siNextdotjs.path },
	{ name: 'GraphQL', path: siGraphql.path },
	{ name: 'Playwright' },
];

export const logoPaths = stack.flatMap((item) => (item.path ? [item.path] : []));
