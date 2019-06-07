let input, button, greeting;
speed = 3
var x = 0
var y = 0

function setup() {
    createCanvas(500, 500);
    greeting = createElement('h2','What Color Bubble?');
    input = createInput();
    button = createButton('Submit');
    button.mousePressed(greet);

    greeting2 = createElement('h2','What Color Background?');
    backgroundcolor = createInput();
    button2 = createButton('Submit');
    button2.mousePressed(greet2);
}

function greet() {
    const color = input.value();
    greeting.html('Nice ' + color + '!');
    input.value(color);

}
function greet2() {
    const color2 = backgroundcolor.value();
    greeting2.html('Nice ' + color2 + '!');
    backgroundcolor.value(color2)

}

function draw() {
    background(backgroundcolor.value());
    stroke(0);
    strokeWeight(4);
    fill(input.value());
    ellipse(x,200,75,75);
    ellipse(200,y,75,75);
    ellipse(x,y,75,75);


    if(x > width) {
        speed = -3;
    }

    if (x < 0) {
        speed = 3
    }

    if(y > height) {
        speed = -3;
    }

    if (y < 0) {
        speed = 3
    }

    x = x + speed
    y = y + speed
}
