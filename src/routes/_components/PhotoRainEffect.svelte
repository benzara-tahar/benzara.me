<script lang="ts">
	import { theme } from '$lib/_store/app.store';
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let image: any;
	let mappedImage = [];
	let gradient: CanvasGradient;
	const width = 400;
	const height = 400;

	let hovered = false;

	const numberOfParticles = 4000;

	onMount(() => {
		image = new Image();
		image.src = '/img/benzara.jpg';
		image.addEventListener('load', initCanvas);

		// const unsubscribe = theme.subscribe((t) => {
		// 	image.src = `/img/me-${t}.jpg`;
		// });
		return () => image.removeEventListener('load', initCanvas);
	});

	function initCanvas() {
		ctx = canvas.getContext('2d');
		canvas.width = width;
		canvas.height = height;

		gradient = ctx.createLinearGradient(0, 0, width / 2, height);
		gradient.addColorStop(0.1, '#002E2D');
		gradient.addColorStop(0.5, '#00D6D3');
		gradient.addColorStop(0.9, '#ACEB00');

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
				const cellColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'; // store the original image color for later use
				const cell = [brightness, cellColor];

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
			private angle: number;
			constructor() {
				this.x = Math.random() * width;
				this.y = 0;
				this.speed = 0;
				this.velocity = Math.random() * 1.5;
				this.size = Math.random() * 0.5 + 1;
				this.position1 = Math.floor(this.y);
				this.position2 = Math.floor(this.x);
				this.angle = 0;
			}
			update() {
				this.position1 = Math.floor(this.y);
				this.position2 = Math.floor(this.x);
				if (mappedImage[this.position1] && mappedImage[this.position1][this.position2]) {
					this.speed = mappedImage[this.position1][this.position2][0];
				}

				let movement = 2.5 - this.speed + this.velocity;

				// particles falling like rain
				// add this.x+= movement; to make it fall from top left to bottom right
				this.y += movement;

				// angular movement
				// this.y += movement + Math.sin(this.angle) * 3;
				// this.x += movement + Math.cos(this.angle) * 3;
				// this.angle += this.speed / 20;

				if (hovered) {
					// slow down on hover
					// this.speed *= 4;
					// increase the size of the particles on hover
					this.size = this.speed * 0.5;
				} else {
					// this.speed *= 0.25;
					this.size = Math.random() * 0.5 + 1;
				}
				if (this.y > height) {
					this.y = 0;
					this.x = Math.random() * width;
				}
				if (this.x > width) {
					// paly with the direction of particles on the x axis
					this.x = 0;
					this.y = Math.random() * width;
				}
			}

			draw() {
				ctx.beginPath();
				// ctx.fillStyle = $theme === 'dark' ? 'red' : '#000106'; // use fill color base on the theme
				if (hovered) {
					if (mappedImage[this.position1] && mappedImage[this.position1][this.position2]) {
						// fill with original image colors
						ctx.fillStyle = mappedImage[this.position1][this.position2][1];
					}
				} else {
					ctx.fillStyle = gradient;
				}

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
			ctx.globalAlpha = 0.05;
			ctx.fillStyle = $theme === 'dark' ? '#000106' : '#000106';
			// ctx.fillStyle = $theme === 'dark' ? '#000106' : '#000106';
			ctx.fillRect(0, 0, width, height);
			ctx.globalAlpha = 0.02;

			for (let i = 0; i < practicesArray.length; i++) {
				practicesArray[i].update();
				// ctx.globalAlpha = 1; // set full opacity
				ctx.globalAlpha = practicesArray[i].speed * 0.3; // set opacity based on particle speed
				practicesArray[i].draw();
			}
			requestAnimationFrame(animate);
		}
	}
</script>

<div>
	<canvas
		bind:this={canvas}
		class=" h-[{height}px] w-[{width}px]  rounded-full border-8 border-slate-300 dark:border-slate-900"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
	/>
	<h1>{hovered}</h1>
</div>

<style lang="scss">
	// canvas {
	// 	bod
	// }
</style>
