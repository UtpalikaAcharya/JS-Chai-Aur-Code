const score= 400
console.log(score);



const balance= new Number (100)
console.log(typeof(balance.toString()));
const str1= String(balance)
console.log(typeof(str1));


// toFixed() method it is used for precision of the value
console.log(balance.toFixed(2));


// toPrecision() method   // it returns a strting value
const num= 123.89666
console.log(num.toPrecision(3));//23.9 for 23.8966
console.log(num.toPrecision(3));//124 for 123.8966


//toLocaleString()

const num2 = 1000000
console.log(num2.toLocaleString());
console.log(num2.toLocaleString("en-IN"));// for indian standard




// +++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++
console.log(Math.abs(-4));// 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(3.4))//4




// important     Math. random ()

console.log(Math.random());
console.log((Math.random()*10)+1);
let min=10
let max=20

console.log(Math.floor(Math.random()*(max-min)+1)+ min)