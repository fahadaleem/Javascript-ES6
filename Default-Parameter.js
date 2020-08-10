// Default Parameter
// It is use to preset one or more variable of a function

// ES5
function Person5 (name, age, hometown){
    
    if(hometown===undefined)
    {
        hometown = "Paris";
    }
    this.name = name;
    this.age = age;
    this.hometown = hometown;
}


var john5 = new Person5("John",28); // If we not specify the parameter the hometown parameter set to Paris
console.log(john5);

var john55 = new Person5("John Smith",20,'UK');
console.log(john55);


// ES6
function Person6 (name, age, hometown='Paris') // Default Parameter
{ 
    this.name = name;
    this.age = age;
    this.hometown = hometown;
}

const john6 = new Person6('John Smith',25);
console.log(john6);