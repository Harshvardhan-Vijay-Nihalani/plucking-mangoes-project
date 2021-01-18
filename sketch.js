
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var tree;
var ground;
var stone;
var boyImg, treeImg;
var boy;
var mango1, mango2, mango3, mango4, mango5;
var sling;

function preload()
{
	boyImg=loadImage("boy.png");
	treeImg= loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);
	boy=createSprite(200,630,3,3);
	boy.addImage(boyImg);
	boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(800,450);
	ground= new Ground(600, 695, 1200,20);
	stone=new Stone(150,560);
	mango1=new Mango(800,250);
	mango2=new Mango(900,300);
	mango3=new Mango(700,200);
	mango4=new Mango(800,400);
	mango5=new Mango(600,300);

	sling=new SlingShot(stone.body,{x:150, y:570} );


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  if(keyCode===32){
	Matter.Body.setPosition(stone.body, { x: 150, y: 560 });
	sling.attach(stone.body);
	
  }
  
 drawSprites();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}



function detectCollision(stone, mango){
	var mangoBodyPosition=mango.body.position;
	var stoneBodyPosition=stone.body.position;


	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=mango.radius+mango.radius){
		Matter.Body.setStatic(mango.body, false);
	}

}



