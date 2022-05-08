export class Particle {
	static hovered = false;
	static width = 400;
	static height = 400;
	static mappedImage = [];
	static ctx: CanvasRenderingContext2D;
	static gradient: CanvasGradient;

	x: number;
	y: number;
	speed: number;
	velocity: number;
	size: number;
	roundedY: number;
	roundedX: number;
	angle: number;

	constructor() {
		this.x = Math.random() * Particle.width;
		this.y = 0;
		this.speed = 0;
		this.velocity = Math.random() * 1.5;
		this.size = Math.random() * 0.5 + 1;
		this.roundedY = Math.floor(this.y);
		this.roundedX = Math.floor(this.x);
		this.angle = 0;
	}

	/**
	 * update particle for the next render iteration
	 */
	public update = () => {
		this.roundedY = Math.floor(this.y);
		this.roundedX = Math.floor(this.x);
		if (Particle.mappedImage[this.roundedY] && Particle.mappedImage[this.roundedY][this.roundedX]) {
			this.speed = Particle.mappedImage[this.roundedY][this.roundedX][0];
		}
		const movement = 2.5 - this.speed + this.velocity;
		if (Particle.hovered) {
			// angular movement
			this.y += movement - Math.sin(this.angle) * 3;
			this.x += movement - Math.cos(this.angle) * 1.5;
			this.angle += this.speed / 20;
		} else {
			// particles falling like rain
			// add this.x+= movement; to make it fall from top left to bottom right
			this.y += movement;
		}
		if (Particle.hovered) {
			// slow down on hover
			// this.speed *= 4;
			// increase the size of the particles on hover
			this.size = this.speed * 0.5;
		} else {
			// this.speed *= 0.25;
			this.size = Math.random() * 0.5 + 1;
		}
		if (this.y > Particle.height) {
			this.y = 0;
			this.x = Math.random() * Particle.width;
		}
		if (this.x > Particle.width) {
			// paly with the direction of particles on the x axis
			this.x = 0;
			this.y = Math.random() * Particle.width;
		}
	};

	/**
	 * render particle on the canvas
	 */
	draw = () => {
		Particle.ctx.beginPath();
		// Particle.ctx.fillStyle = $theme === 'dark' ? 'red' : '#000106'; // use fill color base on the theme
		if (Particle.hovered) {
			if (
				Particle.mappedImage[this.roundedY] &&
				Particle.mappedImage[this.roundedY][this.roundedX]
			) {
				// fill with original image colors
				Particle.ctx.fillStyle = Particle.mappedImage[this.roundedY][this.roundedX][1];
			}
		} else {
			Particle.ctx.fillStyle = Particle.gradient;
		}
		Particle.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		Particle.ctx.fill();
	};
}
