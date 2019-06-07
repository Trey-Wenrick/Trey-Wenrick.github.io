function setup() {
    createCanvas(1435, 755);
    background(100);
    r = 40
    g = 175
    b = 255
    frameRate(1000);
}

function draw() {

    noStroke();
    fill(random(255),random(255),100);
    ellipse(mouseX,mouseY,30,30);

}
function mousePressed(){
    background("grey")
    fill("white")
    r += (-5,20)
    g += (-3,10)
    //b += (-40,150)
}