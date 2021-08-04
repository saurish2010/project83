var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
width=1;
var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_event="mousedown";
    

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    Current_Position_of_mouse_X=e.clientX-canvas.offsetLeft;
    Current_Position_of_mouse_y=e.clientY-canvas.offsetTop;
last_position_of_x=Current_Position_of_mouse_X;
last_position_of_y=Current_Position_of_mouse_y;
}

    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {

         last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    }
    canvas.addEventListener("touchmove", my_touchmove);
    
    function my_touchmove(e)
    {
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
if(width<992)
{
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}
