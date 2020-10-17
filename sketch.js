const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var speed,weight,thickness
var deformation

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,400);
  bullet = createSprite(650,200,50,50)
  bullet.shapeColor("white") ;
  speed = randomNumber(223,321);
  weight = randomNumber(400,100);
  var options = {
    isStatic : true
  }
  wall = Bodies.rectangle(50,350,thickness,height/2,options);
  wall.shapeColor(80,80,80);
  World.add(world,wall);
  bullet.collide(wall);
  Damage = 0.5*weight*speed*speed/thicknes*thicknes*thickness
}
thickness = randomNumber(22,83);

function draw() {
  background("black");
  Engine.update(engine);
  bullet.display();
  strokeWeight(4);
  rectMode(CENTER);
  rect(wall.position.x,wall.position.y,40,1000);
  text("Damage:" + Damage,1000,40);
  if(Damage>=10){
    fill("green");
  }
  else{
    fill("red");
  }
  drawSprites();
}