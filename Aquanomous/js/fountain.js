class Fountain extends Reward {
    constructor(id, y, x) {
        super("images/Rock-1.png", 1);

        this.originX = x;
        this.originY = y;
        this.id = id;



        this.particles = [];

        for (let i = 0; i < 400; i++) {

            this.particles.push(new Particle(id, y, x));
        }


    }

    draw() {



        for (let i = 0; i < 400; i++) {

            this.particles[i].update();
            this.particles[i].show();
        }
    }
}

class Particle {
    constructor(id, y, x) {
        this.id = id;
        this.originX = x;
        this.originY = y;


        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-2, -5);

        //this.alpha = 255;
        this.alpha = 700;
    }


    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;

        if (this.y < 0) {
            this.y = this.originY;
            this.x = this.originX;
            this.alpha = 750;
            print(this.id + ' ' + this.x + ' ' + this.alpha)
        }
    }

    show() {
        stroke(255, this.alpha);
        fill(255, 10);
        ellipse(this.x, this.y, 16);
    }

}
