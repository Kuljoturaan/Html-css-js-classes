// Create a function that accepts two inputs and throws a TypeError if either is not a number.

function checkNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Both input must be a number")
    }
    return true   //two input is number 
}

try {
 checkNumber(10, 20)
} catch (error) {
    console.error(error.message)
}