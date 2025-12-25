function div(a, b) {
    if (b === 0) {
        throw new RangeError("Division by zero is not allowed")
    }
    return a / b
}

let number = [10, 40, 0, 20, 50];

for (let i = 0; i < number.length; i++) {
try {
    let result = div(1000,number[i]);
    console.log(`1000/ ${number[i]} = ${result}`)
} catch (error) {
    console.log(`Error dividing by ${number[i]}:${error.message}}`)
    
}
}