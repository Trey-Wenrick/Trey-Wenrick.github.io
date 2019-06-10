var r = 0;
var b = 0;
var g = 0;

function setup() {
    createCanvas(1420, 710);

}
function mousePressed(){
    if(mouseIsPressed);
    print ("0",g,b)
}
function draw() {
    r = map(mouseX,0,600,0,255)
    b = map(mouseY,0,400,0,255)
    g = map(mouseX,0,600,0,255)
    background(0,g,b);
    fill(255);
    ellipse(mouseX,mouseY,25,25);
}