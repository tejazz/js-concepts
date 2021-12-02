// this is the object a function is a property of

const obj = {
    name: 'Billy',
    sing: function () {
        return 'lalala' + this.name     // this refers to the object 'obj' sing() is a property of
    },
    singAgain: function () {
        return this.sing() + '!'
    }
}

obj.sing();
obj.singAgain();

/*
    Benefits
    1. Gives methods access to their objects
    2. Execute same code for multiple objects
*/

function importantPerson() {
    console.log(this.name);
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson
}

importantPerson();          // Sunny
obj1.importantPerson();     // Cassy
obj2.importantPerson();     // Jacob

// Lexical Scope is not the same when it comes to usage of 'this'

const obj = {
    name: 'Billy',
    sing: function () {
        console.log('a', this);     // refers to object 'obj'
        function anotherFunc() {
            console.log('b', this);
        }

        anotherFunc();              // refers to the global object since it is called without specific context
    }
}

// arrows functions are lexically binding
const obj = {
    name: 'Billy',
    sing: function () {
        console.log('a', this);     // refers to object 'obj'
        var anotherFunc = () => {
            console.log('b', this);
        }

        anotherFunc();              // refers to object 'obj'
    }
}

// Call, Apply, Bind

const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
        return this.health = 100
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

console.log('1', archer);   // health: 30
wizard.heal.call(archer);   // calls the heal() of wizard with archer object
console.log('2', archer);   // health: 100

// Exercise

const array = [1, 2, 3];

function getMaxNumber(arr) {
    return Math.max.apply(null, arr);   // 'this' does not matter here
}

getMaxNumber(array) // should return 3

// Function Currying
function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));      // 8

// Exercise

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};

// bind to the object 'character'
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());
