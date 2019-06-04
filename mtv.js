let bubbles = [];


function setup() {
    createCanvas(1420, 710);
    frameRate(10)
}

function mouseDragged(){
    let r = random(10,50);
    let b = new Bubble(mouseX, mouseY,r);
    bubbles.push(b);


}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].move();
    }
}

class Bubble {
    constructor(x,y,r){
        this.x = x;
        this.xSpeed = random(-5,5)
        this.y = y;
        this.ySpeed = random(-5,5)
        this.r = r;
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(random(0,255), random(255), random(255))
        ellipse(this.x, this.y, this.r *2);
    }
}