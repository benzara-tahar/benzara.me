<svelte:options preserveWhitespace={false} />

<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy } from 'svelte';
	import { onMount } from 'svelte';
	export let selectedText = '';
	export let text = '';
	let hiddenText = '';
	let textElement;

	const handleSelection = (event: Event) => {
		let selection = document.getSelection();
		let { anchorNode, anchorOffset, focusNode, focusOffset } = selection;
		console.log({ anchorNode, anchorOffset, focusNode, focusOffset });

		// if (
		// 	!anchorNode ||
		// 	!focusNode ||
		// 	focusNode !== anchorNode ||
		// 	(anchorNode.nodeType !== Node.TEXT_NODE && focusNode.nodeType !== Node.TEXT_NODE)
		// ) {
		// 	return;
		// }
		if (!anchorNode.parentElement.classList.contains('svelte-1jqxjqj')) {
			return;
		}

		hiddenText = selectedText.substring(anchorOffset, focusOffset);
		anchorNode.textContent =
			text.substring(0, anchorOffset) + hiddenText + text.substring(focusOffset);
		console.log(hiddenText);
	};

	onMount(() => {
		if (!browser) return;

		document.addEventListener('selectionchange', handleSelection);
		textElement.classList.add('svelte-1jqxq8s');
	});

	onDestroy(() => {
		if (!browser) return;

		document.removeEventListener('selectionchange', handleSelection);
	});
</script>

<div class="relative w-full">
	<span bind:this={textElement} class="text-3xl text-white absolute top-0 left-0">
		{text}
	</span>
</div>
<hr />

<style lang="scss">
	::selection {
		background-color: red;
	}
</style>
