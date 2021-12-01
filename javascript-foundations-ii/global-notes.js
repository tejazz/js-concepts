// Execution Context (EC)

/*
    Base context => global() EC

    Global Execution Context
    - Global Object
    - `this` keyword

    Phases (GEC)
    - Creation Step
*/

// Hoisting

console.log('1----');

// under the hood 
// => variables (only var) and functions would be allocated memory beforehand

var teddy = 'bear';

// function expression
var sing2 = function() {
    console.log('ohh la la la');
}

// function declaration
function sing() {
    console.log('ohh la la la');
}

// NOTE: Function expression is hoisted but the execution is not done until the EC reaches it
// Function declarations, on the other hand, are not only hoisted but also evaluated
