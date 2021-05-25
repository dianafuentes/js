var Person = function(eyeColor, hairColor, skinTone, n){
  this.name = n;
  this.eyeColor = eyeColor;  
  this.hairColor = hairColor;
  this.skinTone = skinTone; 
}

Person.prototype.speak = function(){
  return "Hi my name is " + this.name;
}

Person.prototype.describe = function(){
  return "Eye Color: " + this.eyeColor + "\nHair Color:" + this.hairColor + "\nSkin tone: " + this.skinTone;
}

var personOne = new Person("brown", "black", "brown", "Juan");
console.log(personOne.speak())
console.log(personOne.describe())

var personTwo = new Person("blue", "gray", "white", "sonia");
console.log("\n" + personTwo.speak())
console.log(personTwo.describe())