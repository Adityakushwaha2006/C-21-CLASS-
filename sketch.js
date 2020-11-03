var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  object1=createSprite(200, 200, 50, 50);
  object2=createSprite(600,400,80,30);
  object3=createSprite(600,200,50,10);
  object4=createSprite(800,600,80,100);
}

function draw() {
  background("white");  

object2.y=World.mouseY
object2.x=World.mouseX

if( isTouching(object3,object2)){
  object3.shapeColor="red"
    object2.shapeColor="red"
    
}
else{
  object3.shapeColor="blue"
  object2.shapeColor="blue"
}

  drawSprites();
}
