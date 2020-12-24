const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
 Engine.run(engine)
  ground= new Ground(500,450,1000,20);
  box1 = new Box(450,400,40,40);
  box2 = new Box(450,360,40,40);
  box3 = new Box(450,320,40,40);
  box4 = new Box(450,280,40,40);
  box5 = new Box(450,240,40,40);
  box6 = new Box(450,200,40,40);
  ball=  new Ball(200,250,20);
  chain= new Chain(ball.body,{x:200, y:150})
}

function draw() {
 background("black")
  

ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  chain.display();
}

function mouseDragged(){
 
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  chain.fly();
}
