var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  //ground = new Ground(600,height,1200,20);
  division = new Divisions(600,2,200,20);
}

function draw() {
  background(0);  
  //ground.display();
  division.display();
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    division[k].display();
  }
  drawSprites();
}