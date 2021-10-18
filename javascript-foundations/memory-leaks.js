// memory leak

// snippet to crash your browser
let array = [];
for (let i = 5; i > 1; i++) {
    array.push(i - 1);
}

// global variable
var a = 1;
var b = 1;
var c = 1;

// event listeners => common cause of memory leaks
var element = document.getElementById('button');
element.addEventListener('click', onClick)

// setInterval
setInterval(() => {
    // refactoring objects
})

// Sample: Fixing a Stack Overflow Code
// Fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        removeItemsFromList();
    }
};

removeItemsFromList();

// Solution => Shift the executable code to the Web API
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0);
    }
};
 
removeItemsFromList();
