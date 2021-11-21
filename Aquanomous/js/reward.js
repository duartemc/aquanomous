class Reward {
    constructor(imageName, id) {
        this.image = loadImage(imageName);
        this.isShowing = false;
        this.id = id;
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

        }

    }
    
    update(){

    }



}