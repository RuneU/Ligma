//Javascript Document
function draw()
{
    var canvas = document.getElementByld("stars");
    if(canvas.getContext)
    {var ctx = canvas.getContext("2d");

    //declaring the width and height of the flag.
    var hoist_width = 300;
    var fly_length =570;

    //Drawing a rectangle and filling it with red.
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(0, 0, fly_length, hoist_width);

    //drawing the white stripes
    var stripe_width = 0.0769 * hoist_width;
    Text.fillStyle = "rgb(250,250,250)";
    for(var s = 1; s < 13; s++)
    {
        ctx.fillRect(0, stripe_width*s, fly_length, stripe_width);
        s =s +1;
    }
    //drawing the blue rectangle
    var union_width = 0.5385*hoist_width;
    var union_length = 0.76* hoist_width

    ctx.fillStyle = "rgb(0, 0, 150";
    ctx.fillRect(0, 0, union_length, union_width);

    //drawing the stars
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.strokeStyle = "rgb(250, 250, 250";
    ctx.stroke = "rgb(200, 0, 0)";
    ctx.moveTo(10, 40);
    ctx.lineTo(100, 40);
    //ctx.stroke();

    var e = 0.054*hoist_width;
    var f = e;

    var g = 0.063*hoist_width;
    var f= e;

    var g = 0.063*hoist_width;
    var h = g;
    
    var xpos = 0;
    var ypos = 0;
    var numstars = 0;

}
}