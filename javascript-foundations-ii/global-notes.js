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
// => variables (only var and let) and functions would be allocated memory beforehand

var teddy = 'bear';
function sing() {
    console.log('ohh la la la');
}
