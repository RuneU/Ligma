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
    var union_width
}
}