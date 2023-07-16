// define variables here


function setup(){
    
    createCanvas(500, 400);
    background(220, 208, 255);
    //Some students might mess up writing the variables here so make sure to guide properly
    
}


function draw(){
    var x = 100;
    var y = 200;
    var diameter = 75;
    
    // draw your circles here
    circle(x,y,diameter)
    circle(x*2,y,diameter)
    circle(x*3,y,diameter)
    circle(x*4,y,diameter)
}
