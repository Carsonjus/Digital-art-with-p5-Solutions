function setup() {
    createCanvas(500,500);
}


function draw() {
    fill("yellow")
    noStroke();
    circle(width/2,height/2,200);
    
    fill("white");
    stroke("black")
    stroke(10);
    circle(width/2-35,height/2-25,50);
    circle(width/2+35,height/2-25,40);
    
    fill("black");
    circle(width/2-35,height/2-25,25);
    circle(width/2+35,height/2-25,20);
    
    rect(width/2-50,height/2+40,100,20)
    
    triangle(width/2-50,height/2+40,width/2-50,height/2+60,width/2-60,height/2+50);
    triangle(width/2+50,height/2+40,width/2+50,height/2+60,width/2+60,height/2+50);
    
    fill("red");
    quad(width/2,height/2,width/2+20,height/2+10,width/2,height/2+20,width/2-20,height/2+10);
}
