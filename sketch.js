var box
function setup() {
  createCanvas(400,400);
   box = createSprite (300,300,10,10);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +3
  }
  drawSprites();


}




