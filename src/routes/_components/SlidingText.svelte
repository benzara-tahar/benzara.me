<script lang="ts">
	import { onMount } from 'svelte';

	let values = [' Creative ', ' Frontend ', ' Backend ', ' FullStack '];
	let index = 0;
	let lastValue = values[index];

	onMount(() => {
		let interval = setInterval(() => {
			index = (values.indexOf(lastValue) + 1) % values.length;
			lastValue = values[index];
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<span class="sliding-text    ">
	<span style="--value: {index};" />
</span>

<style lang="scss">
	.sliding-text {
		display: inline-flex;
		position: relative;
		line-height: 1em;
		height: 1em;
		& > * {
			height: 1em;
			display: inline-block;
			overflow-y: hidden;
		}
		& > *:before {
			text-align: center;
			content: ' Creative \A Frontend \A Backend \A FullStack ';
			transition: all 1s cubic-bezier(1, 0, 0, 1);
			position: relative;
			height: 100%;
			white-space: pre;
			top: calc(var(--value) * -1em);
			/**TODO! refactor duplicate gradient css*/
			background: linear-gradient(-70deg, #8ec200, #00d6d3, #8ec200, #00d6d3);
			background-size: 400% 400%;
			background-clip: text;
			animation: gradient 10s ease infinite;
			-webkit-text-fill-color: transparent;
			text-shadow: 0 0 #00000000;
			box-decoration-break: clone;
		}
	}
</style>
