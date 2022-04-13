var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,100,50);

}

function draw() 
{
   background("blue");
   if (keyIsDown(RIGHT_ARROW)) {
     box.position.x +=5;
   }

   if (keyIsDown(LEFT_ARROW)) {
    box.position.x -=5;
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y -=5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y +=5;
  }
  drawSprites();
}




