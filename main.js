noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(1000,200);

    video = createCapture(500,500);
    video.position(150 , 50);
    video.size(500,800);
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("posenet is working!!!");
}

function draw(){
    background('beige')
}

function gotPoses(results){

    if(results > 0){
        console.log(results);
    }
}