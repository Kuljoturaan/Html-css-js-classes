function div (a,b) {
    if(b === 0) {
        throw new RangeError ("Division by zero is not allowed")
    }
    return a/b
}

try {
    console.log(div(10,2))
    console.log(div(40,0))
} catch (error) {
    console.error(error)
    
}