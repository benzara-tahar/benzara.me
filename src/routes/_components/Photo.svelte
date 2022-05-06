<script lang="ts">
	import { theme } from '$lib/_store/app.store';
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let image: any;
	let mappedImage = [];
	const width = 400;
	const height = 500;
	const numberOfParticles = 3000;

	onMount(() => {
		image = new Image();
		image.src = '/img/benzara.jpg';
		image.addEventListener('load', initCanvas);

		// const unsubscribe = theme.subscribe((t) => {
		// 	image.src = `/img/me-${t}.jpg`;
		// });
		// return () => unsubscribe();
	});

	function initCanvas() {
		ctx = canvas.getContext('2d');
		canvas.width = width;
		canvas.height = height;

		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		const pixels = ctx.getImageData(0, 0, width, height);
		ctx.clearRect(0, 0, width, height);
		let practicesArray = [];

		for (let y = 0; y < height; y++) {
			let row = [];
			for (let x = 0; x < width; x++) {
				const red = pixels.data[(y * width + x) * 4];
				const blue = pixels.data[(y * width + x) * 4 + 1];
				const green = pixels.data[(y * width + x) * 4 + 2];
				const brightness = calculateRelativeBrightness(red, green, blue);
				const cell = [brightness];
				row.push(cell);
			}
			mappedImage.push(row);
		}

		function calculateRelativeBrightness(red, green, blue) {
			return Math.sqrt(red * green * 0.299 + red * blue * 0.587 + green * blue * 0.114) / 100;
		}
		class Particle {
			private x: number;
			private y: number;
			private speed: number;
			private velocity: number;
			private size: number;
			private position1: number;
			private position2: number;
			constructor() {
				this.x = Math.random() * width;
				this.y = 0;
				this.speed = 0;
				this.velocity = Math.random() * 2.5;
				this.size = Math.random() * 1.5 + 1;
				this.position1 = Math.floor(this.y);
				this.position2 = Math.floor(this.x);
			}
			update() {
				this.position1 = Math.floor(this.y);
				this.position2 = Math.floor(this.x);
				this.speed = mappedImage[this.position1][this.position2][0];
				let movement = 2.5 - this.speed + this.velocity;

				this.y += movement;
				if (this.y > height) {
					this.y = 0;
					this.x = Math.random() * width;
				}
			}

			draw() {
				ctx.beginPath();
				ctx.fillStyle = $theme === 'dark' ? '#00D6D3' : '#000106';
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		init();
		animate();

		function init() {
			for (let i = 0; i < numberOfParticles; i++) {
				practicesArray.push(new Particle());
			}
		}

		function animate() {
			ctx.globalAlpha = 0.07;
			ctx.fillStyle = $theme === 'dark' ? '#000106' : '#f8fafc';
			ctx.fillRect(0, 0, width, height);
			ctx.globalAlpha = 0.8;

			for (let i = 0; i < practicesArray.length; i++) {
				practicesArray[i].update();
				ctx.globalAlpha = practicesArray[i].speed * 0.5;
				practicesArray[i].draw();
			}
			requestAnimationFrame(animate);
		}
	}
</script>

<div>
	<canvas bind:this={canvas} class=" h-[{height}px] w-[{width}px]  rounded-full" />
</div>

<style lang="scss">
	// canvas {
	// 	bod
	// }
</style>
