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
        {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
        {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
        {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
        {'fillStyle' : '#e7706f', 'text' : 'Segment 4'},
        {'fillStyle' : '#eae56f', 'text' : 'Segment 5'},
        {'fillStyle' : '#89f26e', 'text' : 'Segment 6'},
        {'fillStyle' : '#7de6ef', 'text' : 'Segment 7'},
        {'fillStyle' : '#e7706f', 'text' : 'Segment 8'}
    ],
    'pins' : {
        'number' : 4,
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