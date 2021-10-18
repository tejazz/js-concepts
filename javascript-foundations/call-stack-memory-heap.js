/*
    - call stack => where the program is at the current execution point
    - memory heap => allocation, release of memory resources for variables, functions, etc
*/

const number = 610; // allocate memory for number

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();

// callstack => FIFO mode
// callstack while running calculate() in browser 
//      => global execution context
//      => global execution context, calculate()
//      => global execution context, calculate(), subtractTwo()
//      => global execution context, calculate()        ....subtractTwo() resolved
//      => global execution context                     ....calculate() resolved
//      => [Final Output]
