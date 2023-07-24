difference = 0
rightwristX = 0
leftwristX = 0
noseX = 0
noseY = 0
function setup() {
   video = createCapture(VIDEO);
   video.size(550, 500);

   canvas = createCanvas(550, 500);
   canvas.position(560,150)

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet is initialized')
}

function draw(){
    background('#969A97');
    fill('#ffffcc')
    textSize(difference)
    text('Pranit', noseX, noseY)
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        difference=floor(leftwristX - rightwristX)
        console.log("left wrist x = " + leftwristX)
        console.log("right wrist x = " + rightwristX)
        console.log("difference = " + difference)
    }
}