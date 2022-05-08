<script lang="ts">
	import { theme } from '$lib/_store/app.store';
	import { onMount } from 'svelte';
	import { Particle } from './Particle';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let image: any;
	let mappedImage = [];
	const width = 400;
	const height = 400;
	const numberOfParticles = 4000;

	// mouse move
	let rotateX: number = 0;
	let rotateY: number = 0;

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);
		console.time('loading image');

		image = new Image();
		image.src = '/img/original.jpg';
		image.addEventListener('load', initCanvas);
		return () => {
			image.removeEventListener('load', initCanvas);
			window.removeEventListener('mousemove', onMouseMove);
		};
	});

	const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
		let screenWidth = window.screen.width / 2;
		let screenHeight = window.screen.height / 2;
		const centroX = clientX - screenWidth;
		const centroY = screenHeight - (clientY + 400);
		rotateX = centroY * 0.04;
		rotateY = centroX * 0.02;
	};

	const calculateRelativeBrightness = (red, green, blue) => {
		return Math.sqrt(red * green * 0.299 + red * blue * 0.587 + green * blue * 0.114) / 100;
	};

	/**
	 * init canvas with the and extract immage pixels data
	 */
	const initCanvas = () => {
		ctx = canvas.getContext('2d');
		canvas.width = width;
		canvas.height = height;

		console.timeLog('loading image');

		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		console.timeLog('loading image');

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
				// store the original image color for later use
				const cellColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
				const cell = [brightness, cellColor];

				row.push(cell);
			}
			mappedImage.push(row);
		}

		/**
		 * init the canvas particles
		 */
		const init = () => {
			// fill static memebers (TODO! design can be simplified)
			Particle.ctx = ctx;
			Particle.width = width;
			Particle.height = height;
			Particle.mappedImage = mappedImage;
			Particle.gradient = createGradient(ctx);

			for (let i = 0; i < numberOfParticles; i++) {
				practicesArray.push(new Particle());
			}
		};

		/**
		 * animate loop function
		 */
		const animate = () => {
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
		};

		// start
		init();
		animate();
	};

	function createGradient(ctx: CanvasRenderingContext2D): CanvasGradient {
		const gradient = ctx.createLinearGradient(0, 0, Particle.width / 2, Particle.height);
		gradient.addColorStop(0.1, '#002E2D');
		gradient.addColorStop(0.5, '#00D6D3');
		gradient.addColorStop(0.9, '#ACEB00');
		return gradient;
	}
</script>

<div
	class="relative"
	style="transform: perspective(400px) rotateY({rotateY}deg) rotateX({rotateX}deg) ;"
>
	<canvas
		on:click={() => {
			window.open(image.src, '_blank').focus();
		}}
		bind:this={canvas}
		class=" h-[{height}px] w-[{width}px]  rounded-full border-8 border-slate-300 dark:border-slate-900 cursor-pointer"
		on:mouseenter={() => (Particle.hovered = true)}
		on:mouseleave={() => (Particle.hovered = false)}
	/>
</div>
