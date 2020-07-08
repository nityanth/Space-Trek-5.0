var bg;
var bgImage;
function preload()
{
    bgImage = loadImage("mars_ground_img.jpg");
}
function setup(){
    createCanvas(displayWidth,850);
    bg = createSprite(displayWidth/2,800,displayWidth,100);
    bg.addImage(bgImage)
}
function draw(){
    background("black");
    bg.velocityX = -3;
    bg.scale = 3;
    if(bg.x<0) {
        bg.x = displayWidth/2;
    }
    drawSprites();
}
