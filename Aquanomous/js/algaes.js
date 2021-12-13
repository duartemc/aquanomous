class Algaes extends Reward {
    constructor(id, origin) {
        super("images/Rock-1.png", 1);

        this.x1 = 40;
        this.x2 = 60;
        this.x3 = 70;
        this.x4 = 40;
        this.x5 = 50;

        this.time;



    }
 

    draw() {

        stroke(5);
        fill('green');


        beginShape();


        curveVertex(x1, 100);
        curveVertex(x2, 120);
        curveVertex(x4, 380);
        curveVertex(x5, 500);
        curveVertex(x5, 500);
        curveVertex(x5, 500);

        endShape();

        //square(x1, 200, 40);
        //square(x2, 220, 40);
        //square(x4, 300, 40);
        //square(x4, 250, 40);

        x1 += randomGaussian(time, 0.3);
        x2 += randomGaussian(time + 10, 0.3);
        x3 += randomGaussian(time + 4, 0.1);
        //x4 += random(-1,1);
        //x5 += random(-1,1);

        time += .0005;

    }
}