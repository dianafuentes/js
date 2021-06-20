https://javascript.info/array-methods



-  an array is a "data structure" that provides a way to store and organize data.
  is a way of storing more than one value in a single place 
  think of it as a list of items, like a shopping list 
- an array is a flexible method of storing sequences of values 
- it can hold a single string, numbers, or any combination of data types, strings, numbers, Booleans and even other arrays 

1. start by declaring a variable 
    const variableName = [];

    const planets = [
      'Mercury',
      'Venus',
      'Earth', 
      'Mars'
    ]; 

- Usually when you want to display the contents of a variable you usually call the variable name in the console.log 
  but the name in the array doesnt quite represent a single value. 
  its a list of multiple values or as they formally called array elements. 
- To access a single element within an array, you use whats called an index value 
  * Index = which is a number that indicates the position of an element in an array. 
**** an array is like a numbered list, to get an item in the list. You need to call the number of the item you want to access.
- Arrays are zero based or zero index 
      const planets = [
        'Mercury',
        'Venus',
        'Earth', 
        'Mars'
      ]; 

      console.log(planets[0]);
      console.log(planets[1]);
      console.log(planets[2]);
      console.log(planets[3]); 

ADD ELEMENTS TO AN ARRAY 
- Find the number of elements in an array or find the length of the array 
    Use the length property and returns the number of element in an array. 

    const instruments = ['piano','drums','trumpet'];
    instrurments.length 
    let message = 'I play ${instruments.length} instruments!'; 

push() method adds one or more elements to the end of an array and returns the new length of the array  
  
  const instruments = ['piano', 'drums', 'trumpet'];
  instruments.push('guitar', 'violin', 'triangle'); 


unshift() method adds one or more elements to the beginning of an array and returns the new length of the array 

  const instruments = ['piano', 'drums', 'trumpet'];
  instruments.push('guitar', 'violin', 'triangle'); 
  instruments.unshift('cowbell', 'tuba'); 

pop() method removes the last element from an array and returns that element. this method changes the length of the array 

shift() method removes the first element from an array and returns that removed element. think of it like a line 

      const numbers = [100,200, 300, 400, 500];
      numbers.push(600);
      const numbers = [100,200, 300, 400, 500, 600];
      //remove item remember the pop method only returns the last item removed and does not take an argument 
      numbers.pop()
      600
      numbers.unshift()
      0
      numbers.shift()
      (5) [100, 200] 

<bCHALLANGE/b>
The array assigned to the variable 'orderQueue' contains a list of order numbers. Declare a new variable named 'shipping'. Remove the first element from the 'orderQueue' array and assign it to 'shiiping' variable 
    spread operator creates a copy of the original array.

    const orderQueue = ['1XT567437','1U7857317','1I9222528'];
    const shipping = orderQueue.shift(); 

<b COPY n COMBINE ARRAYS WITH THE SPREAD OPERATOR /b>

Spread operator a special syntax JavaScript provides to build, combine and manipulate arrays quickly and more seamlessly. 

    const middle = ['lettuce', 'cheese', 'patty'];
    const burger = ['top bun', 'bottom bun']; 

    //two dimensional array 
    const middle = ['lettuce', 'cheese', 'patty'];
    const burger = ['top bun', middle, 'bottom bun']; 
    // it returns ['toop bun', Array(3), 'bottom bun']


    //with the sread operator you pass only the values of the current array to another array
    //spread operator is used by placing 3 dots follwed by the name of the array
    const middle = ['lettuce', 'cheese', 'patty'];
    const burger = ['top bun', ...middle, 'bottom bun']; 
    // it returns 
    ['top bun', 'letuce', 'cheese', 'patty', 'bottom bun']
    burger.length
    5 

    const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
    const woodwind = ['flute', 'oboe', 'clarinet', 'saxiphone', 'bassoon'];
    const instruments = [...brass, ...woodwind]; 


Math.max() function returns the larget number from a set of number values passed to it.  
Math.min() function returns the lowest n umber from the array 

  console.log(Math.max(...name of array));


QUiZ
1. which of the following places the contents of one array to another array? 
  spread operator (...) 
2. which array method returns the first element from an array and removes it from the array
  shift() 
3. which array method adds an element to the end of an array? 
  push()
4. can you sue the push() method to add more than one element to an array at the same time? 
  yes, you can use push() to add any number of elements to the end of an array.  

USING A FOR LOOP TO ITERATE OVER AN ARRAY 
The for loop provides one way to loop (or iterate) through the elements in an array. 

  const students = ['Lee', 'Jan','Mali', 'Sariah'];
  for (let i = 0; i < 4; i++){
    console.log();
  }
//cant always be sure that the array will always have 4 items
so you change
  const students = ['Lee', 'Jan','Mali', 'Sariah'];
  for (let i = 0; i < students.length; i++){
  console.log();
}

how to access and display each student? 
  const students = ['Lee', 'Jan','Mali', 'Sariah'];
  for (let i = 0; i < 4; i++){
    console.log(students[i]);
  } 

LOOP THROUGH AN ARRAY 
      const playlist = [
        'So What',
        'Respect',
        'What a Wonderful World',
        'At Last',
        'Three Little Birds',
        'The Way You Look Tonight'
      ]; 


      function createListItems(arr){
        //items will hold the list items and initilize it to an empty string
        let items = '';
        //for loop that iterates throguh the elements in the array passed to this function
        for(let i = 0; i < arr.length; i++){
          //create HTML items 
          //within the loop we use the addition assignment operator and template literal to add a set of i tags 
          items += `<li>${arr[i]}</li>`;
        }
        return items;
      }

      //display the items in an ordered HTML list 
      document.querySelector('main').innerHTML = `
        <ol> 
          ${createListItems(playlist)}
        </ol>
      `; 

In the following example, a for loop accesses each number in the scores array and adds it to the current value of total. When the loop completes, the console displays the average score by dividing the value of total by the length of the scores array.

      const scores = [ 20, 50, 75, 100, 115 ];
      let total = 0;

      for ( let i = 0; i < scores.length; i++ ) {
        total += scores[i];
      }

      console.log( total / scores.length );


Array Methods 

join() 
  method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator

includes()
EXAMPLE = arr.includes(itemToFind)
  method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It is case sensative

indexof()
EXAMPLE = arr.indexof(searchElement)
  method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  It finds or locates the position of an element in the array  

                const daysInWeek = [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ];

                daysInWeek.join(', ');

                const fruit = [
                  'apple', 
                  'orange', 
                  'grapefruit', 
                  'pineapple', 
                  'strawberry'
                ];

                fruit.includes('apple');
                fruit.indexOf('apple');
                fruit.indexOf('pear');

---------------------------------------------------------------------------------------------
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message; 

//check if item is in stock 
if (inStock.includes(search) {
    message = `Yes, we have <strong>${search}</strong>.`;
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;
} 

document.querySelector('main').innerHTML = `<p>${message}</p>`; 
---------------------------------------------------------------------------------------------
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message; 

//check if any null or empty values
if (!search){
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;

}else if (inStock.includes(search.toLowerCase()) {
    message = `Yes, we have <strong>${search}</strong>. It's  #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`; 
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;
} 

document.querySelector('main').innerHTML = `<p>${message}</p>`;
---------------------------------------------------------------------------------------------- 

Why repeat search.toLowerCase() vs. assigning it to a variable and reusing it? For example:

const search = prompt('Search for a product.');
const searchText = search.toLowerCase();

inStock.includes(searchText);
inStock.indexOf(searchText);

If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null. The JavaScript interpreter throws an error when you call toLowerCase() on a returned null value -- there's nothing to convert to lowercase:

const search = prompt('Search for a product.');
const searchText = search.toLowerCase();
// Uncaught TypeError: Cannot read property 'toLowerCase' of null

Following is another way you might convert the value assigned to search to all lowercase. If search points to a truthy value (not null, for example), then convert it to lowercase:

const inStock = [ ... ];
let message;
let search = prompt('Search for a product.');

if ( search ) {
  search = search.toLowerCase();
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

That way, you don't have to repeat calling toLowerCase() in the conditional.
A different approach with only indexof()

There's another way you might write the product search without having to use includes() to check whether the inStock array includes a specific value. Remember, indexOf() returns the index of a given element inside an array, or -1 if it's not present.

First, pass the search value to indexOf(). In the else if clause, check if the product index is not -1. Then use the value of productIndex + 1 to display the product's number in the list:

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let productIndex;
let message;

if ( search ) {
  search = search.toLowerCase();
  productIndex = inStock.indexOf(search);
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( productIndex !== -1 ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${productIndex + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

-------------------------------------------------------------------------------------------- 
What is a multidimensinal array? 
  is an array within another array or two dimensional array  

const grades = [
  [80, 90, 100, 95],
  [75, 95, 85, 100], 
  [60, 80, 77, 90]
]; 

to access student 1 grades  
  grades [0][3]

const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];
------------------------------------------------------------------------
const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

//const myArtist = `${playlist[0][1]}, ${playlist[1][1], ${playlist}[5][1]}`;
//
//console.log(myArtist);


function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0]}, by ${ arr[i][1]} - ${arr[i][2]}</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`; 

------------------------------------------------------------------------
Build a quiz challange 

The return value of the prompt() method is always a string. If your question answers are numeric values, you'll need to convert the value of the response variable to a number, otherwise the condition will always evaluate to false.

The unary plus operator (+) provides a quick way of converting a string to a number. Place a plus symbol just before the response variable:

if ( +response === answer ) { 
  ... 
}
------------------------
// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];



// 2. Store the number of questions answered correctly 
const correct = [];
const incorrect = [];
let correctAnswers = 0; 


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for(let i = 0; i < questions.length; i++){
  let question = questions [i][0];
  let answer = questions[i][1];
  let response = prompt(question); 
  
  if(response === answer){
    correctAnswers++;
    correct.push(question); 
  } else {
    incorrect.push(question);
  
  }
} 

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}


// 4. Display the number of correct answers to the user 
let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <o>${createListItems(correct)}</ol>
    
    <h2>You got these questions wrong:</h2>
    <o>${createListItems(incorrect)}</ol>
`; 
document.querySelector('main').innerHTML = html;