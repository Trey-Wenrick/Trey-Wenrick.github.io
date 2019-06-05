var ball = {
    x:300,
    y:200,
    xspeed: 4,
    yspeed: -3
}
var ball2 = {
    x:200,
    y:200,
    xspeed: 4,
    yspeed: -3
}

var ball3 = {
    x:50,
    y:270,
    xspeed: 4,
    yspeed: -3
}
var ball4 = {
    x:100,
    y:400,
    xspeed: 4,
    yspeed: -3
}

var ball5 = {
    x:20,
    y:200,
    xspeed: 4,
    yspeed: -3
}
var ball5 = {
    x:0,
    y:400,
    xspeed: 4,
    yspeed: -3
}
var ball6 = {
    x:200,
    y:100,
    xspeed: 4,
    yspeed: -3
}
var a = Math.floor(Math.random() * 255)
var b = Math.floor(Math.random() * 255)
var c = Math.floor(Math.random() * 255)
var d = Math.floor(Math.random() * 255)
var e = Math.floor(Math.random() * 255)
var f = Math.floor(Math.random() * 255)
var g = Math.floor(Math.random() * 255)
var h = Math.floor(Math.random() * 255)
var i = Math.floor(Math.random() * 255)
var j = Math.floor(Math.random() * 255)
var k = Math.floor(Math.random() * 255)
var l = Math.floor(Math.random() * 255)
var m = Math.floor(Math.random() * 255)
var n = Math.floor(Math.random() * 255)
var o = Math.floor(Math.random() * 255)
var p = Math.floor(Math.random() * 255)
var q = Math.floor(Math.random() * 255)
var r = Math.floor(Math.random() * 255)



function setup() {
    createCanvas(1420, 710);
}

function draw() {
    background(0,20);
    move();
    bounce();
    display();


}

function move(){
    ball.x = ball.x + ball.xspeed
    ball.y = ball.y + ball.yspeed

    ball2.x = ball2.x + ball2.xspeed
    ball2.y = ball2.y + ball2.yspeed

    ball3.x = ball3.x + ball3.xspeed
    ball3.y = ball3.y + ball3.yspeed

    ball4.x = ball4.x + ball4.xspeed
    ball4.y = ball4.y + ball4.yspeed

    ball5.x = ball5.x + ball5.xspeed
    ball5.y = ball5.y + ball5.yspeed

    ball6.x = ball6.x + ball6.xspeed
    ball6.y = ball6.y + ball6.yspeed
}

function bounce(){
    if(ball.x > width || ball.x < 0)
        ball.xspeed = ball.xspeed * -1
    if(ball.y > height || ball.y < 0)
        ball.yspeed = ball.yspeed * -1;

    if(ball2.x > width || ball2.x < 0)
        ball2.xspeed = ball2.xspeed * -1
    if(ball2.y > height || ball2.y < 0)
        ball2.yspeed = ball2.yspeed * -1;

    if(ball3.x > width || ball3.x < 0)
        ball3.xspeed = ball3.xspeed * -1
    if(ball3.y > height || ball3.y < 0)
        ball3.yspeed = ball3.yspeed * -1;

    if(ball4.x > width || ball4.x < 0)
        ball4.xspeed = ball4.xspeed * -1
    if(ball4.y > height || ball4.y < 0)
        ball4.yspeed = ball4.yspeed * -1;

    if(ball5.x > width || ball5.x < 0)
        ball5.xspeed = ball5.xspeed * -1
    if(ball5.y > height || ball5.y < 0)
        ball5.yspeed = ball5.yspeed * -1;

    if(ball6.x > width || ball6.x < 0)
        ball6.xspeed = ball6.xspeed * -1
    if(ball6.y > height || ball6.y < 0)
        ball6.yspeed = ball6.yspeed * -1;

}

function display(){
    stroke("black")
    strokeWeight(0)
    fill(a,b,c);
    ellipse(ball.x,ball.y,75,75)
    fill(d,e,f)
    ellipse(ball2.x,ball2.y,75,75)
    fill(g,h,i)
    ellipse(ball3.x,ball3.y,75,75)
    fill(j,k,l)
    ellipse(ball4.x,ball4.y,75,75)
    fill(m,n,o)
    ellipse(ball5.x,ball5.y,75,75)
    fill(p,q,r)
    ellipse(ball6.x,ball6.y,75,75)


}