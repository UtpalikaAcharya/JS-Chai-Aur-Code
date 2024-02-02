let score=true
console.log( typeof score );


let valueInNumber= Number(score)
console.log( typeof valueInNumber );
console.log( valueInNumber );   // but the answer is NaN // for let score="23abc"
console.log( valueInNumber ); // but the answer is 0 for null
console.log( valueInNumber );   // but the answer is NaN // for let score=undefined
console.log( valueInNumber );   // but the answer is 1 // for let score=true and 0 for false
let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



/*
For into boolean Conversions
1 => true;0=> false
"" => false
"Priyanshu"=> true
*/

// Into string
let someNuymber=44
let stringNumber=String(someNuymber)
console.log(stringNumber)
console.log(typeof stringNumber);
