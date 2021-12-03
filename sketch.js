
var trex ,trex_running;
var ground,groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,10,40);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground  = createSprite(300,190,600,5);
  ground.addImage(groundImage);
  ground.velocityX = -10;
}

function draw(){
  background("lightblue");

  if(keyDown("space")){
    trex.velocityY = -12;
  }

  if(ground.x<0){
    ground.x = ground.width/2
  }

  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);
  drawSprites();
}
