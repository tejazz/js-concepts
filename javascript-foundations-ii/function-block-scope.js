// Function Scope 
// anything declared within a function has limited scope

// Block Scope
// let and const => enables block scope

function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);    // returns 'final 5'
}

function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);    // returns reference error
}
