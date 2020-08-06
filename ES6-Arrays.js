// Arrays in ES6

// The concept of arrays is same but there is few new things in arrays. 
// 1- Addition of another useful loop name "ForOf"
// 2- Addition of two new useful methods named "findIndex" and the other one is "find"

// We can not use 'break' or 'continoue in forEach or map loops. So, we have new powerful loop called 'forOf' 

// We have an array of some ages we want to check which is the full age

// Full age is when the age is equal or greater than 18.

var ageArrays5 = [12,17,16,21,15,14];

// ES5
// We will check which is the fullage

var fullAge = ageArrays5.map(function(cur){
    return cur>=18});


// Print FullAge Array
console.log(fullAge);

// Retrive index of true value
console.log(fullAge.indexOf(true));

// Retrive data which is true
console.log(ageArrays5[fullAge.indexOf(true)]);


// Now, do same thing in ES6
// ES6

// Retrive index of full age
console.log(ageArrays5.findIndex(cur=>cur>=18));

// Retrive data which is true;
console.log(ageArrays5.find(cur=>cur>=18));


// Example of ForOf Loop

// Get all color boxes

const boxes = document.querySelectorAll(".box"); // This will return a nodeList

// To convert in array we use in ES5

var boxArrays5 = Array.prototype.slice.call(boxes); 


// To convert in array we use in ES6
const boxArrays = Array.from(boxes);

// Change the background color of boxes with forEach Loop
// We can not use break or continoue in forEach Loop
boxArrays.forEach(function(curr) {
    curr.style.backgroundColor = "dodgerblue";
});


// Now change box textcontent with forOf loop.
// We can use break or continoue in forOf Loop
for(const curr of boxArrays)
{
    if(curr.className.includes("blue"))
    {
        continue;
    }
    curr.firstElementChild.textContent = "I am changed to blue!";
}