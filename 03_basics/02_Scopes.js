




{}// curly braces are called the scope 
if (true)
// this is a block scope outside it are called global scope 
{
    let a = 10
    const b =20
    var c= 30
}
//console.log(a);// not showing the output  good!
//console.log(b);// not showing the output
console.log(c);// here it is the problem 
/*
AN IMPORTANT THING TO NOTE

 The scope which we are using in the node is diffrent and the scope which we are using in the browser window is diffrent !!!!!

*/


// A good advice dont use var at all




























