var canvas=new fabric.Canvas("myCanvas")
block_width=30
block_height=30
player_y=56
player_x=25
var player_object=""
var block_object=""
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top: player_y,
            left: player_x
        });
    canvas.add(player_object)
    })
}
function block_update(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top: player_y,
            left: player_x
        });
    canvas.add(block_object)
    })
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypressed=e.keyCode
 console.log(keypressed)
 if (keypressed=="84") {
     console.log("T")
     block_update("trunk.jpg")
 }
 if (keypressed=="68") {
    console.log("D")
    block_update("dark_green.png")
}
if (keypressed=="76") {
    console.log("L")
    block_update("light_green.png")
}
if (keypressed=="71") {
    console.log("G")
    block_update("ground.png")
}
if (keypressed=="87") {
    console.log("W")
    block_update("wall.jpg")
}
if (keypressed=="89") {
    console.log("Y")
    block_update("yellow_wall.png")
}
if (keypressed=="85") {
    console.log("U")
    block_update("unique.png")
}
if (keypressed=="82") {
    console.log("R")
    block_update("roof.jpg")
}
if (keypressed=="67") {
    console.log("C")
    block_update("cloud.jpg")
}
if (keypressed=="69") {
    console.log("E")
    block_update("erase.png")
}
if (e.shiftKey==true && keypressed=="80") {
    console.log("P")
    block_width=block_width+10
    block_height=block_height+10
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if (e.shiftKey==true && keypressed=="77") {
    console.log("M")
    block_width=block_width-10
    block_height=block_height-10
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height
}
if (keypressed=="40") {
    console.log("down")
   down() 
}
if (keypressed=="39") {
    console.log("right")
   right() 
}
if (keypressed=="38") {
    console.log("up")
   up() 
}
if (keypressed=="37") {
    console.log("left")
   left() 
}
}
function left() {
    player_x=player_x-block_width
    canvas.remove(player_object)
    player_update()
}
function up() {
    player_y=player_y-block_height
    canvas.remove(player_object)
    player_update()
}
function right() {
    player_x=player_x+block_width
    canvas.remove(player_object)
    player_update()
}
function down() {
    player_y=player_y+block_height
    canvas.remove(player_object)
    player_update()
}