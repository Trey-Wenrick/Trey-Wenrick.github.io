let rain = []
let b = []
var angle = 0;
var slider;

function setup() {
  createCanvas(800, 600);
  slider = createSlider(0,TWO_PI,PI/4,0.01);
  for(let i = 0; i < 300; i++){
    rain[i] = new Rain();
    }
}
function draw() {
  background(54,186,219);
  if(mouseX>20 && mouseX<150 && mouseY>40 && mouseY<120){
    background(0);
    for (let i =0 ; i< 300;i++){
      rain[i].move();
      rain[i].show();
    }
  }
  fill(255,255,0)
  stroke(255,255,0)
  // sun rays
  line(670,60,630,60)
  line(674,85,630,100)
  line(692,105,662,123)
  line(714,117,691,148)
  line(677,35,627,25)
  //sun
  ellipse(730,60,100,100);
  //cloud
  fill(100)
  stroke(255)
  ellipse(50,100,50,50);
  ellipse(75,70,50,50);
  ellipse(110,70,50,50);
  ellipse(90,100,50,50);
  ellipse(130,95,50,50);
  
  angle = slider.value();
  stroke(255);
  translate(400,height);
  branch(200);
}
function branch(len) {
  line(0,0,0,-len)
  translate(0,-len)
  if(len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
  if(len < 4){
    noStroke();
    fill("green")
    ellipse(0,len,3,10)
  }
}
  class Rain {
    constructor(){
      this.x = random(width);
      this.y = random(0,-height);
    }
    move() {
      this.y = this.y + random(3,10) //random(1,5)
      if(this.y > height){
        this.y = random(0, -height)
      }
    
    }
    show() {
      noStroke()
      fill(0,0,255)
      ellipse(this.x,this.y,5,10);
      
    }
}


