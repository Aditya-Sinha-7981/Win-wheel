const spinButton = document.querySelector('#startSpin')

let theWheel = new Winwheel({
    'canvasId' : 'spinWheel',
    'numSegments' : 8,
    'fillStyle': '#e7706f',
    'lineWidth' : 3,
    'pointerAngle' : 0,
    'outerRadius'     : 200,
    'innerRadius'     : 120,             
    'textFontSize'    : 20,             
    'textMargin'      : 0, 
    'textFontFamily'  : 'Courier',
    'textAlignment' : 'outer',
    'textOrientation' : 'curved',
    'segments' : 
    [
        {'fillStyle' : '#f9ebe4', 'text' : 'Segment 1'},
        {'fillStyle' : '#fef6f5', 'text' : 'Segment 2'},
        {'fillStyle' : '#f9ebe4', 'text' : 'Segment 3'},
        {'fillStyle' : '#fef6f5', 'text' : 'Segment 4'},
        {'fillStyle' : '#f9ebe4', 'text' : 'Segment 5'},
        {'fillStyle' : '#fef6f5', 'text' : 'Segment 6'},
        {'fillStyle' : '#f9ebe4', 'text' : 'Segment 7'},
        {'fillStyle' : '#fef6f5', 'text' : 'Segment 8'}
    ],
    'pins' : {
        'number' : 8,
        'margin' : 0
    },
    'animation' :                  
    {
        'type'     : 'spinToStop',  
        'duration' : 5,            
        'spins'    : 8 ,             
        'callbackFinished' : 'alertPrize()'
    }
})

function alertPrize(){
    let winningSection = theWheel.getIndicatedSegment()

    console.log(winningSection.text)
}

let tcanvas = document.getElementById('spinWheel');
let tx = tcanvas.getContext('2d');

// drawTriangle()

function drawTriangle()
{
    tx.strokeStyle = '#000000';     
    tx.fillStyle   = 'aqua';        
    tx.lineWidth   = 2;
    tx.beginPath();                 
    tx.moveTo(175, 20);             
    tx.lineTo(235, 20);             
    tx.lineTo(205, 80);
    tx.lineTo(176, 20);
    tx.stroke();                   
    tx.fill();                      
}

spinButton.addEventListener('click', () => {
    theWheel.startAnimation()
})