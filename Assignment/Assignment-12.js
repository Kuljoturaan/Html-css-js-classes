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

//  Write a function safeDivide(a, b) that returns null if an error occurs.

function safeDivide(a, b) {
    try {
        if (typeof a !== "number" ||typeof b !== "number") {
            throw new TypeError("Both inputs must be numbers");
        }
        if (b === 0) {
            throw new RangeError("Division by zero not allowed")
        }
        return a / b
    } catch (error) {
        console.error("Error", error.message)
        return null

    }
}
console.log(safeDivide(10, 2))
console.log(safeDivide(10, 0))
console.log(safeDivide(10, "b"))

//How do you throw a ReferenceError manually?

function ReferenceErrorManually () {
    throw new ReferenceError("This is manually reference error")
}
try {
    ReferenceErrorManually()
} catch (error) {
    console.log(error.name+":"+error.message)

}
//Create a validator that checks an object has keys name and email, or throws an error.
function validator(user) {
    if (typeof user !== "object" || user === null) {
        throw new TypeError("Input must be an object")
    }
    if (!("name" in user) || !("email" in user)) {
        throw new Error("Object must be name and email keys")
    }
    return true
}

try {
    validator({ name: "John" })
} catch (error) {
    console.error(error.message)

}

//How can you catch multiple possible error types in try...catch?

try {
    safeDivide(10,0)
    checkNumber(10,"a")
} catch (error) {
    if(error instanceof TypeError) {
        console.error("TypeError :",error.message)
    } else if(error instanceof RangeError) {
        console.error("Range error caught :",error.message)
    }else {
        console.error("Other error :",error.message)
    }
    
}