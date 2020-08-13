var mario;
var ground,cockroach;
var mario_img,ground_img;

function preload(){
 mario_img=loadAnimation("mario.png","mario2.jpg","mario3.png");
 ground_img=loadImage("ground.png");
}

function setup() {
  createCanvas(800,400);
  mario=createSprite(30, 300, 50, 50);
  ground=createSprite(400, 375, 800, 50);
  mario.addAnimation("mario",mario_img);
  ground.addImage(ground_img);


}


function draw() {
  background(0); 
  
  if (keyDown(UP_ARROW) && mario.y>280  ){
   mario.velocityY=-15;

  }
  mario.velocityY=mario.velocityY+1;
  mario.collide(ground); 
   
  if (keyWentDown(RIGHT_ARROW)){
    mario.velocityX=10;
   }

   if (keyWentUp(RIGHT_ARROW)){
    mario.velocityX=0;
   }

   if (keyWentDown(LEFT_ARROW)){
    mario.velocityX=-10;
   }

   if (keyWentUp(LEFT_ARROW)){
    mario.velocityX=0;
   }
   camera.position.x=mario.x;

   ground.x=ground.width/2
   
   console.log(mario.y);


  drawSprites();
}