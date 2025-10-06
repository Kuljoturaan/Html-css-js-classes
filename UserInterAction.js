// let isUserReady = confirm("Are you Ready for js")
//         console.log(isUserReady);
//         if(isUserReady) {
//             alert("User Ready")
//         }

//         let unitPrice = 10;
//         let piece = prompt("the user enter unit" ,0)
//         if(piece > 0) {
//             let total = unitPrice *piece
//             console.log(total)
//         }
//         console.log(total)

//         let userAge = prompt("Enter your age")
//         let isFemale = false
//         let points = 700
//         let cartValue = 299
//         let shippingCost = 9.99

//         if(userAge > 22 ) {
//             if(cartValue >=300 || points>=500){
//                 shippingCost=0
//             }
//         }

//         if(userAge > 22 && (cartValue >=300 || points>=500))
//         shippingCost = 0
//         alert("Shipping cost :"+shippingCost)

//         let num = 20
//         if(num >= 0) {
//             console.log("the num is positive")
//         } else{
//             console.log("the num is negative")
//         }
//             let isUserReady = confirm("Are you ready")
//             if(isUserReady)
//         {
//             alert("ready")
//         } else{
//             alert("not ready")
//         }

//         let user = prompt("enter your age")
//         if(user >= 18) {
//             alert("you can eligible for vote")
//         }else{
//             alert("you can not eligible for vote")
//         }

//          if(user >= 18) {
//             alert("you can eligible for vote")
//         } else if (user >= 13){
//             alert("you are a teenage welcome to teenage")
//         }
//         else{
//             alert("you can not eligible for vote")
//         }


let userAge = prompt("Enter your age ", 0)
hasParentsApproval = true
hasPromoCode = false
let cartValue = 280
let points = 500
let INSURANCE_COST = 20
let orderIsValid = true
let addInsurance = true
let shippingCost = 50

// 1st condition hasParentsApproval = false
if (userAge < 21 && !hasParentsApproval) {
    hasParentsApproval = false
    alert("Order is Invalid")
// 2nd condition hasParentsApproval = true
} else if (userAge < 21 && hasParentsApproval) {
    hasParentsApproval = true
    shippingCost -= 5
    alert("Order is Valid")
// 3rd senior citizen user 
} else if (userAge >= 65) {
    shippingCost = 0
     alert("Senior citizen — Free shipping")
// 4th user is adult  
} else if (userAge >= 21 && userAge <= 64 && (hasParentsApproval || cartValue > 300 || points > 500)) {
    shippingCost = 0
    alert("Adult user — Free shipping ")
}

if(addInsurance && orderIsValid && !hasPromoCode) {
    shippingCost+=INSURANCE_COST
    alert("Insurance added ")
}
alert(`Order Valid: ${orderIsValid}\nShipping Cost: ₹${shippingCost}`);

//         let num = prompt("Please enter your number ")
//         if (num % 2 === 0) {
//             alert("The number is even")
//         } else {
//             alert("The number is odd")
//         }

//         let name = prompt("Enter your name", "kuljot")
//         let age = prompt("Enter your age", 0)

//         if (age >= 18) {
//             alert(`you can also vote ${name}`)
//         }
//         else {
//             alert(`you can not vote ${name}`)
//         }

//         let product = prompt("Enter number of product ", 0)
//         let price = 12
//         product = Number(product)

//         let totalPrice = product * price

//         alert(`you are ${quantity} ${totalPrice}`)

// let age = parseInt(prompt("Please enter your age"))
// let gender = prompt("please enter your gender,Male/Female").toLowerCase().trim()

// let oldLawsAge, newLawsAge

// if (gender === "male") {
//     oldLawsAge = 21
//     newLawsAge = 18
// } else if (gender === "female") {
//     oldLawsAge = 18
//     newLawsAge = 18
// }
// else {
//     alert("Please enter your correct gender (Male/Female)")
// }

// if (age >= oldLawsAge) {
//     alert("old laws you can also married")
// }
// else {
//     alert ("old laws you cannot married")
// }


// if (age >= newLawsAge) {
//     alert("new laws you can also married")
// }
// else {
//     alert ("new laws you can not married")
// }

//         let num = prompt("please enter your marks ", 0)
//         let grade = Number(num)

//         if (grade >= 90 && grade <= 100) {
//             alert("grade A")
//         } else if (grade >= 80 && grade <= 89) {
//             alert("grade B")
//         } else if (grade >= 70 && grade <= 79) {
//             alert("grade C")
//         }
//         else if (grade >= 60 && grade <= 69) {
//             alert("grade D")
//         }
//         else if (grade < 60) {
//             alert("Fail")
//         }



//         let sub1 = Number(prompt("Enter your first subject", 0))
//         let sub2 = Number(prompt("Enter your second subject", 0))
//         let sub3 = Number(prompt("Enter your third subject", 0))
//         let sub4 = Number(prompt("Enter your fourth subject", 0))
//         let sub5 = Number(prompt("Enter your fiveth subject", 0))

//         let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5

//         let marks = (totalMarks / 500) * 100
//         alert(`my percent is ${marks}`)

// let price = 51
// let shippingCost = price > 50 ? 0 : 10
// console.log(`price ${price} and shipping cost is ${shippingCost}`)

// let isStart = confirm("Start?")
// const message = isStart? "You we go" :"Aborted"
// console.log(message);

// let age = 17
// let message = age >= 18 ? "You are adult" : "you are not adult"
// console.log("checking you are adult", message)

// let number = 22
// let num = number % 2 === 0 ? "Even" : "odd"
// console.log("checking even and odd", num)

// let isLoggedIn = true
// let isLogged = isLoggedIn ? "Welcome to website" : "Please logged in"
// console.log("checking user login ", isLogged)

// let score = 90
// let stuScore = (score >= 90) ? "Grade A" : (score >= 80) ? "GradeB" : (score >= 70)
//     ? "Grade C" : (score >= 60) ?"Grade D" : "Grade E"
//     console.log(stuScore)

// let gate = prompt("enter the gate a,b and c")
// let win = false

// switch (gate) {
//     case "a":
//         alert("gate A is empty")
//         break;
//     case "b":
//         alert("gate B : main prize")
//         win = true
//         break;
//     case "c":
//         alert("gate C is empty")
//         break;
//     default:
//         alert("No gate " + String(gate))
//         break;
// }
// if (win) {
//     alert("winner!")
// }