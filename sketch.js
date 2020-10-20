var car 
var wall
var speed 
var weight
var fixedrect,movingrect;
var fixedrect2,movingrect2;

function setup(){
  create canvas (1600,400);
fixedrect = createSprite(800,350,40,70);
fixedrect.shapeColor= "orange";
fixedrect.debug = true;

fixedrect2 = createSprite(600,90,40,65);
fixedrect2.shapeColor = "blue";
fixedrect2.debug = true;

movingrect = createSprite(400,30,20,88);
movingrect.shapeColor = "red";
movingrect.debug = true;

movingrect2 = createSprite(400,200,20,88);
movingrect2.shapeColor = "grey";
movingrect2.debug = true;

}

function draw(){
  background(0,0,0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  movingrect2.x = World.mouseX;
  movingrect2.y = World.mouseY;

  if(isTouching()){
   movingrect.shapeColor = "darkblue";
   movingrect2.shapeColor = "darkblue";
   
   fixedrect.shapeColor = "green";
   fixedrect2.shapeColor = "green";

  }
else{
  movingrect.shapeColor = "darkblue";
  movingrect2.shapeColor = "darkblue";

  fixedrect.shapeColor = "green";
  fixedrect2.shapeColor = "green";
}
drawSprites();

}
function isTouching(){
if(movingrect.x-fixedrect.x<fixedrect.width/2 + movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2 + movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.width/2 + movingrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.width/2 + movingrect.width/2
  &&movingrect2.x-fixedrect2.x<fixedrect2.width/2 + movingrect2.width/2
  &&fixedrect2.x-movingrect2.x<fixedrect2.width/2 + movingrect2.width/2

  return true;
}
else{

}









