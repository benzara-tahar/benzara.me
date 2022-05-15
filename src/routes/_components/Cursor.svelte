<script lang="ts">
	import { onMount } from 'svelte';

	let cursor: HTMLSpanElement;

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		// window.addEventListener('click', expandCursor);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			// window.removeEventListener('click', expandCursor);
		};
	});

	// function expandCursor(_e: MouseEvent) {
	// 	cursor.classList.add('expand');
	// 	setTimeout(() => {
	// 		cursor.classList.remove('expand');
	// 	}, 500);
	// }
	function handleMouseMove({ pageX, pageY }: MouseEvent) {
		cursor.style.left = `${pageX}px`;
		cursor.style.top = `${pageY}px`;
	}
</script>

<span bind:this={cursor} class=" cursor z-10" />

<style lang="postcss">
	.cursor {
		width: 40px;
		height: 40px;
		border: 1px solid rgb(126, 126, 126);
		border-radius: 50%;
		position: absolute;
		transform: translateX(-50%) translateY(-50%);
		animation: cursorAnimation 1s infinite alternate;
		pointer-events: none;
		&::after {
			content: '';
			width: 40px;
			height: 40px;
			position: absolute;
			border: 4px solid rgb(228, 228, 228);
			border-radius: 50%;
			opacity: 0.5;
			animation: innerCursorAnimation 1s infinite alternate;
		}
	}

	@keyframes cursorAnimation {
		from {
			transform: translateX(-50%) translateY(-50%) scale(1);
		}
		to {
			transform: translateX(-50%) translateY(-50%) scale(0.7);
		}
	}

	@keyframes innerCursorAnimation {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(0.4);
		}
	}

	@keyframes expandAnimation {
		0% {
			border: rgb(0, 255, 242);
		}
		50% {
			border: white;
		}
		100% {
			border: rgb(0, 255, 242);
		}
	}

	:global(.expand) {
		background-color: cyan;
		transition: all 0.3s ease;
	}
</style>
