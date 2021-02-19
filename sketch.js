const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ball,Ground;
var box1;
var box2;
var box3;
var box4;
var pig1;
var log1;
var pig2;
var box5;
var log2;
var log3;
var log4;
var log5;
function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

   box1=new box(700,320,70,70);
   box2=new box(920,320,70,70);
   box3=new box(700,240,70,70);
   box4=new box(920,240,70,70);
   box5=new box(810,160,70,70);

   Ground=new ground(600,height,1200,20);
   //Ground=new ground(1200,390,390,20);

   pig1=new pig (810,350);
   pig2 = new pig (810,220);

   log3 = new log(810,180,300,PI/2);
   log4 = new log(760,120,150,PI/7); 
   log5 = new log(870,120,150,-PI/7);
  // log2 = new log(810,180,300,PI/2);
   log1 = new log (810,260,300,PI/2); 
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
   

    Ground.display();
   
    pig2.display();
    pig1.display();
   
    log1.display();
    log5.display();
    log3.display();
    log4.display();

    box1.display(); 
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   
    log2.display();
}