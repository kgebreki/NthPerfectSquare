/*
 * Kaleb Gebrekirstos
 *
 * A visual argument for the sum of the first n odd numbers being n squared. 
 *
 * This visualizer was built using the p5.js library and most of the code was forked over from an open source repo:
 * https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js/09/9.15_p5.js_2D_Arrays/sketch.js
 */

let colors = [];
let rows = 0;
let cols = 0;

function make2Darray(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function init() {
  colors = make2Darray(rows, cols);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}

document.querySelector('.btn-sub').addEventListener('click', () => {
  const val = document.querySelector('.input').value;
  rows = parseInt(val);
  cols = parseInt(val);
  let valSqr = rows*rows;
  init();
  document.getElementById('box-1').textContent = `As we can see, the sum of the first 
  ${val} odd numbers is the ${val}'th perfect square which is equal to ${valSqr}.
  And, we can see that we have ${valSqr} cells in our matrix. QED... not really!`;
  redraw();
});

function setup() {
  createCanvas(600, 600);
  init();
  noLoop();  
}

function draw() {
  background(51);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = i * 30;
      let y = j * 30;
      fill(random(255), random(255), random(255));
      strokeWeight(4);
      stroke('rgba(0,255,0,0.25)');
      rect(x, y, 30, 30);
    }
  }
}