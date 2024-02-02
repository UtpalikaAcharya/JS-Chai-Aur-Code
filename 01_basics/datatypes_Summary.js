//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman","naagaaraj","doga"]
let myObj={
    name : "Priyanshu",
    age : 12

}
const myfunction= function() 
{
    console.log("Hello World");
}
// console.log(heroes)
// console.table(myObj,heroes)
console.log(typeof heroes);

//https://262.ecma-international.org/5.1/#sec-11.4.3   for the data value chart



// dynamically typed language
//        JavaScript is a dynamically typed language,    which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them



//+++++++++++++++++++++++++++++++++++++++++++++



// memory is of 2 types 
// stack And heap
// Stack (Primitive types) and heap (Non pimitive types )
//  stack gives the copy value of the actual value 
// heap gives the refrence value of the actual value

let myName = "priyanshu@gmail.com"
 
let anoetherName = myName
anoetherName="Vecna@gmail.com"

console.log(myName);
console.log(anoetherName);
// Output
// priyanshu@gmail.com
// Vecna@gmail.com
let objOne={
     email: "priyansh@gmail.com",
}
let objTwo=objOne
objTwo.email="vecna@gmail.com"
console.log(objOne)
console.log(objTwo)
//output
// { email: 'vecna@gmail.com' }
// { email: 'vecna@gmail.com' }