const user={
    userName:  "manav",
    price: "989",
    welcomeMessage :function()
    {
        console.log(`hi ${this.userName} your payment of ${this.price} have been credited ` );
        console.log(this);
    }

}
// user.welcomeMessage// no output
// console.log(welcomeMessage())//error we can not call it directly
// console.log(user.welcomeMessage)//[Function: welcomeMessage]
// console.log(user.welcomeMessage())//hi manav your payment of 989 have been credited 
// user.welcomeMessage()//hi manav your payment of 989 have been credited 
// user.userName="utu"
// user.welcomeMessage()//hi utu your payment of 989 have been credited 
// So the value is changed because we have used this and it refers to the current object




// if the code is like this
// const user={
//     userName:  "manav",
//     price: "989",
//     welcomeMessage :function()
//     {
//         console.log(`hi ${this.userName} your payment of ${this.price} have been credited ` );
//         console.log(this);    // Focus here  you 
//     }


// user.welcomeMessage()
// user.userName="utu"
// user.welcomeMessage()

/*
hi manav your payment of 989 have been credited 
{
  userName: 'manav',                          // "this " is showing here current context
  price: '989',
  welcomeMessage: [Function: welcomeMessage]
}
hi utu your payment of 989 have been credited  // Now the current context is changed 
{
  userName: 'utu',                     // so output also changed
  price: '989',
  welcomeMessage: [Function: welcomeMessage]
}
*/



// now what if we run "this" here

// console.log(this)//  {}   because we are in node enviroment  this is refring to a global object and because there is no global enviroment in node so it returns a empty string

// But when you run it on windows or console then a window object comes Because in the previous days when there was engine of javascript was only located in the browser so all the consoles have that windows so we have to print that but today javascript is a standalone language because we have made the V8 engine or the other engines we have taken out and converted it into a node or bun or everything anything you see



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
//output // undefined
// This shows that we cannot use this dot username in the function it is made for object

// const chai = function () {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }
//output // undefined
//

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


//here also it is not working 

// Now Arrow Functions


// syntax ()=> {}
// Normal Arrow function
const addTwo= (num1,num2)=>
{
    return num1+num2
}
console.log(addTwo(3,4))// 7

// Implicit arrow function
const addTwo1= (num1,num2)=> (num1+num2) // If you are written Curly braces then you have to write the return statement if you haven't written the curly braces then there is no need to write return keyword so this is the difference between normal arrow function and an implicit arrow function



// why we have given parantenthesis here (num1+num2)  becuse without that also our code was working 
// That was made for the return of object
//
const addTwo3= (num1,num2)=> {userName:"harsh"} // output is undefined
// Thats why we use curly braces
const addTwo4= (num1,num2)=> ({userName:"harsh"}) 
console.log(addTwo4(3,4))


