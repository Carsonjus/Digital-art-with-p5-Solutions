function setup(){
    createCanvas(500, 500);
    background(114,136,105); //This is more accurate to the color shown on the image but the orginal colors also work

}


function draw() {
    
    // background circle
    fill(134,136,135);
    ellipse(300,275,400,400);
  
    // walls
    line(400, 400, 400, 0);
    line(0, 400, 400, 400);
    line(400, 400, 500, 500);
    
    // body
    beginShape();
    fill(235,139,22);
    curveVertex(275, 280);
    curveVertex(275, 280);
    curveVertex(269, 310);
    curveVertex(251, 368);
    curveVertex(259, 425);
    curveVertex(296, 450);
    curveVertex(325, 380);
    curveVertex(295, 270);
    curveVertex(295, 270);
    endShape();
    
    // blue figure
    fill(44,95,114);
    ellipse(350,420,125,150);
    
    // right side of face
    fill(68,60,21);
    ellipse(320,275,130,110);
    
    // left side of face
    fill(235,139,22);
    ellipse(250,250,130,150);

    // nose
    fill(159,114,119);
    bezier(230,235,250,400,285,135,340,250);
    
}
