function setup() {
    createCanvas(1435, 755);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    let hr = hour();
    let mn = minute();
    let sc = second();
    let dy = day();

    strokeWeight(0);
    textSize(50);
    textFont();
    fill(255)
    text(hr + ':' + mn + ':' + sc,620,360)

    translate(700,350);
    rotate(-90);
    strokeWeight(8 );
    stroke(255,100,150);
    noFill();
    let end = map (sc,0,60,0,360);
    arc(0,0,300,300,0,end);
    stroke(100,150,255);
    let end1 = map (mn,0,60,0,360);
    arc(0,0,280,280,0,end1);
    stroke(150,255,100);
    let end2 = map (hr,0,12,0,360);
    arc(0,0,260,260,0,end2);

}