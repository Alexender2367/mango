
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(900,100)
	Mango1=new Mango(600,150,20)
	Mango2=new Mango(600,100,20)
	Mango3=new Mango(600,700,20)
	Mango4=new Mango(600,50,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
 tree.display();
}



