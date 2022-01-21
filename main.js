leftWrist_x=0;
left_y=0;

right_x=0;
right_y=0;

function preload()
{
    brush=loadImage("9.png")
    mouth=loadImage("u.jpg")
}

function setup()
{
    video=createCapture(VIDEO)
    video.size(350,350)
    video.position(1000,-50)

    canvas=createCanvas(550,550)
    canvas.position(400,150)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw()
{
    background("black")

    image(mouth,right_x,right_y,150,150)
    image(brush,leftWrist_x,left_y,150,150)
}

function modelLoaded()
{
    console.log("model is loaded")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)

        leftWrist_x=results[0].pose.leftWrist.x
        left_y=results[0].pose.leftWrist.y

        right_x=results[0].pose.rightWrist.x
        right_y=results[0].pose.rightWrist.y
    }
}




