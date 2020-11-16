var tower,tower_Image;

var door,door_Image,doorGroup;

var climber,climber_Image,climberGroup;

var ghost,ghost_Image;

var invisibleblock,invisibleGroup;

var gameState="PLAY";

var spookySound;

function preload(){
  
  tower_Image=loadImage("tower.png");
  door_Image=loadImage("door.png");
  climber_Image=loadImage("climber.png");
  ghost_Image=loadImage("ghost-standing.png");
  
  spookySound=loadSound("spooky.wav");
  
}

function setup(){
  
  createCanvas(600,600);
  spookySound.loop();
  
  
  tower=createSprite(300,300);
  tower.addImage(tower_Image);
  tower.velocityY=1;
  
  doorGroup=new Group();
  climberGroup=new Group();
  invisibleGroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghost_Image);
  ghost.scale=0.3;
  
}

function draw(){
  
  background(0);
  
  if(gameState==="PLAY"){
    
    
    
  
  
  if(tower.y>400){
    
    tower.y=300; 
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5;
    
    
  }
  
  ghost.velocityY=ghost.velocityY + 0.5;
  
  if(keyDown("right_arrow")){
    
    ghost.x=ghost.x+3;
    
  }
  
  if(keyDown("left_arrow")){
    
    ghost.x=ghost.x-3;
    
    
  }
  
  if(climberGroup.isTouching(ghost)){
    
    ghost.velocityY=0;
    
    
  }
  
  if(invisibleGroup.isTouching(ghost) || ghost.y>600){
    
    ghost.destroy();
    gameState="END"
    
  }
  
  spawndoor();
  drawSprites();
  }
  
 if(gameState==="END") {
   
   stroke("yellow");
   fill("yellow");
   textSize(30);
   text("Game Over",250,250);
   
   
 }
  
  
}

function spawndoor(){
  
  if(frameCount% 240===0){
    
    

  
  door=createSprite(200,-50);
  door.addImage(door_Image);
  door.velocityY=1;
  door.x=Math.round(random(120,400));
    door.lifetime=600;
    doorGroup.add(door);
    
    climber=createSprite(200,10);
    climber.addImage(climber_Image);
    climber.velocityY=1;
    climber.x=door.x;
    climber.lifetime=600;
    climberGroup.add(climber);
    
    
    
    door.depth=ghost.depth;
    ghost.depth+=1;
    
      invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.x=door.x;
    invisibleblock.velocityY=1;
    invisibleblock.debug=true;
    invisibleGroup.add(invisibleblock);
}
}