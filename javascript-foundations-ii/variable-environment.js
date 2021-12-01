// Variable Environment and Scope Chain

function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        // has access to variables: a, b
        return function printName() {
            var c = 'c';
            // has access to variables: a, b, c
            return 'Tarique Ejaz';
        }
    }
}

sayMyName()()() // Tarique Ejaz
