class Reward {
    constructor(imageName) {
        this.image = loadImage(imageName);
        this.isShowing = false;
    }

    show() {
        this.isShowing = true;
    }
    hide() {
        this.isShowing = false;
    }

    draw() {
        if (this.isShowing) {
            this.image.resize(windowWidth, windowHeight);
            image(this.image, 0, 0);
           
            console.log ('drawRe');

            

        }

    }
}