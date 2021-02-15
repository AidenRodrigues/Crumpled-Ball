
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(800, 490, 1600, 30)
	ball = new Ball(100, 360, 25)
	b1 = new Basket(1200, 465, 170, 20)
	b2 = new Basket(1110, 415, 20, 120)
	b3 = new Basket(1295, 415, 20, 120)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  b1.display();
  b2.display();
  b3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:30, y:-30})
	}
}

