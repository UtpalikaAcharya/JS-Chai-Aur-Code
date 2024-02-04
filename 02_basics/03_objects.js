// Singleton ----> constructor se banta hain aur literal se singleton nahi bantas
//There  are two ways to make an object 
//One through litera 
//One through constructor

// constructor method
// Object.create()


// object literals method


const jsuser=
{
name:"Priyanshu",
age:21,
gender: "Male",
location:"Odisha",
isLoggedIn: false,
lastLoginDays:["mon","tue","wed","fri","thur","sat","sun"],
// but if key is in string format you can not access it with dot operator // you have to use square bracket method
"full name":"Radha Krishna"
}
// console.log( typeof jsuser.name);
// console.log( typeof jsuser["name"]);
// console.log(jsuser["full name"]);

// // to change the value of the key
// jsuser.age=44

// console.log(jsuser);


// IF we want that value of the object should not change the we can use object.freeze(object_name)

// Object.freeze(jsuser)// this line is to fixed the value of the key value pair


jsuser.age=23
console.log(jsuser);



// Symbol 

// const mySum =Symbol("Key1")
// const jsuser1=
// {
// name:"Priyanshu",
// age:21,
// mySum:"myket",// but this is not the correct way to pass a symbol
// gender: "Male",
// location:"Odisha",
// isLoggedIn: false,
// }

// console.log(jsuser1.mySum);

// // +++++++++++++++++++++++++++++ correct way+++++++++++++++++++

// const mySum2 =Symbol("Key3")
// const jsuser2=
// {
// name:"Priyanshu",
// age:21,
// [mySum2]:"myket2",
// gender: "Male",
// location:"Odisha",
// isLoggedIn: false,
// }

// console.log(jsuser2[mySum2]); 




// we now will add function to a object 

// jsuser.greeting= function()
// {
//     console.log(" hello world");
// }







//  console.log(jsuser.greeting)// output:- [Function (anonymous)]
//  // Function execute nahi hua hain sirf uska refrence aaya hain

//  jsuser.greeting= function()
// {
//     console.log(" hello world");
// }
//  console.log(jsuser.greeting())// output // hello world
//  // Function works well

jsuser.greeting= function()
{
    console.log(" hello world");
}
 console.log(jsuser.greeting())

 jsuser.greetingTwo= function()
{
    console.log(`Hello Js User.${this.age}  `);// "this" keyword is used to refer to the current object
}
console.log(jsuser.greetingTwo())