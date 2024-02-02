const accountId=54;
let accountEmail="Prtiya@gmail.com"
var accountPassword="12345"
accountCity="Rajasthan"
accountEmail="has!@gmail.com"
accountPassword="344"
accountCity="gannjapur"//never use this way
let accountState;


// accountId=2 // not allowed 
console.log(accountId);



/*
Prefer not to use var
because of issue in block scope
*/
console.table([accountCity, accountEmail,accountPassword,accountId,accountState]);