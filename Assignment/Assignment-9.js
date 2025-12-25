// task 1 
let start = Number(prompt("Enter starting number"))
let end = Number(prompt("Enter end number"))

if(Number.isNaN(start) || Number.isNaN(end)) {
    console.log("Invalid input")
} else if(start <= end) {
    console.log("Start number must be greater then and number");
} else {
    for (let i = start; i>= end; i-=10) {
        console.log(i)
    }
}

//task 2 

let startNum = Number(prompt("Enter start number"))
let endNum = Number(prompt("Enter end number"))

if(Number.isNaN(startNum) || Number.isNaN(endNum)) {
    console.log("Invalid input")
} else if(startNum <= endNum) {
    console.log("Start number must be greater then and number");
} else {
    for (let i = startNum; i>= endNum; i-=10) {
        console.log(i)
    }
}