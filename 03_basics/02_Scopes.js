




// {}// curly braces are called the scope 
// if (true)
// // this is a block scope outside it are called global scope 
// {
//     let a = 10
//     const b =20
//     var c= 30
// }
// //console.log(a);// not showing the output  good!
// //console.log(b);// not showing the output
// console.log(c);// here it is the problem 
/*
AN IMPORTANT THING TO NOTE

 The scope which we are using in the node is diffrent and the scope which we are using in the browser window is diffrent !!!!!

*/



// A good advice dont use var at all


function  one()
{
    const username="Priyanshu"


    function two()
    {
        const website = "YouTube"
        console.log(username);

    }
    // console.log(website);
    two()
}

//one()


if (true)
{
    const userName="Priya"
    if(userName==="Priya")
    {
        const website = " youtube"
        console.log(userName + website);

    }
    // console.log(website);
}

// console.log(userName);



//+++++++++++++++++++++++INTERESTING+++++++++++++++++++++++
/*
There are two ways to generate function 
*/

//First
function addOne(num)// ismein khaki declaration kiya hain 
    {
          return num +1
    }

console.log(addOne(3));


//Second
const addTwo = function (num)// these are basically called expressions
                             // Ismein declare karke variable mein hold bhi kiya hain
{
    return num+2
}
console.log(addTwo(5));



// Ab dono diffrence kya hain
// agar we do like this 
// 

//First
console.log(addOne(3));
function addOne(num)
    {
          return num +1
    }

// toh hame koi error nahi milega lekin 
// we can also redeclare it 

//Second

console.log(addTwo(5));// but we can not do like this error will be generated
const addTwo1 = function (num)
{
    return num+2
}











