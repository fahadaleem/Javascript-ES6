// Destructuring 

// Destructuring is the new way to extract data from data structure like arrays or Objects.
// In ES5, We can access data from arrays like this

var person5 = ["John", 20];
var name5 = person5[0];
var age5 = person5[1];
console.log(name5);
console.log(age5);


// In ES6, We can access data from arrays like this

const person6 = ['Smith', 22];
const [name6, age6] = person6;
console.log(name6);
console.log(age6);


// In ES5, We can access data from Objects like this

var personObj5 = {
    firstName:"John",
    lastName:"Smith",
};
var fname = personObj5.firstName; 
var lname= personObj5.lastName;
console.log(fname);
console.log(lname);


// In ES6, We can access data from Objects like this

const personObj6 = {
    firstName:"Alex",
    lastName:"John",
};
const {firstName, lastName} = personObj6;
console.log(firstName);
console.log(lastName);

// Assign in your own variable like this
const {firstName:a, lastName:b} = personObj6;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

