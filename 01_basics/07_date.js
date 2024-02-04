//Dates
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

/*
Output

Sat Feb 03 2024 11:22:50 GMT+0000 (Coordinated Universal Time)
Sat Feb 03 2024
2024-02-03T11:22:50.212Z
2024-02-03T11:22:50.212Z
2/3/2024
2/3/2024, 11:22:50 AM
11:22:50 GMT+0000 (Coordinated Universal Time)
*/



// How to declare a date
// The customised one
let myCreateDate= new Date(2023,4,5,5,3)
console.log(myCreateDate.toLocaleDateString())
let myCreateDate1= new Date("2023-01-14")
console.log(myCreateDate1.toLocaleDateString())

let myTimeStamp= Date.now()
console.log(myTimeStamp);// it will the answer in milli seconds from 1 January ,1970.

console.log(myCreateDate.getTime())





// See the date part again   3hrs 9 minute

