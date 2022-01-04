function preload(){
}

function setup(){
    canvas=createCanvas(1000,460);
    canvas.position(430,250);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    stroke(0);
    fill(250, 238, 182)
    rect(0, 20, 1000, 440);

    image(video,150,50,700,380);

    noStroke();
    fill(0,200,220);
    ellipse(500,50,1200,8);

    fill(172, 51, 232);
    noStroke();
    circle(100, 50, 30);
    circle(160, 50, 30);
    circle(220, 50, 30);
    circle(280, 50, 30);
    circle(340, 50, 30);
    circle(400, 50, 30);
    circle(460, 50, 30);
    circle(520, 50, 30);
    circle(580, 50, 30);
    circle(640, 50, 30);
    circle(700, 50, 30);
    circle(760, 50, 30);
    circle(820, 50, 30);
    circle(880, 50, 30);

    noStroke();
    fill(0,200,220);
    ellipse(500,430,1200,8);

    fill(172, 51, 232);
    noStroke();
    circle(100, 430, 30);
    circle(160, 430, 30);
    circle(220, 430, 30);
    circle(280, 430, 30);
    circle(340, 430, 30);
    circle(400, 430, 30);
    circle(460, 430, 30);
    circle(520, 430, 30);
    circle(580, 430, 30);
    circle(640, 430, 30);
    circle(700, 430, 30);
    circle(760, 430, 30);
    circle(820, 430, 30);
    circle(880, 430, 30);
}

function take_snapshot(){
    save ("MyImage.png")
}