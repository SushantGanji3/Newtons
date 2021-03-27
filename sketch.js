
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof, ball1, ball2, ball3, ball4, ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 800, 25);
	ball1 = new Ball(100, 400, 50);
	ball2 = new Ball(150, 400, 50);
	ball3 = new Ball(200, 400, 50);
	ball4 = new Ball(250, 400, 50);
	ball5 = new Ball(300, 400, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
  //keyPressed();
 
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85,y:-85});
	}
}*/

