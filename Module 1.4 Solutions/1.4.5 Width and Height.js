function setup(){
    createCanvas(500,400);
    background(134,206,235);
}

function draw() {
    
    //Draw the shapes
    //strokeWeight(5); //optional
    stroke(255,155,15);
    line(0,0,500,400);
    line(0,400,500,0);
    
    stroke(255,255,0);
    line(width/2,0,width/2,400);
    line(0,height/2,500,height/2);
    
    //Draw the sun last so it is up top
    fill(255,255,0);
    stroke(255,155,15);
    circle(width/2,height/2,200);

}
