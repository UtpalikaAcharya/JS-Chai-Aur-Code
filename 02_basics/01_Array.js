//Array
const arr = [1,2,3,4,5,6,"hitesh"]
const myHeroes=["shaktiman","Ironman"]
// const arr2=new Array(1,2,3,4)
// console.log(arr[2]);


//Array methods

// arr.push(6)
// arr.push(45)
// arr.pop()

// Unshift
// arr.unshift(8)
// arr.shift()


// console.log(arr.includes(9))
// console.log(arr.indexOf(1
//     ));


// const arr4=arr.join()

// console.log(typeof arr);
// console.log(typeof arr4);


const newArray=arr.join() // It converts the array into a string
console.log( newArray);

// slice  and splice 
// console.log("A" ,arr);
// const slice= arr.slice(1,3)
// console.log(slice);
// console.log("B",arr);

// const splice= arr.splice(1,3)
// console.log(splice);
// console.log("C",arr);

// output
// A [ 1, 2, 3, 4, 5, 6, 'hitesh' ]
// [ 2, 3 ]
// B [ 1, 2, 3, 4, 5, 6, 'hitesh' ]
// [ 2, 3, 4 ]
// C [ 1, 5, 6, 'hitesh' ]



// Notes
// in slice the last range is not included and there original array remains the same 
//In splice the last range is also included whereas the original array  is also changed   the original array removes the items which you have spliced 
