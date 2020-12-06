function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550, 550);
    canvas.position(560, 300);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function draw() {
    background('#cee8e4');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}