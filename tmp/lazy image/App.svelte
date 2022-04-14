<script>
	import Lazy from './Lazy.svelte';

	const onload = (node) => {
		console.log('on load');
	};
</script>

<h1>Hello Lazy!</h1>
<div class="preload">
	<img alt="" src="https://picsum.photos/id/412/400/300" />
	<img alt="" src="https://picsum.photos/id/412/400/300" />
	<img alt="" src="https://picsum.photos/id/412/400/300" />
</div>

<Lazy height={300}>
	<video controls height={300}>
		<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
	</video>
</Lazy>

{#each [0, 1, 2] as i}
	<Lazy height={300} offset={0}>
		<img alt="" src="https://picsum.photos/id/547/400/300" />
	</Lazy>
{/each}

{#each [0, 1, 2] as i}
	<Lazy height={300} offset={150} {onload} fadeOption={{ delay: 500, duration: 1000 }}>
		<div class="text-content">Any content can be here.</div>
	</Lazy>
{/each}

<style>
	img,
	video {
		display: block;
		margin: 12px;
		border-radius: 6px;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1);
	}
	h1 {
		margin-left: 12px;
		margin-bottom: 6vh;
	}
	.preload {
		min-height: 900px;
	}
	.text-content {
		margin: 12px;
		height: 300px;
	}
</style>
