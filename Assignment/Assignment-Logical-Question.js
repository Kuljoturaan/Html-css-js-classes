//1.Write a program that assigns a letter grade based on a numerical grade.
// const num = Number(prompt("Enter your marks :"));

// if (num >= 90 && num <= 100) {
//   console.log("Grade A");
//   alert("Grade A");
// } else if (num >= 80) {
//   console.log("Grade B");
//   alert("Grade B");
// } else if (num >= 70) {
//   console.log("Grade C");
//   alert("Grade C");
// } else if (num >= 60) {
//   console.log("Grade D");
//   alert("Grade D");
// } else {
//   console.log("Grade E");
//   alert("Grade E");
// }

//2. Write a program that calculates the ticket price based on age.

// let age = Number(prompt("Enter your age :"));
// let price = "";
// if (age <= 12) {
//   price = 10;
// } else if (age <= 18) {
//   price = 15;
// } else if (age <= 60) {
//   price = 20;
// } else {
//   price = 18;
// }
// alert(`Ticket price ${price}`);

// 3.Write a program that determines if a year is a leap year.

// let year = Number(prompt("Enter the year"));

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       alert("Its leap year");
//     } else {
//       alert("Not a Leap Year");
//     }
//   } else {
//     alert("Leap Year");
//   }
// } else {
//   alert("Not a Leap Year");
// }

// 4.Write a program that calculates a discount based on the purchase amount

// let amount = Number(prompt("Enter the purchase amount"));
// var discount = 0;

// if (amount <= 500) {
//   discount = 0;
// } else if (amount <= 1000) {
//   discount = amount * 0.10;
// } else if (amount <= 1000) {
//   discount = amount * 0.20;
// } else if (amount <= 2000) {
//   discount = amount * 0.30;
// } else {
//     discount = amount * 40
// }
// alert(`Discount price ${discount}`);

// 5.Write a program that calculates the Body Mass Index (BMI) and categorizes it.

// let weight = Number(prompt("Enter the weight"));
// let height = Number(prompt("Enter the height"));

// let bmi = weight / (height * height);

// if (bmi < 18.5) {
//   alert("Underweight");
// } else if (bmi < 25) {
//   alert("Normal");
// } else if (bmi < 30) {
//   alert("Overweight");
// } else {
//   alert("Obese");
// }

// 6.Write a simple number guessing game.

// var secretNum = 5
// var num = Number(prompt("Enter the number (1-10)"))

// if(num === secretNum) {
//     alert("Correct! You guessed the number.")
// } else {
//     alert("Wrong guess. Try again.");
// }

// 7.Print the numbers from 0 to 15 with loop & without loop
// with loop
// for (i = 0; i <= 15; i++) {
//   console.log(i);
// }

// without loop

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)

// 8.Print the numbers from 12 to 24 with loop & without loop

// for (i = 12; i <= 25; i++) {
//   console.log(i);
// }

// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)
// console.log(16)
// console.log(17)
// console.log(18)
// console.log(19)
// console.log(20)
// console.log(21)
// console.log(22)
// console.log(23)
// console.log(24)
// console.log(25)

// 9.Print the ODD numbers from 7 to 31

// for (i = 7; i <= 31; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// 10. Print the EVEN numbers from 10 to -20

// for (i = 10; i >= -20; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 1.Print all the elements of the following array var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// for (i = 0; i < thisIsAnArray.length; i++) {
//   console.log(thisIsAnArray[i]);
// }

// 2.Write a JavaScript function to check if a string contains a specific substring

// function checkSubString(str, sub) {
//   if (str.includes(sub)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkSubString("Hello world", "world"));
// console.log(checkSubString("Hello world", "cat"));

// 3.Write a Program to reverse a string in JavaScript.

// const str = "hello"
// let arr = str.split("").reverse().join("")
// console.log(arr);


var str = "Hello"
var arr = str.split("");
var reversed = "";

for(let i = arr.length -1; i>=0; i--) {
  reversed+= arr[i]
}
console.log(reversed)

// 4.Write a Program to delete a property from an object?

const obj = ({
  name:"Amit kumar",
  age:25
})

delete obj.age
console.log(obj)
