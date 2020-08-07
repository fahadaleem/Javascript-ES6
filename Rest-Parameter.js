// Rest Parameter
// Rest parameter looks like spread operator but it works opposite to spread operator.

// Spread operator is use to expand an array but Rest parameter is use to bind arbitrary variables into an array


// ES5
// Function which accept arbitrary arguements in ES5

// Example 1

function calcFullAge(){
    console.log("ES5 Function without limit parameter");
    console.log(arguments); // arguments is the special type of variable that accept multiple arguments

    // To use the method of arrays in this list we have to convert this into array.
    var arr = Array.prototype.slice.call(arguments);

    // Check Full Age of values that are in the array
    arr.forEach(function(curr) {
        console.log(curr>=18);
    });
}
console.log(calcFullAge(23,20,21,22,12)); // This values combines in a argument lists.

// ES6
// In ES6, rest parameter accept multiple arguments and bind them in an array. We don't need to convert it in array.

const calcFullAge6 = (...age)=>{
    console.log("ES6 Function without limit parameter")
    console.log(age); // This is an array
    age.forEach(cur=>console.log(cur>=18));
}

console.log(calcFullAge6(21,22,21,10,19));


function calcFullAge55(limit){
    console.log("ES5 Function with limit parameter");
    console.log(arguments); // arguments is the special type of variable that accept multiple arguments

    // To use the method of arrays in this list we have to convert this into array.
    var arr = Array.prototype.slice.call(arguments,1); // Here 1 represents that start copying the array from index 1 because at index 0 there is limit value.
    console.log(arr);
    // Check Full Age of values that are in the array
    arr.forEach(function(curr) {
        console.log(curr>=limit); // We want to set the limit of fullAge
    });
}
console.log(calcFullAge55(22,23,20,21,22,12)); // This values combines in a argument lists.

// ES6
// In ES6, rest parameter accept multiple arguments and bind them in an array. We don't need to convert it in array.

const calcFullAge66 = (limit,...age)=>{
    console.log("ES6 Function with limit parameter");
    console.log(age); // This is an array
    age.forEach(cur=>console.log(cur>=limit)); // Here just use limit parameter.
}

console.log(calcFullAge66(20,21,22,21,10,19));

