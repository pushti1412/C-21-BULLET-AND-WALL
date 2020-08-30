var thickness, wall;
var speed, weight, bullet;
var height = 2000;


function setup() {
  createCanvas(1300,800);
  speed = random(120,210);
  weight = random(20,70);
  thickness = random(20,50);
  wall = createSprite(1200,250,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;
  bullet =createSprite(50, 200, 20, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  

}

function draw() 
{
  background("black");
  console.log("bullet param:" + weight + " " + speed + " " + thickness);  
  if(hasCollided(bullet,wall))  
   {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness);

    if(damage < 10)
     {
      wall.shapeColor = "green";
     }

     if(damage >= 10) 
     {
      wall.shapeColor = "red";
     }
     console.log("bullet damage:" + damage);
   }
    

    drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge)
   {
     return true
   }
   return false;
}




