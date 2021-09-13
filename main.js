canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

nasa_mars_imgs_array=[
    "mars.jpg",
    "nasa_img_1.jpg",
    "nasa_img_2.jpg",
    "nasa_img_3.jpg",
    "nasa_img_4.jpg",
    "nasa_img_5.jpg"];

random_image_number=Math.floor(Math.random()*6);

background_img=nasa_mars_imgs_array[random_image_number];
rover_img="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='37'){
        left();
        console.log("Left Key Pressed");
    }
    if (keyPressed=='38'){
        up();
        console.log("Up Key Pressed");
    }
    if (keyPressed=='39'){
        right();
        console.log("Right Key Pressed");
    }
    if (keyPressed=='40'){
        down();
        console.log("Down Key Pressed");
    }
}

function left()
{
    if (rover_x >= 10) {

        rover_x -= 10;
        console.log ("When Left arrow is pressed , x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if (rover_x <= 690) {

        rover_x += 10;
        console.log ("When Right arrow is pressed , x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function up()
{
    if (rover_y >= 10) {

        rover_y -= 10;
        console.log ("When Up arrow is pressed , x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down()
{
    if (rover_y <= 490) {

        rover_y += 10;
        console.log ("When Down arrow is pressed , x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}