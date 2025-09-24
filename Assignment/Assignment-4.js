//    1
//boolean
let bolean = true;
console.log(bolean);
console.log(typeof bolean);

//number
let num = 123;
console.log(num);
console.log(typeof num);

// String
let name = "hello js"
console.log(name);
console.log(typeof name);

//BigInt
let bigint = 12345n;
console.log(bigint);
console.log(typeof bigint);

// undefined
let undefind;
console.log(undefind);
console.log(typeof undefind);

// null
let val = null;
console.log(val);
console.log(typeof val);


//   2 
let boolobj = new Boolean(false)
console.log(boolobj)
console.log(typeof boolobj)

let numobj = new Number(123)
console.log(numobj)
console.log(typeof numobj)

let strobj = new String("hello world")
console.log(strobj)
console.log(typeof strobj)


console.log(`${bolean} [${typeof bolean}]`)
console.log(`${num} [${typeof num}]`)
console.log(`${name} [${typeof name}]`)
console.log(`${bigint} [${typeof bigint}]`)
console.log(`${undefind} [${typeof undefind}]`)
console.log(`${val} [${typeof val}]`)


//        3

let string = "12345"
let Num = Number(string)
let Bigin = BigInt(Num)
let bol = Boolean(Bigin)

console.log(`chaining of conversion ${bol} and ${typeof bol}`)

//    4

console.log(2 + 3, `[${typeof (2 + 3)}]`)
console.log("Hello" + "Js", `[${typeof ("Hello" + "Js")}]`)
console.log(true + false, `[${typeof (true + false)}]`)
console.log(20n + 30n, `[${typeof (2n + 3n)}]`)

// 5  

console.log(2 + "3", `[${typeof (2 + "3")}]`)
console.log(true + " JS", `[${typeof (true +" JS")}]`)

// 6 
let str1 = 42 + +"1"
console.log(`Modified 42 + "1" is : ${str1} [${typeof str1}] `) 