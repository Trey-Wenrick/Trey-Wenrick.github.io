let balls=[];
let numBalls=50;
function setup() {
    createCanvas(1420, 710);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new PopcornBall (
            random(width),
            random(height)
        );
    }
}
function draw() {
    background("grey");
    for (let i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].bounce();
        balls[i].move();
    }
}
class PopcornBall {
    constructor(x, y,r) { // we could add radius or r to the constructor
        this.x = x;
        this.y = y;
        this.xspeed = random(1,2);
        this.yspeed = 1;
        this.r = random(10,20);

    }
    move() {
        var gravity = 9.8/30
        this.yspeed += gravity
        this.y += this.yspeed //your code here to move with gravity
        this.x += this.xspeed
    }
    bounce() {
        if(this.x <= 0 || this.x > width)
            this.xspeed *= -1
        if(this.y >= height - 10 || this.y <= 0) //bounce code with gravity?
            this.yspeed *= random(-1,-1.002)
        this.r += random(.03,.19)

    }
    display() {
        fill(this.r, this.x, this.y);
        ellipse(this.x, this.y, this.r, this.r);
        if(this.r >= 50){
            this.r = 15
        }
    }
}