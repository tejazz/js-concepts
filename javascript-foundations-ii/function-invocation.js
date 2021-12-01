// Function Expression
var canada = () => {
    console.log('cold')
}

// Function Declaration
function india() {
    console.log('warm')
}

// Function Invocation/Call/Execution
canada()
india()

function marry(person1, person2) {
    console.log('arguments', arguments);
    return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina');
/*
    Output:
    arguments {0: 'Tim', 1: 'Tina'}
    Tim is now married to Tina
*/

/*
    NOTE:
    When we don't know what arguments to expect,
    use the following approach
*/
function marry(...args) {
    console.log('arguments', args);
    return `${args[0]} is now married to ${args[1]}`
}

marry('Tim', 'Tina');
/*
    Output:
    arguments ['Tim','Tina']
    Tim is now married to Tina
*/
