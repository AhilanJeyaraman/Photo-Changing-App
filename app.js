//Add 5 photos to an array
let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/AJ-0076.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'img/AJ-0078.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/AJ-0083.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'img/AJ-0084.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/AJ-0087.jpg';

//change the background of canvas when button is clicked
let button = document.getElementById('button1');

button.addEventListener('click', function(){
    //select a random number between 0 - 4
    let index = parseInt((Math.random()*imgArray.length)+1);
    //grab the canvas
    let canvas = document.getElementById('canvas');

    //canvas.style.background = `${colors[index]}`
    canvas.style.backgroundImage = `url(${imgArray[index].src})`;
})