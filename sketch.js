const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, myworld;
var box1, box2, box3, box4, box5, box6, box7, box8;

function preload(){
    bgimg = loadImage("construction.jpg")
}
function setup(){
    createCanvas(1600, 900);
    engine = Engine.create();
    myworld = engine.world;
    ground = new Ground();
    box1 = new Box(700);
    box2 = new Box(700);
    box3 = new Box(700);
    box4 = new Box(700);
    box5 = new Box(700);
    box6 = new Box(700);
    box7 = new Box(700);
    box8 = new Box(700);
    box9 = new Box(700);
    box10 = new Box(800);
    box11 = new Box(800);
    box12 = new Box(800);
    box13 = new Box(800);
    box14 = new Box(800);
    box15 = new Box(800);
    box16 = new Box(800);
    box17 = new Box(900);
    box18 = new Box(900);
    box19 = new Box(900);
    box20 = new Box(900);
    ball = new Ball();
    rope = new Rope(ball.body, {x: 600, y: 300});
}

function draw(){
    background(bgimg);
    Engine.update(engine); //>:(
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}