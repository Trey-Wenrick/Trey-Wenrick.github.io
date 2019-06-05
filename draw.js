function setup() {
    createCanvas(1420, 710);
    background(100);
    r = 40
    g = 175
    b = 255
}

function draw() {

    noStroke();
    fill(r,g,150);
    ellipse(mouseX,mouseY,15,15);

}
function mousePressed(){
    background("grey")
    r += (-5,20)
    g += (-3,10)
    //b += (-40,150)
}