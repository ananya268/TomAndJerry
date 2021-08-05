var cat1, cat2, cat3, cat4; 
var c1, c2, c3, c4; 
var mouse1, mouse2, mouse3, mouse4;
var m1, m2, m3, m4; 
var tom; 
var jerry; 

var garden; 

function preload() {
    c1 = loadImage("images/cat1.png"); 
    c2 = loadImage("images/cat2.png");
    c3 = loadImage("images/cat3.png");
    c4 = loadImage("images/cat4.png");

    m1 = loadImage("images/mouse1.png"); 
    m2 = loadImage("images/mouse2.png");
    m3 = loadImage("images/mouse3.png");
    m4 = loadImage("images/mouse4.png");

    garden = loadImage("images/garden.png"); 
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600); 
    tom.addAnimation("tomSleeping", c1); 

    tom.scale = 0.2

    jerry = createSprite(200, 600); 
    jerry.addAnimation("jerryStanding", m1); 
    jerry.scale = 0.2
    
    

}

function draw() {

    background(garden);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) { 
        tom.velocityX=0; 
        tom.addAnimation("tomLastImage", c3); 
        tom.x =300; 
        tom.scale=0.2; 
        tom.changeAnimation("tomLastImage"); 
        jerry.addAnimation("jerryLastImage", m3); 
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage"); 
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){ 
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", m2); 
        tom.changeAnimation("tomRunning"); 
        jerry.addAnimation("jerryTeasing", m2); 
        jerry.frameDelay = 25; 
        jerry.changeAnimation("jerryTeasing"); 
    }


}
