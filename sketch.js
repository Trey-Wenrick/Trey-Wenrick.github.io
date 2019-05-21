var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var groundOffset = 100
var monsterArray = []
var health = 100
var score = 0

class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = false
    this.isDead = false
    this.targetX = random()*width
  }
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
   this.xSpeed *= 0.8
   this.x += this.xSpeed;
  }
  
  moveBadGuy(){
    var differenceX = this.targetX-this.x
    this.xSpeed += differenceX*0.002
    
    if(random() >= 0.98){
      this.targetX = random()*width
      this.ySpeed -= 10
    }
    
    
    this.isTouchingMainCharacter()
  }
  
  isTouchingMainCharacter(){
    if(mainCharacter.x + mainCharacter.width >= this.x
       && mainCharacter.x <= this.x+this.width
       && mainCharacter.y + mainCharacter.width >= this.y
       && mainCharacter.y <= this.y+this.width)
    {
      //here we have figured out that there was a hit
      stroke("black")
      noFill()
      rect(this.x, this.y, this.width, this.width)
      
      if(mainCharacter.y - this.y < -30){
        this.isDead = true
        mainCharacter.ySpeed = -5
        score += 2
      } else {
        health -= 1
      }
    }
  }
  
  
  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)  
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }
  }
}

function setup() {
  createCanvas(800, 400);
  mainCharacter = new Character(200, 400, 120)
  backgroundImage = loadImage("./desert.jpg")
  mainCharacterImage = loadImage("./d9pdvtm-20fd2599-dde8-44fd-a301-1b8b12829dbb.png")
  monsterImage = loadImage("./goomba.png")
  
  for(var i = 0;i<100;i++){
    var newMonster = new Character(500+20*i, 100, 60)
    newMonster.isMonster = true
    monsterArray.push(newMonster)
  }

}

function draw() {
  if(health <= 0){
    background(0)
    fill("blue")
    text("GAME OVER. \nSCORE " + score, 200, 200, 200, 200)
    return 
  }
  
  
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    //move right
    mainCharacter.xSpeed += 1.0
  }
  
  mainCharacter.update();
  mainCharacter.draw()
  
  //draw health bar
  fill("purple")
  stroke("black")
  rect(10, 10, health*2, 20)
  
  fill("white")
  textSize(30)
  text(score, width-40, 10, 40, 20)
  
  
  var anyCatAlive = false
  
  for(var i = 0;i<monsterArray.length;i++)
  {
    if(monsterArray[i].isDead){
      //do nothing! (because monster is dead)
    } else { 
      anyCatAlive = true
      monsterArray[i].update()
      monsterArray[i].moveBadGuy()
      monsterArray[i].draw() 
    }
  }
  
  if(anyCatAlive === false){
    for(var i = 0;i<10;i++){
      var newMonster = new Character(500+20*i, 100+ 10, 60)
      newMonster.isMonster = true
      monsterArray.push(newMonster)
    }
  }
  
}

function keyPressed(){
   //&& mainCharacter.y >= 260
  if(key === " "){
    //JUMP!
    mainCharacter.ySpeed -= 10.0
  }
}

