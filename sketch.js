var monkey, monkeyimg, stoneimg, stonegroup, bananaimg, bananagroup;
var invisibleGround;
var jungleimg, jungle;
var count = 0;

function preload() {
  monkeyimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  jungleimg = loadImage("jungle.jpg")
  stoneimg = loadImage("stone.png")
  bananaimg = loadImage("banana.png")
  
}

function setup() {
  createCanvas(600, 400);
  //creating the variables 
   jungle = createSprite(200, 200);
 jungle.addImage(jungleimg)
  jungle.velocityX = -2;
  jungle.x = jungle.width / 2;

  monkey = createSprite(100, 350, 10, 10);
  monkey.addAnimation("monkey", monkeyimg)
  monkey.scale = 0.1;

 
  invisibleGround = createSprite(0, 400, 400, 10);
  invisibleGround.visible = false;
  bananagroup = new Group();
  stonegroup = new Group();
}

function draw() {
  background(250);

  if (jungle.x < 400) 
  {
    jungle.x = jungle.width / 2
  }

  if (keyDown("space")) 
  {
    monkey.velocityY = -12
  }

  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;

  //stop trex from falling down
  monkey.collide(invisibleGround);
  
 if (monkey.isTouching(bananagroup)) {
    monkey.scale = 0.2;
    count=count+2;
   bananagroup.destroyEach()
  }
if (monkey.isTouching(stonegroup)) {
   monkey.scale=0.1;

}
  
  switch (count) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18
      break;
    default:
      break;
  }

 
  banana();
  obstacle();

  drawSprites();
  textSize(20);
  fill("black");
   text("Score: " + count, 340, 15);
}

function banana() {
  if (frameCount % 80 === 0) {
    var banana1 = createSprite(600, 250, 40, 10)
    banana1.addImage("Banana", bananaimg)
    banana1.scale = 0.05;
    banana1.velocityX = -5
    //assign lifetime to the variable
    banana1.lifetime = 300;
    banana1.y = random(50, 250);
    bananagroup.add(banana1);
    
  }


}

function obstacle() {
  if (frameCount % 80 === 0) {
    var obstacle1 = createSprite(800, 350, 10, 40);
    obstacle1.addImage("Stone", stoneimg)
    obstacle1.scale = 0.15;
    obstacle1.velocityX = -6
    obstacle1.lifetime = 300;
    stonegroup.add(obstacle1);
   
  }
}
