// Spread Operator
// Spread operator is use to expand an array


// Example 1
// Calculate four ages in ES5
// ES5

function calcFourAge(a,b,c,d){
    return a+b+c+d;
}

console.log(calcFourAge(21,23,19,20));

// ES6

const ages = [21,10,29,21];
console.log(calcFourAge(...ages)); // a = 21, b = 10, c = 29, d = 21;

// Example 2
// You can use spread operator to combine two arrays

const smithFamily = ['John', 'Alex', 'Mary'];
const johnFamily = ['Bob', 'Doe','Cary'];
const fullFamily = [...smithFamily, ...johnFamily];
console.log(fullFamily);


// Example 3
// Use Spread Operator with nodeList

// get heading
const h1 = document.querySelector("h1");

// Get Boxes
const boxes = document.querySelectorAll(".box");

// Combine heading and boxes in single NodeList using spread operator
const domNodes = [h1, ...boxes];

// Convert domNodes NodeList to an array
const NodeArr = Array.from(domNodes);

// Mutate each element with forEach loop and change the text color
NodeArr.forEach(cur=>cur.style.color="purple");