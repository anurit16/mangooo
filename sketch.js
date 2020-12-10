
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone,mango1,mango2,mango3,mango4,mango5,tree;
var slingShot; 
function preload()
{
    boy=loadImage("boy.png");
     stone=loadImage("stone.png");
     mango1=loadImage("mango.png");
     tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      stone=new Stone(75,440,20);
      mango1=new Mango(700,200,20);
      mango2=new Mango(750,220,20);
      mango3=new Mango(780,280,20);
      mango4=new Mango(680,300,20);
      mango5=new Mango(650,200,20);
      mango6=new Mango(830,300,20);
      mango7=new Mango(1000,200,20);
      mango8=new Mango(900,210,20);

      // boy = new Boy(115,580,300,300);
       ground = new Ground(550,650,1100,10);
      // tree = new Tree(850,350,500,600);
      slingShot = new SlingShot(stone.body,{x:145,y:440});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 // drawSprites();
// tree.display();
 image(tree,550,50,500,600);

 //boy.display();
 image(boy,120,380,200,300);

 slingShot.display();
 stone.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();



 ground.display();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
 function detectCollision(stone,mango){
   mangoBodyPosition = mango.body.position;
   stoneBodyPosition = stone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=mango.radius+stone.radius){
     Matter.Body.setStatic(mango.body,false);
   }
//detectCollision(stone,mango1);

 }

 function keyPressed(){
   if(keyCode===32){
     Matter.Body.setPosition(stone.body,{x:235,y:420})
     slingShot.attach(stone.body);
   }
 }
