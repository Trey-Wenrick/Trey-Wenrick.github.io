let bubbles = [];


function setup() {
    createCanvas(1435, 755);
    for(let i = 0; i < 25; i++){
        let x = random(width);
        let y = random(height);
        let r = random(30, 45)
        let b = new Bubble(x, y, r)
        bubbles.push(b)
    }

}


function mouseClicked() {
    for (let i = 0; i < bubbles.length; i++){
        if(bubbles[i].contains(mouseX, mouseY)){
            bubbles.splice(i,1);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if(bubbles[i].contains(mouseX,mouseY));
        bubbles[i].move();
        bubbles[i].show();
        bubbles[i].bounce();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.xSpeed = random(-6,6)
        this.y = y;
        this.ySpeed = random(-6,6)
        this.r = r;
        this.brightness = 0;
        this.color;
        this.click;
    }

    changeColor(bright){
        this.brightness = bright;
    }

    contains(px,py){
        let d = dist(px,py,this.x,this.y);
        if(d < this.r){
            return true;
        }else{
            return false;
        }
    }

    move() {

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    bounce() {
        if(this.x > width || this.x < 0)
            this.xSpeed = this.xSpeed * -1
        if(this.y > height ||this.y < 0)
            this.ySpeed = this.ySpeed * -1;
    }

    show() {
        stroke(255);
        strokeWeight(8);
        fill(30,100,200,180);
        ellipse(this.x, this.y, this.r * 2);
    }
}