function setup() {
    createCanvas(500, 500);
    background(135,206,235);
}

function draw() {
    
    // sun
    noStroke();
    fill(255,255,100);
    ellipse(100,100,100);
  
    // sand
    stroke(10)
    fill(255,205,120);
    rect(0, 450,500,50);

    //cactus
    noStroke()
    fill(35,117,67);
    rect(415, 275, 30, 180, 15 , 15, 3, 3);
    rect(385, 293, 25, 61, 12, 12, 0, 0);
    rect(385, 353, 31, 25, 0, 0, 0, 15);
    rect(450, 321, 25, 61, 12, 12, 0, 0);
    rect(444, 380, 31, 25, 0, 0, 15, 0);
}
