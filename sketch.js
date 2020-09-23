var wall, thickness; 
var bullet, speed, weight, damage;

thickness = random(22,83);

weight = random(30,52);
speed = random(223,321);

function setup(){
    wall = createSprite(1200,200,thickness, height/2);
}

function draw(){
    background(80,80,80);
    damage = ((0.5)(weight)(speeed))/((thickness)(thicknes)(thickness))
}