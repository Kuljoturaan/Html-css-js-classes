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


// let userAge = prompt("Enter your age ", 0)
// hasParentsApproval = true
// hasPromoCode = false
// let cartValue = 280
// let points = 500
// let INSURANCE_COST = 20
// let orderIsValid = true
// let addInsurance = true
// let shippingCost = 50

// // 1st condition hasParentsApproval = false
// if (userAge < 21 && !hasParentsApproval) {
//     hasParentsApproval = false
//     alert("Order is Invalid")
// // 2nd condition hasParentsApproval = true
// } else if (userAge < 21 && hasParentsApproval) {
//     hasParentsApproval = true
//     shippingCost -= 5
//     alert("Order is Valid")
// // 3rd senior citizen user 
// } else if (userAge >= 65) {
//     shippingCost = 0
//      alert("Senior citizen — Free shipping")
// // 4th user is adult  
// } else if (userAge >= 21 && userAge <= 64 && (hasParentsApproval || cartValue > 300 || points > 500)) {
//     shippingCost = 0
//     alert("Adult user — Free shipping ")
// }

// if(addInsurance && orderIsValid && !hasPromoCode) {
//     shippingCost+=INSURANCE_COST
//     alert("Insurance added ")
// }
// alert(`Order Valid: ${orderIsValid}\nShipping Cost: ₹${shippingCost}`);

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

// let n = 0
// while (n < 91) {
//     console.log(n)
//     n += 10
// }

// let isOver = false
// let counter = 1
// while(isOver !=true) {
//     let continueLoop = confirm(`[${counter}] continue the loop`)
//     isOver = continueLoop === true ? false :true
//     counter = counter + 1
// }

// while(!isOver){
//     isOver = !confirm(`[${counter++}] continue the loop`)
// }
// alert("complete the loop ")

// let fruits = ["banana","apple","mango","grapes","nashpati"]
// let index = 0
// let myLine = ""
// while(index < fruits.length) {
//     console.log(fruits[index])
//     myLine += fruits[index]+ " "
//     // document.write(fruits[index] + " ")
//     index++
// }
// // console.log(myLine)
// console.log(fruits.join(" "))

// let num = 0
// let str =""
// while(num <=20)
// {
//     num+=2
//     str +=num
//     str += " "
//     // console.log("Num",num)
//     // num += 2
// }
// console.log(str)

// let num = 20
// while(num >=2) {
//     console.log("Num",num)
//     num -=2
// }
// let isOver 
// let counter = 1
// do{
//     isOver = !confirm(`[${counter++}] continue the loop?]`)
// }
// while(!isOver)


// let condition = false

// while(condition) {
//     console.log("my code is executed")
// }
// console.log("out of loop")

// do{
//     console.log("Hey there this is do while loop");
// }
// while(condition)
//     console.log("out of loop ")

// let name = "Divya"
// i = 0
// do {
//     console.log(name[i])
//     i++
// }
// while (i < name.length)

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// let values = [10, 20, 30, 50, 100]
// let sum = 0;

// for (var index = 0; index < values.length; index++) {
//     sum += values[index]
// }
// console.log(sum)

// let num = [1, 2, 4, 9, 12, 18]
// let evenCount = 0;

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         evenCount++
//     }
// }
// console.log("Even number count ", evenCount)

// let fruits = ["apple", "banana", "lichi", "graphes"]

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i])
// }

// let names = []
// let isOver = false
// while (!isOver) {
//     let name = prompt("Enter another name or cancel")
//     if (name != null) {
//         names.push(name)
//     } else {
//         isOver = true
//     }
// }

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// let values = [10, 30, 50, 100, 110, 200, 250, 300]
// console.log("---------forward--------")
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }
// console.log("-----------backword------------")
// for (let i = values.length - 1; i > 0; i--) {
//     console.log(values[i]);
// }

// for (let i = 0; i < values.length; i += 2) {
//     console.log(values[i]);
// }

// let values = [10,230,50,100] 
// let sum = 0

// for(let number of values) {
//     console.log("number:",number)
// }

// for(let number of values) {
//     sum +=number
// }
// console.log(sum)

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cario", population: 18.82e6 },
//     { name: "Mumbai", population: 18.32e6 },
//     { name: "Sao paulo", population: 19.88e6 },
//     { name: "Mexico city", population: 19.34e6 },
//     { name: "Shangai", population: 19.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 },
// ];

// for(let city of cities) {
//       if(city.population > 20e6)
//     console.log("City:"+city.name+" | Population:"+city.population)
// }

// let users = [
//     {
//         name:"kuljot",
//         surname:"rajpal",
//         age:20,
//         email:"kuljotsingh@gmail.com",
//     }
// ]
//     for(let key in users) {
//         console.log("key",key)
//         console.log("Value",users[key])
//     }

// let tempatures
// let sum
// let meanTemp
// tempatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// sum = 0
// getMeanTemp(tempatures)
// for(let i=0; i<tempatures.length;i++) {
//     sum += tempatures[i]
// }
// meanTemp = sum/tempatures.length

// console.log(`mean ${meanTemp}`)
// console.log("-------------")

// tempatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// sum = 0
// getMeanTemp(tempatures)
// for(let i = 0; i<tempatures.length; i++) {
//     sum += tempatures[i]
// }
// meanTemp = sum/tempatures.length

// console.log(`mean ${meanTemp}`)

// function getMeanTemp(tempatures) {
//     for (let i = 0; i < tempatures.length; i++) {
//         sum += tempatures[i]
//     }
//     meanTemp = sum / tempatures.length

//     console.log(`mean ${meanTemp}`)
// }

// showName() 
// function showName () {
//     console.log(name)
// }
// var name = "Alice"

// let name = "Alice"
// function showName () {
//     console.log(name)
// }
// showName() 

// function sayHello () {
//     console.log("Hello world")
// }
// console.log("About the call of function")
// sayHello()
// console.log("Function call finished")
// function showMessage () {
//     alert("Hello everyone")
// }
// showMessage()

// let userName = "John"
// function showMessage() {
//     let message = 'Hello,' + userName
//     console.log("Message",message)
// }
// showMessage()
// // console.log("Message",message)
// console.log("Username",userName)
// function showMsg () {
//     console.log("Message 2")
//     return
//     console.log("Message 3")
// }
// console.log("Message 1")
// showMsg()
// console.log("Message 4")

// function getTrue () {
//     return true
// }
// let test = getTrue()
// console.log(test)
// if(test) {
//     console.log("Yay")
// }else {
//     console.log("Oh no")
// }

// let tempatures
// let sum
// let meanTemp

// function getMeanTemp(tempatures) {
//     let sum = 0;
//     for (let i = 0; i < tempatures.length; i++) {
//         sum += tempatures[i];
//     }
//     return sum / tempatures.length;
// }
// tempatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// console.log("Mean temp",getMeanTemp(tempatures))
// console.log(`mean ${meanTemp}`)
// console.log("-------------")

// tempatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// console.log("Mean Temp",meanTemp)
// function getMeanTemp(tempatures) {
//     sum = 0
//     for (let i = 0; i < tempatures.length; i++) {
//         sum += tempatures[i]
//     }
//     // meanTemp = sum / tempatures.length
//     return meanTemp = sum / tempatures.length

// }

// function add(first, second) {
//     console.log("First Parameter", first)
//     console.log("Second Parameter", second)
//     return first + second
// }
// let result = add(7, 5)
// console.log(result)

// function checkAge(name, age, contact) {
//     console.log("Name ", name)
//     console.log("Age ", age)
//     console.log("Contact", contact)
//     if (age >= 18) {
//         console.log("You can also vote ")
//     } else {
//         console.log("You can Not vote ")
//     }
// }
//  checkAge("Kuljot", 20,9876543210)

//  let names = ["Alice","Bob","Eve","John"]
//  let name = getElement(names,)
//  console.log(name)
//  function getElement(array,index) {
//     return array[index]
//  }

// function showMessage(message) {
//     console.log(`Message : ${message}`)
// }
// console.log(showMessage)

// let sm = showMessage
// console.log("sm:",sm)
// sm("sm")
// showMessage("Show Message")

// function doNothing () {
//     return undefined
// }
// let a = doNothing()
// let b= doNothing
// console.log(typeof a)
// console.log(typeof b)

// function add(a, b) {
//     return a + b
// }
// function mutiply(a, b) {
//     return a * b
// }
function operation(func, first, second) {
    return func(first, second)
}
// console.log(operation(add, 10, 20))
// console.log(operation(function (a, b) {
//     return a + b
// }, 10, 50))
// console.log(operation(mutiply, 10, 20))

// Named function expression ananomas function
// let myAdd = function (a, b) {
//   return a+b
// }
// console.log(myAdd(15,6))

// function getMeanTemp(tempatures) {
//     if(!(tempatures instanceof Array)) {
//         return NaN
//     }
//     let sum = 0
//     for(let i=0;i<tempatures.length;i++) {
//         sum+=tempatures[i]
//     }
//     return sum/tempatures.length
// }
// console.log(getMeanTemp([10,20,30]))
// console.log(getMeanTemp("not an array"))

// function add(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Invalid input : expected number"
//     }
//     return a + b
// }
// console.log(operation(add, "Ten", 20))
// console.log(operation(add, 10, "twenty"))
// console.log(operation(add, 10, 20))

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenArray = array.filter(function (element) {
//     if (element % 3 === 0) {
//          return true
//     }
//     return false
// })
// console.log(array)
// console.log(evenArray)

// let arr = ["Aditya", "sandeep", "Diksha", "Chandresh", "george", "chandresh", "Anjali", "Kuljot"]
// let name = arr.filter((elem) => {
//     if (elem === "Aditya" || elem === "Diksha" || elem === "chandresh") {
//         return true
//     }
//     return false
// })
// console.log(arr)
// console.log(name)

// let arr = ["Aditya", "sandeep", "Diksha", "Chandresh", "george", "chandresh", "Anjali", "Kuljot"]
// let name = arr.filter((elem) => {
//     if (elem !== "Aditya" && elem !== "Diksha" && elem !== "chandresh") {
//         return true
//     }
//     return false
// })
// console.log(arr)
// console.log(name)
// let newArray = arr.map(function(element) {
//     if(element === "Aditya") 
//         return "Aditya Gupta"
//         return element +"--"
// })
// console.log(arr)
// console.log(newArray)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArray = arr.map(function(element) {
//     if(element === 5) 
//         return 5
//         return element *5
// })
// console.log(arr)
// console.log(newArray)
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArray = arr.map(function(element) {
//     return element +2
// })
//  console.log(arr)
// console.log(newArray)

// function sum(a,b) {
//     return a+b
// }
// console.log(sum(5,3))

// let newSum = (a,b) => a+b
// console.log(newSum(5,10))

// let names = ['Alice',"Eve","John"]
// function showName(element) {
//     console.log(element)
// }

// let showName = (element) => console.log(element)
// names.forEach(showName)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let myFunction = (element) => { console.log(element + 11) }
// array.forEach(myFunction)
// console.log(array)

// let square = x => x * x
// console.log(square(5))

// function factroial(n) {
//     return n > 1 ? n * factroial(n - 1) : 1
// }

// function factroial(n) {
//     let result = 1;
//     while (n > 1) {
//         result *= n
//         n--;
//     }
//     return result
// }
// console.log(factroial(5))

// let count = 1
// let intervalID = setInterval(() => {
//     console.log(count++)
// }, 1000);
// setTimeout(() => {
//     clearInterval(intervalID)
// }, (10 * 1000) + 100)

// try {
//     console.log("Starting try")
//     let a = 10
//     console.lg(a/0)
//     console.log("Ending of try")
// } catch (error) {
//     console.log("Starting catch")
//     console.log("error:",error)
//     console.log("Ending of catch")

// }
// const numOffArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let startingNum = 0

// for (let num = 0; num < numOffArr.length; num++) {
//     let intervalID = setInterval(() => {
//         console.log(numOffArr[startingNum])
//         startingNum++;

//         if(startingNum>=numOffArr.length){
//             clearInterval(intervalID)
//             console.log("Array ended")
//         }
//     },1000);
//     setTimeout(() => {
//         clearInterval(intervalID)
//         console.log("set interval ended after 12 sec")
//     }, 12000);
// }

// let array =1 // [1,2,3,4,5,6,7,8]
// if(array instanceof Array) {
//     console.log("Yes,we got the array")
// }
// else{
//     console.log("Error:we not an Array")
// }
// let a = -2
// try {
//     a = b;
// }
// finally {
//     console.log("Finally :",a)
// }
// catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error,reset a to -2")
//         a = -2
//     }
//     else {
//         console.log("Other error -" + error)
//     }
// }
//console.log("Outside :",a)
// let a= 10
// try {
//     a=b
// } catch (error) {
//     console.log("Error",error)

// }finally{
//     console.log("Finally",a)
// }
// console.log("Outside", a)
// let a= 10
// try {
//     a = b
// } catch (error) {
//     try {
//         console.log(b)
//     } catch (error2) {
//         console.log("Second catch",error2)

//     }

// }
// finally{
//     console.log("Finally!!")
// }
// console.log("start")
// throw 100;
// console.log("ended")
// console.log("start")
// throw ReferenceError("This is my custom reference error");
// console.log("ended")

// console.log("start")

// try {
//     throw 100

// } catch (error) {
//     console.log(error)
// }
// console.log("end")
// 	let end = 2;
// for(let i=1; i<end; i++) 
// {
//   console.log(i);
// }

// let counter = 0
// let maxValue = 10
// let result = 1
// // debugger;
// for(counter =0;counter<maxValue;counter++) {
//     console.log(result)
//     result *=maxValue-counter-1
// }
// console.log("Final Result",result)


// let contact = {}
// console.log("Contact :",contact)
// console.log(typeof contact)
// contact.tel = "207-507-5412"
// console.log(contact)
// console.log(contact.tel)
// console.log("Contact :",contact)
// console.log(typeof contact)

// contact["*code"] = 123
// console.log(contact["*code"])

// contact["email.work"] = "abc@gmail.com"
// contact["email.personal"] = "def@gmail.com"

// console.log(contact["email.work"])
// console.log(contact["email.personal"])

// contact.first name = "Kuljot"
// contact["first name"] = "Kuljot"
// console.log(contact["first name"])

// let contact = {
//     email_1: "Ronald@gmail.com",
//     email_2: "sahil@gmail.com"
// }
// for(i=1; i<=2; i++) {
//     let key = "email_" + i
//     console.log(key)
//     console.log(contact[key])
// }

// let contact = {}
// let email = prompt("Enter your email...")
// let count = 1
// while (email) {
//     contact["email", +count] = email
//     count++
//     email = prompt("Enter your email")
// }
// console.log("Contact :" ,contact)

// for(let count1 =1; count1<=Object.keys(contact).length; count1++) {
//     console.log(contact["email_"+count1])
// }

// let test = {
//     nr: 10,
//     b: false,
//     str: "Sumit",
//     arr: [50, 60, 70],
//     obj: {
//         x: 10,
//         y: 20
//     },
//     fn: function (arg) { console.log(arg) }
// }
// test.fn(123)
// console.log("1 index",test.arr[1])
// console.log("Y from obj of object",test.obj.y)
// console.log("string of object:",test.str)
// console.log("Number of obj :",test.nr)
// console.log("Boolean of obj :",test.b)

// let point = {
//     x: 0,
//     y: 0,
//     moveHorizontally: function (distance) {
//         this.x = this.x + distance;
//     },
//     moveVertically: function (distance) {
//         this.y = this.y + distance;
//     }
// }
// console.log(point.x)
// point.moveHorizontally(30)
// console.log(point.x)

// let contact = {
//     tel :987-654-321,
//     email:"Ksr@gmail.com"
// }
// console.log("tel :",contact.tel)//12
// console.log("email :",contact.email)//Ksr@gmail.com
// contact.email = ["Ksr@gmail.com","rsumbhi@gmail.com"]
// console.log("email :",contact.email[0])//Ksr@gmail.com
// console.log("email :",contact.email[1])//rsumbhi@gmail.com
// contact.email = {
//     private:"Ksr@gmail.com",
//     work:"rsumbhi@gmail.com"
// }
// console.log("Private email :",contact.email.private)//Ksr@gmail.com
// console.log("Work email :",contact.email.work)//rsumbhi@gmail.com

// // delete contact.email.work 
// console.log("Work email :",contact.email.work)
// console.log("Private email :",contact.email.private)
// if(contact.email.work) {
//     console.log("This is execute or not")
// }
// if("private" in contact.email) {
//     console.log("This is private email",contact.email.private)
// }

// const contact = {
//     tel: "123-459-789",
//     email: "ronakr@gmail.com"
// }
// for (x in contact)
//     console.log(x)
// console.log(x + ":" + contact[x]);

// let propArray = Object.keys(contact)
// console.log("props array :", propArray)

// contact = {
//      tel : "123-459-789",
//     email:"ronakr@gmail.com"
// }
// contact.tel = "9876543210"
// console.log("contact tel :",contact.tel)
// contact.name = "Kuljot singh"
// console.log("contact name :",contact.name)

// var point1 = { x: 10, y: 20 }
// var point2 = { x: 10, y: 20 }
// console.log(point1 === point2) 
// let point3 = point1
// console.log(point1 === point3)
// point1.x =30
// console.log("point1.x" === point1.x) 
// console.log("point1.x" === point1.x) 

// let point0 = { x: 10, y: 20 }
// let point1 = point0
// let point2 = {}
// Object.assign(point2, point0)
// console.log(point2.x);
// console.log(point2.y);

// point1.x = 30
// point1.y = 50
// console.log("point1.x", point1.x);
// console.log("point1.y", point1.y);
// console.log("point2.x", point2.x);
// console.log("point2.y", point2.y);

// console.log(point1 === point0)
// console.log(point1 === 2)

// let point3 = {}
// Object.assign(point3, point0, { z: 100 })
// console.log(point3.x)
// console.log(point3.y)
// console.log(point3.z)
// console.log("Point:3", point3)

// let point4 = {}
// Object.assign(point4, point3, { z: 120 })
// console.log("Point:4", point4)

// let point5 = {}
// point5 = { ...point4 }
// console.log("Point:5", point5)
// console.log("Point5 === point4", point5 === point4)

// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const combinedArray = [...arr1, ...arr2]
// console.log("arr1", arr1)
// console.log("arr2", arr2)
// console.log("combinedArray", combinedArray)

// let array1 = [1, 2, 3, 4]
// const resultArray = [...array1]
// console.log("array1 :", array1)
// console.log("resultArray :", resultArray)

// let resultArray1 = [...array1, 5, 6, 7, 8]
// console.log("resultArray1 :", resultArray1)

// resultArray1 = [5, 6, 7, 8, ...array1]
// console.log("resultArray1 :", resultArray1)

// resultArray1 = [5, 6, ...array1, 7, 8]
// console.log("resultArray1 :", resultArray1)

// function sum(a, b, c) {
//     return a + b + c
// }
// let number = [20,20,20]
// const result12 = sum (...number)
// console.log("result12",result12)

// const string1 = "Kuljot"
// let charArray = [...string1]
// console.log("charArray",charArray)

// let deepClone = function (obj) {
//     let newObj = { ...obj }
//     for (property in newObj) {
//         if (typeof newObj[property] === "object") {
//             newObj[property] = deepClone(newObj[property])
//         }
//     }
//     return newObj
// }
// let obj = {
//     x: 10,
//     y: 20,
//     z:
//     {
//         a: 100,
//         b: 200
//     }
// }
// let obj1 = {}
// Object.assign(obj1,obj)
// obj1 = (...obj)
// obj1 = deepClone(obj)
// console.log("obj",obj)
// console.log("obj1",obj1)
// console.log("obj === obj1",obj === obj1)

// obj.z.a = 150
// obj.x = 15

// console.log("Changing obj .z.a to 150")
// console.log("Changing obj .z.a to 15")
// console.log("obj",obj)
// console.log("obj1",obj1)


// let circle = {
// radius: 100,
// center: {
//     x: 0,
//     y: 0
// },
// // getType: function () {
//     return "circle"
// }
// getType() {
// return "circle"
// return (typeof this.radius === "number") ? "circle" : "unknown"

//     },
//     getRadius () {
//         return this.radius
//     }
// };

// console.log("circle.radius :", circle.radius)
// console.log("circle.center.x :", circle.center.x)
// console.log("circle.getType() :", circle.getType())
// console.log("circle.getType() :", circle["getType"]())

// let circle1 = {...circle}
// circle1.radius ="abc"
// console.log("getRadius() :", circle1.getRadius())
// console.log("getType() :", circle1.getType())


// class Student {
//     name
//     age
//     gender
//     rollNumber

// constructor() {
//     console.log("This is a constructor called")
// }//Default constructor

//     constructor(name, age, gender, rollNumber) {
//         console.log("This is a constructor called")
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.rollNumber = rollNumber

//     }
//     printStudent() {
//         console.log("Name :", kuljot.name)
//         console.log("Age :", kuljot.age)
//         console.log("Gender :", kuljot.gender)
//         console.log("Roll number :", kuljot.rollNumber)
//     }
// }

// console.log("Creating new object")
// let kuljot = new Student("Kuljot", 25, "Male", 105)
// console.log("created the object")
// kuljot.name = "Kuljot singh"
// kuljot.age = 20
// kuljot.gender = "MALE"
// kuljot.rollNumber  = 123

// console.log("Name :",kuljot.name)
// console.log("Age :",kuljot.age)
// console.log("Gender :",kuljot.gender)
// console.log("Roll number :",kuljot.rollNumber)
// kuljot.printStudent()

// let kul = new Student("Kuljot ksr", 21,"Male",121)
// kul.printStudent()


// class Vechicle {
//     transportMode
//     weight
//     capacity
//     color

//     print() {
//         console.log("transportMode :", this.transportMode)
//         console.log("weight :", this.weight)
//         console.log("capacity :", this.capacity)
//         console.log("color :", this.color)
//     }
// }

// class MotorBike extends Vechicle {
//     maxSpeed
//     fuelType
//     peopleCapacity
//     average

//     print() {
//         // super.print()
//         console.log("maxSpeed: ", this.maxSpeed)
//         console.log("fuelType: ", this.fuelType)
//         console.log("peopleCapacity: ", this.peopleCapacity)
//         console.log("average: ", this.average)
//     }
// }
// class Car extends Vechicle {
//     maxSpeed
//     fuelType
//     peopleCapacity
//     average
//     gears
//     canReverse

//     print() {
//         // super.print() 
//         console.log("maxSpeed :",this.maxSpeed)
//         console.log("fuelType :",this.fuelType)
//         console.log("peopleCapacity :",this.peopleCapacity)
//         console.log("average :",this.average)
//         console.log("gears :",this.gears)
//         console.log("canReverse :",this.canReverse)
//     }
// }
// let honda  = new Car () 
// honda.transportMode = "Road"
// honda.weight = "150 Kgs"
// honda.capacity = "2.51 L"
// honda.color = "yellow"
// honda.maxSpeed = "220 kmps"
// honda.fuelType = "Diesel"
// honda.peopleCapacity = "6"
// honda.average = "18 kmpl"
// honda.gears = "5"
// honda.canReverse = true

// honda.print()
// console.log("------------")

// let motorBike = new MotorBike()
// motorBike.transportMode = "Road"
// motorBike.weight = "100 kgs"
// motorBike.capacity = "1.51 "
// motorBike.color = "Red"
// motorBike.maxSpeed = "150 Kmps"
// motorBike.fuelType = "Petrol"
// motorBike.peopleCapacity = 2
// motorBike.average = "50KMPL"

// motorBike.print()


// class Test {
//     name
//     description
//     marking
//     rank
// }
// let physicsTest = new Test()
// physicsTest.name = "Physics test"
// physicsTest.description=  "dsfvdlsdsfof   fsdnlcdsfd  fsdnkjdsf"
// physicsTest.marking = "50"
// physicsTest.rank=100

// console.log("physicsTest",physicsTest)
// let {name,marking,rank} =  physicsTest
// console.log("name",name)
// console.log("marking",marking)
// console.log("rank",rank)

// let Vehicle = function(id, latitude, longitude) 
// {
//     this.setPosition = function(latitude, longitude) {
//         this.time = Date.now();
//         this.longitude = longitude
//         this.latitude = latitude
//     }
//     this.id = id
//     this.status = "unavailable"
//     this.setPosition = (latitude, longitude)
// }

let Vehicle = function(intialData)
{
    let { id, lattitude, longitude } = intialData //distructor or dismantle
    this.setPosition = function(lattitude, longitude)
    {
        this.time = Date.now();
        this.longitude = longitude
        this.lattitude = lattitude
    }
    this.getPosition = function()
    {
        return { lattitude: this.lattitude, longitude:this.longitude}
    }
    this.id = id
    this.status = "unavailable"
    this.setPosition(lattitude, longitude)
}
let car = new Vehicle({id:"XE9", lattitude: 12.90909095, longitude: 24.9797979})
console.log("car", car);
console.log("lat long : ", car.getPosition());
let {lattitude, longitude} = car.getPosition()
console.log("lattitude", lattitude);
console.log("longitude", longitude);

