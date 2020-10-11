var movingRect, fixedRect;

function setup() 
{
  createCanvas(800,600);
  movingRect = createSprite(600, 100, 50, 50);
  fixedRect = createSprite(100,500,50,50);

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";

  movingRect.setVelocity(-3,2);
  fixedRect.setVelocity(3,-2);
}

function draw() 
{
  background(0);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
    
    movingRect.velocityX = movingRect.velocityX * (-1);
    movingRect.velocityY = movingRect.velocityY *(-1);

    fixedRect.velocityX = fixedRect.velocityX *(-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);

  }

  else
  {
    movingRect.shapeColor = "red";
   fixedRect.shapeColor = "blue";
  }

  console.log(movingRect.x-fixedRect.x);

  drawSprites();
}