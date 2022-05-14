export const useInlineSvg = (node: HTMLElement) => {
	if (node.nodeName.toLowerCase() !== 'img')
		throw new Error('useInlineSvg: node is not an instance of HTMLImageElement');
	// the node has been mounted in the DOM
	const image = node as HTMLImageElement;
	fetch(image.src)
		.then((res) => res.text())
		.then((data) => {
			const parser = new DOMParser();
			const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

			if (image.id) svg.id = image.id;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-expect-error
			if (image.className) svg.classList = image.classList;

			image.parentNode.replaceChild(svg, image);
		})
		.catch((error) => console.error(error));

	return {
		destroy: () => {
			// the node has been removed from the DOM
		}
	};
};
