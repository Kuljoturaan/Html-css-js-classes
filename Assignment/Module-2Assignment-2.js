const  Rose = 8
const Lilly = 10
const  Tulip = 2

let roseQuantity = 70
let lillyQuantity = 50
let tulipQuantity = 120 

let decreaseRoses = roseQuantity -  20
let decreaseLilly = lillyQuantity - 30

let roseValue = Rose * roseQuantity
let lillyValue = Lilly * lillyQuantity
let tulipValue = Tulip * tulipQuantity

let total = roseValue + lillyValue + tulipValue;

console.log("Rose price :", Rose, "Rose quantity is :", roseQuantity, "The rose value is :", roseValue)
console.log("Lilly price :", Lilly, "lilly Quantity is :", lillyQuantity, "The lilly value is :", lillyValue)
console.log("Tulip price :", Tulip, "tulip quantity is :", tulipQuantity, "The tulip value is :", tulipValue)
console.log(total)