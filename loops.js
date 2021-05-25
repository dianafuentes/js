function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

const peopleInLine = [];

peopleInLine.push(new Person('Diana'));
console.log(`Added ${peopleInLine[peopleInLine.length - 1].getName()}`);
peopleInLine.push(new Person('Juan'));
console.log(`Added ${peopleInLine[peopleInLine.length - 1].getName()}`);

// this runs at least once!!!! before going into a loop.
do{
  // console.log(typeof peopleInLine.shift(), `print first item. ${peopleInLine[0]}`);
  if (peopleInLine[0]) {
    console.log(`Hi we attended : ${peopleInLine[0].getName()}`);
  }
  peopleInLine.shift();
}
// truthy
while(peopleInLine.length);
console.log(peopleInLine);
