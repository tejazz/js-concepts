// Javascript Engine (ECMAScript Engine)

// Simple JS engine that parses a string
function jsengine(code) {
    return code.split(/\s+/);
}

console.log(jsengine('var a = 5'));
