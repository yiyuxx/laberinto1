var player, lowerWall, upperWall, leftWallup, rightWallup, leftWalldown, rightWalldown;


var horizontalLeft1, horizontalLeft2, horizontalLeft3, horizontalLeft4, horizontalLeft5,
horizontalLeft6, horizontalLeft7, horizontalLeft8, horizontalLeft9;
var horizontalRight1,horizontalRight2, horizontalRight3, horizontalRight4, horizontalRight5,
horizontalRight6, horizontalRight7, horizontalRight8, horizontalRight9;


var verticalLeft1, verticalLeft2, verticalLeft3, verticalLeft4;
var verticalRight1, verticalRight2, verticalRight3, verticalRight4;


var upperMiddle1, upperMiddle2, upperMiddle3, upperMiddle4, upperMiddle5, upperMiddle6, upperMiddle7;


var squareLeft1, squareLeft2;
var squareRight1, squareRight2;


var wallsGroup;


var badThing1,badThing2,badThing3,badThing4,badThing5,badThing6;
var bad1Img,bad2Img,bad3Img,bad4Img,bad5Img,bad6Img;
var bads;


var treasure1,treasure2,treasure3,treasure4;
var treasure1Img,treasure2Img,treasure3Img,treasure4Img;
var treasures;
var playerImg;
function preload(){
  treasure1Img=loadImage("./images/diam_blue.png");
  treasure2Img=loadImage("./images/treas1.png");
  treasure3Img=loadImage("./images/treas2.png");
  treasure4Img=loadImage("./images/diam_yellow.png");


  bad1Img=loadImage("./images/bad1.png");
  bad2Img=loadImage("./images/bad2.png");
  bad3Img=loadImage("./images/bad3.png");
  bad4Img=loadImage("./images/bad4.png");
  bad5Img=loadImage("./images/bad5.png");
  bad6Img=loadImage("./images/bad6.png");


  playerImg=loadImage("./images/woman.png");
}


function setup() {
  createCanvas(600, 400);
  badThings()
//Sprite del jugador
  player = createSprite(300, 200, 10, 10);
  player.addImage(playerImg);
  player.scale=0.2


//Límites del juego superior e inferior
  lowerWall= createSprite(300,395,1200,10);
  lowerWall.shapeColor="#F36C0F";
  upperWall= createSprite(550,5,1200,10);
  upperWall.shapeColor="#F36C0F";


//Límites extremo izquierdo
  leftWallup= createSprite(5,72,10,122);
  leftWallup.shapeColor="#44C96C";
  leftWalldown= createSprite(5,322,10,132);
  leftWalldown.shapeColor="#44C96C";


//Límites extremo derecho
  rightWallup= createSprite(595,72,10,122);
  rightWallup.shapeColor="#44C96C";
  rightWalldown= createSprite(595,322,10,132);
  rightWalldown.shapeColor="#44C96C";
 
// Paredes horizontales izquierdas
  horizontalLeft1 = createSprite(75,157,150,45);
  horizontalLeft1.shapeColor="#CAFDFF";
  horizontalLeft2 = createSprite(75,233,150,45);
  horizontalLeft2.shapeColor="#E963C2";
  horizontalLeft3 = createSprite(200,40,120,20);
  horizontalLeft3.shapeColor="#F13652";
  horizontalLeft4 = createSprite(195,115,50,20);
  horizontalLeft4.shapeColor="#F8B700";
  horizontalLeft5 = createSprite(270,150,40,20);
  horizontalLeft5.shapeColor="#1F9781";
  horizontalLeft6 = createSprite(63,290,30,25);
  horizontalLeft6.shapeColor="#823589";
  horizontalLeft7 = createSprite(117,325,30,25);
  horizontalLeft7.shapeColor="#823589";
  horizontalLeft8 = createSprite(210,295,100,20);
  horizontalLeft8.shapeColor="#F13652";
  horizontalLeft9 = createSprite(150,375,230,25);
  horizontalLeft9.shapeColor="#21C3D8";


//Paredes horizontales Derechas
  horizontalRight1 = createSprite(525,157,150,45);
  horizontalRight1.shapeColor="#CAFDFF";
  horizontalRight2 = createSprite(525,233,150,45);
  horizontalRight2.shapeColor="#E963C2";
  horizontalRight3 = createSprite(400,40,120,20);
  horizontalRight3.shapeColor="#F13652";
  horizontalRight4 = createSprite(410,115,50,20);
  horizontalRight4.shapeColor="#F8B700";
  horizontalRight5 = createSprite(330,150,40,20);
  horizontalRight5.shapeColor="#1F9781";
  horizontalRight6 = createSprite(535,290,30,25);
  horizontalRight6.shapeColor="#823589";
  horizontalRight7 = createSprite(481,325,30,25);
  horizontalRight7.shapeColor="#823589";
  horizontalRight8 = createSprite(390,295,100,20);
  horizontalRight8.shapeColor="#F13652";
  horizontalRight9 = createSprite(450,375,230,25);
  horizontalRight9.shapeColor="#21C3D8";


//Paredes verticales izquierdas
  verticalLeft1 = createSprite(190,200,20,90);
  verticalLeft1.shapeColor="#44C96C";
  verticalLeft2 = createSprite(240,200,20,120);
  verticalLeft2.shapeColor="#1F9781";
  verticalLeft3 = createSprite(90,307,25,60);
  verticalLeft3.shapeColor="#823589";
  verticalLeft4 = createSprite(180,348,25,30);
  verticalLeft4.shapeColor="#F8B700";


//Paredes verticales derechas
  verticalRight1 = createSprite(410,200,20,90);
  verticalRight1.shapeColor="#44C96C";
  verticalRight2 = createSprite(360,200,20,120);
  verticalRight2.shapeColor="#1F9781";
  verticalRight3 = createSprite(508,307,25,60);
  verticalRight3.shapeColor="#823589";
  verticalRight4 = createSprite(420,348,25,30);
  verticalRight4.shapeColor="#F8B700";
 
//Sprites medios
  upperMiddle1 = createSprite(300,32,20,45);
  upperMiddle1.shapeColor="#E963C2";
  upperMiddle2 = createSprite(300,85,120,20);
  upperMiddle2.shapeColor="#D66A27";
  upperMiddle3 = createSprite(300,105,20,20);
  upperMiddle3.shapeColor="#D66A27";
  upperMiddle4 = createSprite(300,250,100,20);
  upperMiddle4.shapeColor="#1F9781";
  upperMiddle5 = createSprite(300,282,20,45);
  upperMiddle5.shapeColor="#1F9781";
  upperMiddle6 = createSprite(300,335,70,20);
  upperMiddle6.shapeColor="#F36C0F";
  upperMiddle7 = createSprite(300,360,20,30);
  upperMiddle7.shapeColor="#F36C0F";
 
//Sprites cuadros izquierda
  squareLeft1 = createSprite(75,73,80,80);
  squareLeft1.shapeColor="#865797";
  squareLeft2 = createSprite(165,65,50,30);
  squareLeft2.shapeColor="#F13652";


//Sprites cuadrados derecha
  squareRight1 = createSprite(525,73,80,80);
  squareRight1.shapeColor="#865797";
  squareRight2 = createSprite(435,65,50,30);
  squareRight2.shapeColor="#F13652";




//Creación de grupo
  wallsGroup = createGroup();


//Agrupar los elementos
  wallsGroup.add(lowerWall);
  wallsGroup.add(upperWall);
  wallsGroup.add(leftWallup);
  wallsGroup.add(rightWallup);
  wallsGroup.add(leftWalldown);
  wallsGroup.add(rightWalldown);
  wallsGroup.add(horizontalLeft1);
  wallsGroup.add(horizontalLeft2);
  wallsGroup.add(horizontalLeft3);
  wallsGroup.add(horizontalLeft4);
  wallsGroup.add(horizontalLeft5);
  wallsGroup.add(horizontalLeft6);
  wallsGroup.add(horizontalLeft7);
  wallsGroup.add(horizontalLeft8);
  wallsGroup.add(horizontalLeft9);
  wallsGroup.add(horizontalRight1);
  wallsGroup.add(horizontalRight2);
  wallsGroup.add(horizontalRight3);
  wallsGroup.add(horizontalRight4);
  wallsGroup.add(horizontalRight5);
  wallsGroup.add(horizontalRight6);
  wallsGroup.add(horizontalRight7);
  wallsGroup.add(horizontalRight8);
  wallsGroup.add(horizontalRight9);
  wallsGroup.add(verticalLeft1);
  wallsGroup.add(verticalLeft2);
  wallsGroup.add(verticalLeft3);
  wallsGroup.add(verticalLeft4);
  wallsGroup.add(verticalRight1);
  wallsGroup.add(verticalRight2);
  wallsGroup.add(verticalRight3);
  wallsGroup.add(verticalRight4);
  wallsGroup.add(upperMiddle1);
  wallsGroup.add(upperMiddle2);
  wallsGroup.add(upperMiddle3);
  wallsGroup.add(upperMiddle4);
  wallsGroup.add(upperMiddle5);
  wallsGroup.add(upperMiddle6);
  wallsGroup.add(upperMiddle7);
  wallsGroup.add(squareLeft1);
  wallsGroup.add(squareLeft2);
  wallsGroup.add(squareRight1);
  wallsGroup.add(squareRight2);


}




function draw() {
  background("#404040");
  //Condición para mover al jugador con flechas
  if(keyCode === UP_ARROW) {
    player.y = player.y -2;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +2;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -2;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +2;
  }


  drawSprites();
 
}


function badThings(){
  badThing1=createSprite(127,40,10,10);
  badThing1.addImage(bad1Img);
  badThing1.scale=0.2;
  badThing1.velocityY=-2



  badThing2=createSprite(300,65,10,10)
  badThing2.addImage(bad2Img)
  badThing2.scale=0.2
  badThing2.velocityX=-2


badThing3=createSprite(472,110,10,10)
 badThing3.addImage(bad3Img)
badThing3.scale=0.2
badThing3.velocityY=-2
badThing4=createSprite(145,350,10,10)
badThing4.addImage(bad4Img)
badThing4.scale=0.2
badThing4.velocityX=-2
badThing5=createSprite(300,318,10,10)
badThing5.addImage(bad5Img)
badThing5.scale=0.2
badThing5.velocityX=-2
badThing6=createSprite(560,353,10,10)
badThing6.addImage(bad6Img)
badThing6.scale=0.2
badThing6.velocityX=-2
}



