const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var crystal, crystalImg; 
function preload(){
  backgroundImg = loadImage("snow1.jpg");
  crystalImg = loadImage("sprite.png");
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  crystal = createSprite(400, 300, 50, 50); 
  crystal.scale = 0.1;
  snow = new Snow(200,200)
}

function draw() {
  Engine.update(engine);
  background(backgroundImg); 
  crystal.addImage(crystalImg);

  if(keyDown(LEFT_ARROW)){
    crystal.x = crystal.x - 1;
}
else if(keyDown(RIGHT_ARROW)){
  crystal.x = crystal.x +1;
}
else if(keyDown(UP_ARROW)){
  crystal.y = crystal.y - 1;
}
else if(keyDown(DOWN_ARROW)){
  crystal.y = crystal.y + 1;
}
snow.display();
  drawSprites();
}