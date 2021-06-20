A JavaScript object has properties and methods. 
  A property is like a variable that belongs to the object, and a method is something the object can "do," or that can be "done" to the object. 

METHODS
  .keys() = returns an array of a given objects property names 
  .values() = returns an array containing a given objects property values

JavaScript is also known as an object-based programming language 
JavaScript objects let you store data as what are called key value pairs or property value pairs 
    key : value 
    property : value 

key = variable 
object = item that holds multipole variables 
      1. assign an object literal 
        const student = {};
      2. add data inside the object 
        const student = {
          name: "Quincy", 
          grades: [85, 90, 95, 100]
        };

-----------------------------------------------------------------------------
CREAT FIRST OBJECT LITERAL


const person = {
  name: 'Edward',
  city: 'New York', 
  age: 37, 
  isStudent: true, 
  skills: ['JavaScript', 'HTML', 'CSS']
};
------------------------------------------------------------------------------
ACCESS OBJECT PROPERTIES  

const student = {
  name: 'Arnold',
  age: 24
};

1. first way to access 
  student['name']
2. Second way to access is using DOT NOTATION 
  student.name 

const person = {
  name: 'Edward',
  city: 'New York', 
  age: 37, 
  isStudent: true, 
  skills: ['JavaScript', 'HTML', 'CSS']
}; 

const message = `Hi, I'm ${person.name}. I live in ${person.city}`; 
console.log(message); 

---------------------------------------------------------------------
ASSIGN NEW VALUES TO VALUES 

const student = {
  name: 'Arnold',
  age: 24
};

student.name = 'Lizzie'; 
student.city = 'New Orleans';


const person = {
  name: 'Edward',
  city: 'New York', 
  age: 37, 
  isStudent: true, 
  skills: ['JavaScript', 'HTML', 'CSS']
}; 
person.nickname = 'Duke'
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.name = 'Duke'}. My age is ${person.age + 1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}`; 
//or 
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}`; 
console.log(message);  

-----------------------------------------------------
USE 'FOR IN' TO LOOP THROUGH AN OBJECT PROPERTIES 

`for in` = is a quick way to access each element in the array, or access data thats inside the object 
  it iterates or loops over each key or property name in object.  

  for...in loop to access each key (or property name) in an object.  

it looks like this... 

const student = {
  name: 'Jesse', 
  grades: [80, 85, 90, 95]
}; 
// the only way to access an objects properties using for in with JavaScript bracket notation
for(let key in sudent){
  console.log(student[propName]);
} 

console display: 
  Jesse 
  [80, 85, 90, 95] 

OR______


const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
}; 

//this displays all the properties(keys") in the person object 
for(let prop in person){
  console.log(prop);
}
 
//this displays all the properties(keys") in the person object, along with their values 
for(let prop in person){
  console.log(`${prop}: ${person[prop]}`);
}

----------------------------------------------------
Useful JavaScript Object Methods

You've learned that with for...in, you're able to loop (or iterate) over the properties of an object literal and access each property's value. For example:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

for ( let prop in person ) {
  console.log(prop);
}

The for...in loop above calls the console.log() method four times, returning the name of each property in the person object.

Similar to arrays, JavaScript objects have useful built-in methods for retrieving data from an object. In this step, we'll review the methods Object.keys() and Object.values(), both return an array containing an object's properties and values, respectively.
Object.keys()

The Object.keys() method returns an array containing the property names (or keys) of an object. Consider the following code:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);

> (4) ["name", "role", "skills", "isTeacher"]

Notice how the array returned by Object.keys(person) lists the property names in the order they appear inside the person object.
Check the length of an object

You learned that you use the length property to get the number of characters inside a string and return the number of elements inside an array. Object literals, however, do not have a length property. So if you wanted to check the length of an object (the number of properties inside it), calling person.length, for example, would return undefined.

Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object. For example:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4

Object.values()

The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. For example:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);

> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]

The array returned by Object.values(person) lists the property values of the person object.
The handy spread operator

In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (...).

You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:

const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);

{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}

In this case, the spread operator produces the same results as with arrays -- it merges the name and role objects into one person object.
Resources

    Object.keys() - MDN
    Object.values() - MDN 


-----------------------------------------------------
STORE OBJECTS IN ARRAYS 
Arrays let you group values to build complex data structures. With an array, you store a collection of elements you can access by their position (or index). Objects take that concept further by providing a way to structure related data that's easy to read and retrieve using key/value pairs. It's common to combine the two by creating an array of objects. 


// 1. Create an array to hold quiz questions and answers
//const questions = [
//  ['How many planets are in the Solar System?', '8'],
//  ['How many continents are there?', '7'],
//  ['How many legs does an insect have?', '6'],
//  ['What year was JavaScript created?', '1995']
//]; 
const questions = [
  {
   question: 'How many planets are in the Solar System?',
   answer: '8'
  },
  {
    question: 'How many continents are there?',
    answer: '7'
  },
  {
    question: 'How many legs does an insect have?', 
    answer: '6'
  },
  {
    question: 'What year was JavaScript created?',
    answer: '1995'
  }
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
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i].question;
  let answer = questions[i].answer;
  let response = prompt(question);
  
  if ( response === answer ) {
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
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html; 

---------------------------------------------------
Build an Object Challange 

loops, arrays, and objects to create a script that builds a pet directory, then displays it on the page.  
 SEE WORKSPACE 

QUIZ 

1. Given the following JavaScript object: 
  const student = {
    userName: 'Lee', 
    degree: 'FSJS',
    points: 14888
  }; 

  Which of the following displays the values 'Lee'. 'FSJS' and 14888 in the javascript console? 
  
  for (let prop in student){
    console.log(student[prop]);
  }

2. Can an array contain objects? Is the code below valid JavaScript? 
  const students = [
    {name: 'Resse, grade: 99'},
    {name: 'Eloise, grade: 88'}, 
    {name: 'Sanji, grade:80'}
  ];
  Yes. its common to store objects inside an array

