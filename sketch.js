
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	D1= new Dustbin(620,620,200,100)
	paper= new Paper (100,600,50)
	Engine.run(engine);
  
}
function draw() 
{
  rectMode(CENTER);
  background("grey");
  drawSprites()
 paper.display()
 ground.display()
 D1.display()
}

function keyPressed()
{
	if(keyCode === UP_ARROW) 
	{
   Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});

	}
}


