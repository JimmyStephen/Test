//get canvas id
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//changing size
canvas.width = 150;
canvas.height = 150;

drawText = (QNum) => {
    //setting text color
    ctx.fillStyle = '#FFF';
    //setting font and text size
    ctx.font = '10px Arial';
    //setting the text and start location
    //(text, start x, start y)
    //originates from the start points going up
    ctx.fillText('Answer 1', 0 , 150);
    ctx.fillText('Answer 2', 50, 150);
    ctx.fillText('Answer 3', 100, 150);
    ctx.fillText(`Question ${QNum}`, 50, 10);
}

drawGraph = (A1, A2, A3) => {
    //get total
    let total = A1 + A2 + A3;
    let A1Percent = (A1 / total);
    let A2Percent = (A2 / total);
    let A3Percent = (A3 / total);

    console.log("A1: " + A1Percent);
    console.log("A2: " + A2Percent);
    console.log("A3: " + A3Percent);
    console.log("Total: " + (A3Percent + A2Percent + A1Percent));

    //setting the rect color
    ctx.fillStyle = '#405';

    //draw rectangles
        //a1
        ctx.fillRect(110,A1Percent * canvas.height,20,150);
        //a2
        ctx.fillRect(60,A2Percent * canvas.height,20,150);
        //a3
        ctx.fillRect(10,A3Percent * canvas.height,20,150);
}

drawGraph(10,25,50);
drawText(1);