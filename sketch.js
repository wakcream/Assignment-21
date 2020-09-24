var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,200,50,50);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  object1.x = World.mouseX;
  object1.y = World.mouseY;

  if(isTouching(object1, object2)){
    object1.shapeColor = "red";
    object2.shapeColor = "red";
  }
  else{
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  }

  bounceOff(movingRect, fixedRect);
  drawSprites();
}
