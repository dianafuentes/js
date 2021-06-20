let html = '';
let red;
let green;
let blue;
let randomRGB;


//repeated chunck of code

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">2</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">3</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">4</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">5</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">6</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">7</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">8</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">9</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">10</div>`;

document.querySelector('main').innerHTML = html;


// -----------------------------------------------------------

let html = '';
let red;
let green;
let blue;
let randomRGB; 

for ( let i = 1; i <= 10; i++){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">1</div>`; 
} 

document.querySelector('main').innerHTML = html; 

// ------------------------------------------ 
//remove the duplicated code and add a function 
/*
  1. create a function to create a function that returns a number from 0-255
*/

let html = '';

const randomValue = () => Math.floor(Math.random() * 256)

function randomRGB(value){
  const color = `rgb(${value()}, ${value()}, ${value()} )`;
  return color;
}

for ( let i = 1; i <= 10; i++){
  html += `<div style="background-color: ${randomRGB(randomValue)}">1</div>`; 
} 

document.querySelector('main').innerHTML = html; 
