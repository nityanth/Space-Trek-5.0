var space_img;
var mars_img;
var spacecraft_img,spacecraft_img
var vehicle_img;
var vehicle;
var airballoon ;
var button;

function preload(){
  space_img = loadImage("space.jpg");
  mars_img = loadImage("mars_image.png");
  spacecraft_img = loadImage("spacecraft1.png");
 gif_earth = createImg("earth1.gif");
  vehicle_img = loadImage("launchvehicle.png");
  vehicle_img1 = loadImage("stage1.png");
  vehicle_img2 = loadImage("stage2.png");
  vehicle_img3 = loadImage("airballoon.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  mars = createSprite(displayWidth/2,500);
  mars.addImage(mars_img);
  mars.scale=2.8;
  //mars.debug=true;
  mars.setCollider("rectangle",0,0,500,50);
  ground = createSprite(displayWidth/2,650,displayWidth,10);
  ground.visible = false;
  //ground.debug=true;
 gif_earth.position(900,0);
  //gif_earth.debug = true;
  vehicle= createSprite(890,10);
  vehicle.addImage("stage1",vehicle_img);  
  vehicle.addImage("stage2",vehicle_img1);
  vehicle.addImage("stage3",vehicle_img2);
  //vehicle.addImage("stage4",vehicle_img3);
  vehicle.scale = 0.4;
  vehicle.velocityX = -2;
  spacecraft= createSprite(800,100);
  spacecraft.addImage("sp1",spacecraft_img);
  //spacecraft.addImage("sp2",vehicle_img3);

  spacecraft.scale = 0.5;
  spacecraft.visible = false;
  airballoon = createSprite(10,10,10,10);
  airballoon.visible = false;

 button =  createButton("explore mars");
 button.position(displayWidth/2,300);

 //document.getElementById("button").visibility="hidden";
}

function draw() {
  background(space_img);
  //spacecraft.x=mouseX;
  //spacecraft.y=mouseY;
  mars.velocityX = -2;
  
  if(mars.x<450){
    mars.x = displayWidth/2;
  }
  if( keyWentDown ("d")){
    vehicle.velocityX = 0;
    vehicle.changeImage("stage2");
    vehicle.scale = 2;
  }
  if( keyWentDown ("s")){
    vehicle.changeImage("stage3");
    vehicle.scale = 2;
    spacecraft.visible = true;
    spacecraft.x = vehicle.x-50;
    spacecraft.velocityY = 1;

  }

  if( keyWentDown ("r")){
    spacecraft.visible = false;
    //spacecraft.changeImage("sp2");
   
    airballoon.x=spacecraft.x;
    airballoon.y=spacecraft.y;
    airballoon.addImage(vehicle_img3);
    airballoon.visible = true;
    airballoon.velocityY = 1;
    airballoon.scale = 0.5;
  //airballoon.bounceOff(mars);
  //document.getElementById("button").style.visibility="visible";
    

  }
  if(airballoon.y>650){
    console.log("its working");
     airballoon.velocityY = -5;
   }
   airballoon.velocityY+= 0.5;

   button.mousePressed(()=>{
     location.replace("screen.html");
   })
  
  drawSprites();
}