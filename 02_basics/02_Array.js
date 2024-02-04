const marvelHeroes =["Ironman", "Thor","Spiderman"]
const dcHeroes= ["Superman","Flash","Batman"]
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][1]);

// const newArray=marvelHeroes.concat(dcHeroes)
// console.log(newArray)



// spread method which we use instead of concat

// const all_new_heroes =[...marvelHeroes,...dcHeroes]
// console.log(all_new_heroes);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// merging the depth of the array

// const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array= anotherArray.flat(Infinity);
// console.log(real_another_array);



/*
Web scraping ,sometimes  we need data from the website ,
the  data may be in diffrent format like nodeList ,objects or string then we have two methods one  to check 
whether the given data is Array or not and the other to convert it into array
*/
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Priya",age:"21"}));// []
// In this case it is returning only [] so here we have to tell whether we want to make key or value array.



// interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
