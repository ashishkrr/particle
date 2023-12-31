class TextParticle {
    constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * this.effect.canvasWidth;
        this.y = 0;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        // this.dx = 0;
        // this.dy = 0;
        // this.vx = 0;
        // this.vy = 0;
        // this.force = 0;
        // this.angle = 0;
        // this.distance = 0;
        // this.friction = Math.random() * 0.6 + 0.15;
        this.ease = Math.random() * 0.1 + 0.005;
    }

    draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y);
    }
}