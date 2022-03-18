<script lang="ts">
	import Matter, { type IChamferableBodyDefinition } from 'matter-js';

	import { onMount } from 'svelte';
	import type { IBodyDefinition } from 'matter-js';

	export let className = '';

	onMount(() => {
		initComposition();
	});

	const icons = [
		'c-css.png',
		'c-git.png',
		'c-github.png',
		'c-html.png',
		'c-sass.png',
		'c-vs.png',
		's-azure.png',
		's-docker.png',
		's-elastic.png',
		's-git2.png',
		's-js.png',
		's-mongodb.png',
		's-nest.png',
		's-svelte.png',
		's-ts.png'
	];

	const PATH =
		'M12.5397 24.0001C24.5 -5.5 57.0002 -7.49993 164 21.0001C272.5 35.0001 295.5 -13.5535 337.5 21.0001C410.528 81.0805 395.5 163 359 235.5C345.848 282.681 375 322.656 360 352.656C349.243 376.295 249 356 205 333.156C139.5 314 118.5 360 58 348C27 340 6.53968 252.5 6.53968 214.5C6.53968 214.5 -9.5 106.5 12.5397 24.0001Z';
	let canvas: HTMLElement = undefined;

	function initComposition() {
		let Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Body = Matter.Body,
			Events = Matter.Events,
			Composite = Matter.Composite,
			Composites = Matter.Composites,
			Common = Matter.Common,
			MouseConstraint = Matter.MouseConstraint,
			Mouse = Matter.Mouse,
			World = Matter.World,
			Svg = Matter.Svg,
			Bodies = Matter.Bodies;

		// create engine
		let engine = Engine.create(),
			world = engine.world;

		const width = 400;
		const height = 400;

		world.bounds = {
			min: { x: 0, y: 0 },
			max: { x: width, y: height }
		};

		// create renderer
		const render = Render.create({
			element: canvas,
			engine: engine,
			options: {
				wireframes: false,
				showAngleIndicator: false,
				background: 'transparent',
				width: world.bounds.max.x,
				height: world.bounds.max.y
			}
		});
		// @ts-expect-error
		Render.setPixelRatio(render, 'auto');
		engine.gravity.y = 0.75;

		// add bodies
		const boundariesOptions: IChamferableBodyDefinition = {
			isStatic: true,
			render: { fillStyle: 'transparent' },
			chamfer: {
				radius: 20
				// quality: 100
			}
		};
		const barWidth = 45;

		// add bodies
		Composite.add(world, [
			// walls
			Bodies.rectangle(400, 0, 800, barWidth, { ...boundariesOptions }),
			Bodies.rectangle(780, 300, barWidth, 620, { ...boundariesOptions }),
			Bodies.rectangle(400, 600, 800, barWidth, { ...boundariesOptions }),
			Bodies.rectangle(20, 300, barWidth, 620, { ...boundariesOptions })
		]);

		// add all of the bodies to the world

		let explosion = function (engine) {
			let bodies = Composite.allBodies(engine.world);

			for (let i = 0; i < bodies.length; i++) {
				let body = bodies[i];

				if (!body.isStatic && body.position.y >= 500) {
					let forceMagnitude = 0.05 * body.mass;

					Body.applyForce(body, body.position, {
						x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
						y: -forceMagnitude + Common.random() * -forceMagnitude
					});
				}
			}
		};

		let timeScaleTarget = 1,
			counter = 0;

		Events.on(engine, 'afterUpdate', function (event) {
			// tween the timescale for bullet time slow-mo
			engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

			counter += 1;

			// every 1.5 sec
			if (counter >= 60 * 5) {
				// flip the timescale
				if (timeScaleTarget < 1) {
					timeScaleTarget = 1;
				} else {
					timeScaleTarget = 0.05;
				}

				// create some random forces
				explosion(engine);

				// reset counter
				counter = 0;
			}
		});

		let bodyOptions: IBodyDefinition = {
			frictionAir: 0,
			friction: 0.0001,
			restitution: 0.8
		};

		// add some small bouncy circles... remember Swordfish?
		World.add(
			world,
			Composites.stack(20, 20, icons.length, 1, 30, 10, function (x, y, index) {
				const texture = '/static/techs/' + icons[index];
				const options = {
					...bodyOptions,
					render: {
						sprite: {
							texture
						}
					}
				};
				return Bodies.circle(x, y, Common.random(10, 20), options);
			})
		);

		// // add some larger random bouncy objects
		// World.add(
		// 	world,
		// 	Composites.stack(50, 50, 8, 3, 0, 0, function (x, y) {
		// 		switch (Math.round(Common.random(0, 1))) {
		// 			case 0:
		// 				if (Common.random() < 0.8) {
		// 					return Bodies.rectangle(
		// 						x,
		// 						y,
		// 						Common.random(20, 50),
		// 						Common.random(20, 50),
		// 						bodyOptions
		// 					);
		// 				} else {
		// 					return Bodies.rectangle(
		// 						x,
		// 						y,
		// 						Common.random(80, 120),
		// 						Common.random(20, 30),
		// 						bodyOptions
		// 					);
		// 				}
		// 			case 1:
		// 				return Bodies.polygon(
		// 					x,
		// 					y,
		// 					Math.round(Common.random(4, 8)),
		// 					Common.random(20, 50),
		// 					bodyOptions
		// 				);
		// 		}
		// 	})
		// );

		// add mouse control
		let mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false
					}
				}
			});

		// Allow page scrolling in matter.js window
		mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
		mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

		Render.run(render);

		// create runner
		let runner = Runner.create();
		Runner.run(runner, engine);
	}
</script>

<div class={className} id="compositionContainer" bind:this={canvas} />
