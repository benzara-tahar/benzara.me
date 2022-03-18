export const foo = (node: HTMLElement, { sommeParam = 0 }) => {
	// the node has been mounted in the DOM

	return {
		destroy: () => {
			// the node has been removed from the DOM
		}
	};
};
