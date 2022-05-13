export type TypewriterOptions = {
	delay: number;
	speed?: number;
	duration?: number;
};
export function typewriter(node: HTMLElement, { delay = 0, speed, duration }: TypewriterOptions) {
	const textNodes = getAllTextNodes(node);
	if (!textNodes.length) {
		throw new Error(`This transition only works on elements with text nodes`);
	}

	if (speed && duration) {
		throw new Error(`Specify either speed or duration, not both`);
	}
	let totalLength = 0;
	const ranges = textNodes.map((textNode) => {
		const range = [totalLength, totalLength + textNode.textContent.length];
		totalLength += textNode.textContent.length;
		const text = textNode.textContent;
		textNode.textContent = '';
		return { textNode, range, text };
	});

	let currentRangeIndex = 0;
	function getCurrentRange(i: number) {
		while (ranges[currentRangeIndex].range[1] < i && currentRangeIndex < ranges.length) {
			const { textNode, text } = ranges[currentRangeIndex];
			textNode.textContent = text; // finish typing up the last node
			currentRangeIndex++;
		}
		return ranges[currentRangeIndex];
	}
	if (speed) {
		// if speed is specified, calculate the duration
		duration = totalLength * speed;
	}
	// otherwise use the provided duration

	return {
		delay,
		duration,
		tick: (t) => {
			const progress = ~~(totalLength * t);
			const { textNode, range, text } = getCurrentRange(progress);
			const [start, end] = range;
			const textLength = ((progress - start) / (end - start)) * text.length;
			textNode.textContent = text.slice(0, textLength);
		}
	};
}

function getAllTextNodes(node: HTMLElement) {
	if (node.nodeType === 3) {
		return [node];
	} else if (node.hasChildNodes()) {
		const list = [];
		// @ts-expect-error sdf
		for (const child of node.childNodes) {
			getAllTextNodes(child as HTMLElement).forEach((textNode) => list.push(textNode));
		}
		return list;
	}
	return [];
}
