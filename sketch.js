
var wall;
var speed,weight;
var thickness, bullet;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1450, 200,thickness, height/2);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor="white";

  thickness = random(30,83);
  speed=random(232,321);
  weight = random(30,52);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    
    bullet.velocityX = 0;

    bullet.velocityX=0;
   var damage = 0.5 *weight * speed* speed/(thickness *thickness *thickness);

    if(damage < 10){
     wall.shapeColor = "red";
    }
    if(damage > 10){
      wall.shapeColor = color(0,255,0);
    }

    
    }

drawSprites();
} 

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false
} 















