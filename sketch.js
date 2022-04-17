// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeX2 = 15;
var shapeY2 = 75;
var shapeX2speed;
var shapeY2speed;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{

    background(120,45,78);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,40,123);
    circle(characterX,characterY,25);

    moveplayer()

  

enemy1()

    // potential enemy
    fill(13,145,14);
    // draw the shape
    circle(shapeX, shapeY, 10);

    // potential enemy
  function enemy1() { fill(13,60,14)};
    // draw the shape
    circle(shapeX2, shapeY2, 20);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    // get a random speed when the it first starts
    shapeX2speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY2speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

   // move the shape
   shapeX2 += shapeX2speed;
   shapeY2 += shapeY2speed;
   // check to see if the shape has gone out of bounds
   if(shapeX2 > width)
   {
       shapeX2 = 0;
   }
   if(shapeX2 < 0)
   {
       shapeX2 = width;
   }
   if(shapeY2 > height)
   {
       shapeY2 = 0;
   }
   if(shapeY2 < 0)
   {
       shapeY2 = height;
   }
    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
  function Youwin()
  {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function moveplayer(){

  // handle the keys
  if(keyIsDown(w))
  {
      characterY -= 10;
  }
  if(keyIsDown(s))
  {
      characterY += 10;
  }
  if(keyIsDown(a))
  {
      characterX -= 10;
  }
  if(keyIsDown(d))
  {
      characterX += 10;
  }
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
