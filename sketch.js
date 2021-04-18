var mouse,mouseImg,mouseA;
var cat,catImg,catA,cat4;
var bgImg;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catA = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseA = loadAnimation("images/mouse2.png","images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700);
    cat.addImage("meow",catImg);
    cat.scale = 0.1;

    mouse = createSprite(100,700);
    mouse.addImage("meow",mouseImg);
    mouse.scale = 0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("meow4", cat4);
        cat.x =300;
        cat.changeAnimation("meow4");
        mouse.addAnimation("mouselastImg", mouseImg);
        mouse.changeAnimation("mouselastImg");
    }  
    
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here


        if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouse1.png",mouseImg);
        mouse.changeAnimation("mouse2.png");
        mouse.frameDelay = 25;
    }
   
         if(keyCode === LEFT_ARROW){
         cat.velocityX = -5;
         cat.addAnimation("catmeow",catA);
         cat.changeAnimation("catmeow");
         mouse.addAnimation("MICE",mouseA);
         mouse.changeAnimation("MICE");
         mouse.frameDelay = 25;
    }
    }
