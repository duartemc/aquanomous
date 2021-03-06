class Fountain extends Reward {
    constructor(id, origin) {
        super("images/Rock-1.png", 1);
        this.origin = origin;
        this.id = id;
        this.particles = [];

        for (let i = 0; i < 400; i++) {

            this.particles.push(new Particle(id, this.origin.copy()));
        }


    }

    draw() {
        for (let i = 0; i < 400; i++) {

            this.particles[i].update();
            this.particles[i].show();
        }
    }

    touchedByTheFish(fishPosition) {
        if (this.origin.x + 100 > fishPosition.x && this.origin.x - 100 < fishPosition.x) {
            print("acelerou");
            for (let i = 0; i < 400; i++) {
                this.particles[i].applyForce(createVector(random(-1,1)));
            }
        }
    }

}

class Particle {
    constructor(id, position) {
        this.id = id;
        this.origin = position.copy();
        this.position = position.copy();
        this.velocity = createVector(random(-1, 1), random(-2, -5));
        this.acceleration = createVector(0, 0);

        //this.alpha = 255;
        this.alpha = 700;
    }

    update() {
        //print( this.origin);
        this.alpha -= 5;

        this.velocity.add(this.acceleration.copy());
        this.position.add(this.velocity.copy());
        this.acceleration.set(0, 0);
        this.applyFriction();

        if (this.position.y < 0) {
            this.position = this.origin.copy();
            this.velocity = createVector(random(-1, 1), random(-2, -5));
            //print("this.origin " +this.origin + " - this.position: "+this.position);
            this.alpha = 750;
        }



    }



    applyForce(force) {
        this.acceleration.add(force);
    }

    applyFriction() {
        let dif = (this.position.x - this.origin.x );
        if (dif > -20 && dif < 20 )
            return;
        let c = 0.05;
        let friction = this.velocity.copy();
        friction.normalize();
        friction.mult(-1);
        friction.mult(c);

        this.applyForce(createVector(friction.x,0));
       

    }

    show() {
        stroke(255, this.alpha);
        fill(255, 10);
        ellipse(this.position.x, this.position.y, 16);
    }

}