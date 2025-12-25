let num1 = Number(prompt("Enter the number"))
let num2 = Number(prompt("Enter the number"))
let operater = prompt("Enter operator (+, -, *, /):")
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Error please enter valid number")
} else {
    let result;

    if (operater === "+") {
        result = num1 + num2
    } else if (operater === "-") {
        result = num1 - num2
    } else if (operater === "*") {
        result = num1 * num2
    } else if (operater === "/") {
        if (num2 === 0) {
            alert("Division by zero is not allowed")
            result = null;
        } else {
            result = num1 / num2
        }
    } else {
        alert("invalid opertaor")
        result = null
    }

    if (result !== null) {
        alert("result :" + result)
    }
}