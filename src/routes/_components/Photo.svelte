<script lang="ts">
	import { theme } from '$lib/_store/app.store';
</script>

<div class="shape-outer octagon ">
	<div class="shape-inner octagon {$theme}" />
</div>

<style lang="scss">
	.octagon {
		-webkit-clip-path: polygon(
			30% 0%,
			70% 0%,
			100% 30%,
			100% 70%,
			70% 100%,
			30% 100%,
			0% 70%,
			0% 30%
		);
		clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
	}

	.shape-outer {
		display: flex;
		flex-shrink: 0;
		height: calc(45vw);
		width: calc(45vw);
		background-image: linear-gradient(to bottom right, #00d6d3, #51fffd, #c0ff15);
	}

	.shape-inner {
		height: calc(42vw);
		width: calc(42vw);

		background-size: cover;
		margin: auto;
		&.dark {
			background: url(/img/me-dark.jpg) no-repeat center;
		}
		&.light {
			background: url(/img/me-light.jpg) no-repeat center;
		}
	}
</style>
