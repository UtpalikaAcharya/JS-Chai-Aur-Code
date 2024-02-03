const name = " Priyanshu"
const repoCount =" 11"

console.log(name + repoCount +" Value")// not used in modern days
console.log(`My name is ${name} and my repocount is ${repoCount}`); // backticks it includes String Interpolation
// Another way to initialize String
const name1 = new String("priyanshu");
console.log(name1[0]);
console.log(name1.__proto__);// it returns {} it means object

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(2))
console.log(name1.indexOf('t'));

// to see all the methods paste this line in console 
// const str = new String("Priyanshu")
// str
// then in the prototype section all the functions will be shown



//substring
const newString= name1.substring(0,4)
console.log(newString);

//slice
const str2=name1 .slice(-8, 4) // it prints the index from the revese order // output => riy
console.log(str2);
// What if we do the same thing with substring
const newString1= name1.substring(-8,4)
console.log(newString1);// it doesnt obey and start froms zero 
// output => priy


// Trim method 
 const str3= "    priya     "
console.log(str3);
console.log(str3.trim());

// replace method

const str4= "my name is priyanshu gupta "
console.log(str4.replace("priyanshu", "Utpalika"));

//includes

console.log(str4.includes("priyanshu"));

//split method

console.log(str4.split(" "));



