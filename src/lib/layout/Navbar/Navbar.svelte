<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import SocialIcons from '$lib/components/SocialIcons.svelte';

	import Logo from './TerminalLogo.svelte';
	// https://codepen.io/towc/pen/mJzOWJ
	let canvas: HTMLCanvasElement;
	let hidden = true;
	let menu = [
		{
			text: 'Home',
			url: '/'
		},
		{
			text: 'About',
			url: '/about'
		},
		{
			text: 'Blog',
			url: '/blog'
		},
		{
			text: 'Now',
			url: '/now'
		},
		{
			text: 'Resume',
			url: '/resume'
		}
	];

	function showMobileMenu() {
		hidden = false;
		setTimeout(() => {
			initCanvasAnimation();
		}, 0);
	}

	function initCanvasAnimation() {
		if (!canvas) return;
		var w = (canvas.width = window.innerWidth),
			h = (canvas.height = window.innerHeight),
			ctx = canvas.getContext('2d'),
			opts: any = {
				len: 20,
				count: 50,
				baseTime: 10,
				addedTime: 10,
				dieChance: 0.05,
				spawnChance: 1,
				sparkChance: 0.1,
				sparkDist: 10,
				sparkSize: 2,

				color: 'hsl(hue,100%,light%)',
				baseLight: 50,
				addedLight: 10, // [50-10,50+10]
				shadowToTimePropMult: 6,
				baseLightInputMultiplier: 0.01,
				addedLightInputMultiplier: 0.02,

				cx: w / 2,
				cy: h / 2,
				repaintAlpha: 0.04,
				hueChange: 0.1
			},
			tick = 0,
			lines = [],
			dieX = w / 2 / opts.len,
			dieY = h / 2 / opts.len,
			baseRad = (Math.PI * 2) / 6;

		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, w, h);

		function loop() {
			if (!canvas) return;
			window.requestAnimationFrame(loop);

			++tick;

			ctx.globalCompositeOperation = 'source-over';
			ctx.shadowBlur = 0;
			ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
			ctx.fillRect(0, 0, w, h);
			ctx.globalCompositeOperation = 'lighter';

			if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(new Line());

			lines.map(function (line) {
				line.step();
			});
		}
		function Line() {
			this.reset();
		}
		Line.prototype.reset = function () {
			this.x = 0;
			this.y = 0;
			this.addedX = 0;
			this.addedY = 0;

			this.rad = 0;

			this.lightInputMultiplier =
				opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

			this.color = opts.color.replace('hue', tick * opts.hueChange);
			this.cumulativeTime = 0;

			this.beginPhase();
		};
		Line.prototype.beginPhase = function () {
			this.x += this.addedX;
			this.y += this.addedY;

			this.time = 0;
			this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

			this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
			this.addedX = Math.cos(this.rad);
			this.addedY = Math.sin(this.rad);

			if (
				Math.random() < opts.dieChance ||
				this.x > dieX ||
				this.x < -dieX ||
				this.y > dieY ||
				this.y < -dieY
			)
				this.reset();
		};
		Line.prototype.step = function () {
			++this.time;
			++this.cumulativeTime;

			if (this.time >= this.targetTime) this.beginPhase();

			var prop = this.time / this.targetTime,
				wave = Math.sin((prop * Math.PI) / 2),
				x = this.addedX * wave,
				y = this.addedY * wave;

			ctx.shadowBlur = prop * opts.shadowToTimePropMult;
			ctx.fillStyle = ctx.shadowColor = this.color.replace(
				'light',
				opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)
			);
			ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

			if (Math.random() < opts.sparkChance)
				ctx.fillRect(
					opts.cx +
						(this.x + x) * opts.len +
						Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
						opts.sparkSize / 2,
					opts.cy +
						(this.y + y) * opts.len +
						Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
						opts.sparkSize / 2,
					opts.sparkSize,
					opts.sparkSize
				);
		};
		loop();

		// TODO! remove handler when mobile menu is hidden
		window.addEventListener('resize', function () {
			if (!canvas) return;
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
			ctx.fillStyle = 'black';
			ctx.fillRect(0, 0, w, h);

			opts.cx = w / 2;
			opts.cy = h / 2;

			dieX = w / 2 / opts.len;
			dieY = h / 2 / opts.len;
		});
	}
</script>

<nav class="py-5 container flex justify-between font-code print:hidden ">
	<!-- logo -->
	<Logo />
	<!-- Primary Navbar items -->
	<div class="hidden md:flex items-center justify-center space-x-3 h-8">
		{#each menu as item, index}
			<a
				href={item.url}
				class=" px-2  font-normal tracking-wider relative {$page.url.pathname === item.url
					? 'text-primary-400 border-b-primary-400 border-b-2'
					: 'text-gray-900 dark:text-slate-500 blur-[1px] hover:text-slate-200 hover:blur-0 transition-all duration-300'}"
			>
				<!-- <span class="text-primary-400">
						{index + 1}.
					</span> -->
				<span>
					{item.text.toLowerCase()}
				</span>
			</a>
		{/each}
	</div>
	<!-- Mobile menu button -->
	<button class="outline-none mobile-menu-button md:hidden inline-block" on:click={showMobileMenu}>
		<svg
			class=" w-8 h-8 text-gray-200 hover:text-primary "
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
</nav>

<!-- mobile menu -->

{#if !hidden}
	<nav
		in:fly={{ y: 10, duration: 300 }}
		out:fly={{ y: 10, duration: 300 }}
		class="fixed w-full h-screen top-0 left-0 bg-gray-900 z-50 print:hidden"
	>
		<div class="flex flex-col justify-between items-center w-full h-full p-5">
			<!-- close button -->
			<button class="outline-none  self-end" on:click={() => (hidden = !hidden)}>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 371.23 371.23"
					style="enable-background:new 0 0 371.23 371.23;"
					xml:space="preserve"
					class="w-8 h-8 fill-gray-200 hover:fill-primary p-1"
				>
					<polygon
						points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "
					/>
				</svg>
			</button>

			<!-- menu -->
			<ul class="flex flex-col  items-center justify-center">
				{#each menu as item, index}
					<li
						in:fly={{ duration: 100, y: -30, delay: index * 50 }}
						class:active={$page.url.pathname === item.url}
						on:click={() => (hidden = true)}
					>
						<a
							href={item.url}
							class="block text-4xl font-bold px-2 py-4 text-gray-200   hover:text-secondary"
							>{item.text}</a
						>
					</li>
				{/each}
			</ul>

			<!-- social icons -->
			<SocialIcons />
		</div>

		<canvas
			bind:this={canvas}
			id="c"
			class="fixed -z-10 opacity-30 w-full h-screen top-0 left-0  pointer-events-none"
		/>
	</nav>
{/if}

<style lang="scss">
	@use './Navbar.scss';
</style>
