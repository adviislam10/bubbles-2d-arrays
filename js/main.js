// BUBBLE OPTIONS

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

// Global Variables
// 2D Array to store Bubble Data
let colorNames = ['red', 'green', 'blue', 'orange', 'magenta', 'purple']

let bubbles = [];
for (let n = 0; n < 50; n++) {
    bubbles.push([Math.randomDec(0, cnv.width), Math.randomDec(0, cnv.height), Math.randomDec(5, 30), Math.randomElement(colorNames)]);
}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble

    for (let i = 0; i < bubbles.length; i++) {
        // Move Bubbles
        bubbles[i][0] += Math.randomDec(-5, 5);
        bubbles[i][1] += Math.randomDec(-5, 5);

        // Draw Bubbles
        ctx.strokeStyle = bubbles[i][3];
        ctx.strokeCircle(bubbles[i][0], bubbles[i][1], bubbles[i][2]);

    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}