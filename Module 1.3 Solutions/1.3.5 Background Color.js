function setup() {
    createCanvas(500, 500);
    background(12,20,69);
    
    //These are the other solutions as well
    //background(76,64,142)
    //background(92,84,164)
    //background(56,40,92)
}

function draw() {

    // moon
    beginShape();
    vertex(250, 200);
    bezierVertex(350, 200, 330, 300, 250, 300);
    bezierVertex(315, 285, 315, 215, 250, 200);
    endShape();
}
