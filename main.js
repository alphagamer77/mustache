function preload(){
}

function setup(){
canvas=createCanvas(400,400);
canvas.center(); 
video=createCapture(VIDEO);
video.size(400,400);
video.hide(); 

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
if(results.length > 0) {
console.log(results);
console.log("moustache x = " + results[0].pose.moustache.x);
console.log("moustache y = " + results[0].pose.moustache.y);    
}
}

function modelLoaded() {
console.log('PoseNet Is Initialized');    
}

function draw(){
image(0,0,400,400);    
}

function take_snapshot(){
save('myFilterImage.png');    
}