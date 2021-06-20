/*
This file will hold the program to read and display the pet data 
*/

const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < pets.length; i++ ) {
  //Using bracket notation to access one item in the pets array and assigning it to the variable PET
  // Which means the Pet variable will be assigned a new pet object each time the loop runs 
  // doing this allows the pet variable to be used in dot notation to acces the properties of each object 
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  `;
}

main.insertAdjacentHTML('beforeend', html);