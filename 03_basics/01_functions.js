// // function name()
// // {
// //     console.log("Hi my name is Priya");
// // }
// // name()//this is for execution line

// // name // this is only the refrence


// function addTwoNumbers(num1,num2)//parameters
// {
//     console.log(num1 + num2);
// }

// const res=addTwoNumbers(2,3)//arguments
// console.log(`Result is ${res}`)
// //output
// // 5
// // Result is undefined
// // undefined because the function doesnt return anything

// function addThreeNumbers(num1,num2,num3)//parameters
// {
//     // let res2=num1+num2+num3
//     // return res2
//     return(num1+num2+num3)
    
// }

// const res1=addThreeNumbers(2,3,5)

// console.log("Result is ", res1);




function loginUserMessage(username)
{
    if(username===undefined)
    {
console.log("Please enter a user name");
return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())



//another way used in reality

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


