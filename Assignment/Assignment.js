// //1.Create a for loop that prints the first 10 even numbers.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         console.log("Even number :", num[i])

//     }
// }

// // 2.Find the sum of all quotients when dividing numbers 1 to 9 by 3

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0

// for (let i = 0; i < nums.length; i++) {
//     let quotients = num[i] / 3

//     sum += quotients

//     console.log("Number:", num[i], "quotients:", quotients)

//     console.log("Total number of the sum :", sum)
// }

// 3.Using do...while, print numbers from 1 to 5 with their quotient by 2

let numbers = [1, 2, 3, 4, 5]
let i = 0

do {
    let numb = numbers[i]
    let quotient = numb / 2

    console.log("Number:", numb, "Quotient:", quotient)
    i++;

} while (i < numbers.length);