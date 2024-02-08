const obj={
    game1:"Nfs",
    game2:"Spiderman"
}
for (const key in obj) {   
      //console.log(`${key} the game name is ${obj[key]}`);  
} 
//output
//game1 the game name is Nfs
//game2 the game name is Spiderman

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}