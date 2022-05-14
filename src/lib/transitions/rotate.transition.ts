import { expoOut } from 'svelte/easing';

export function rotate(node, { duration, deg }) {
	return {
		duration,
		css: (t) => {
			const eased = expoOut(t);

			return `
                transform: rotate(${eased * deg}deg);
                `;
		}
	};
}
