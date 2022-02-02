var box;




function setup() {
  createCanvas(400, 400);
  box=createSprite(50,20,30,30);
}
function draw() {
  //trex.debug = true;
  background(0);
  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+5;
  }
  else if(keyIsDown(LEFT_ARROW))
  {
    box.position.x=box.position.x-5;
  }
  drawSprites();
  
  
}
