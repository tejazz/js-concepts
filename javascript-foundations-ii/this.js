// this is the object a function is a property of

const obj = {
    name: 'Billy',
    sing: function() {
        return 'lalala' + this.name     // this refers to the object 'obj' sing() is a property of
    },
    singAgain: function() {
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
