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