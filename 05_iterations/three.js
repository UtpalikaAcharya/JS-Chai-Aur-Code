// for of 
//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr)
{
    // console.log(num);
}
const str= " Hello World"
for (const index of str ) 
{ 
    // console.log(`Each character is ${index}`); 
}


// Maps 

const map =new Map()
{
    map.set("1","shaktiman")
    map.set("2","balveer")
    map.set("3","ganjaram")
}
// console.log(map.get("1"));
for (const value of map) {
    // console.log(value);          /*[ '1', 'shaktiman']
                                //  [ '2', 'balveer'  ]
                                //  [ '3', 'ganjaram' ] */
    
}
for (const [value,valu] of map) {
    console.log( value +" "+valu)        //1 shaktiman
                                        //2 balveer
                                         //3 ganjaram
}
// the object are not iterable but maps are so here I have iterated obj but is not the good way to do it
// objects are not directly iterable with forof loop like maps or strings

const obj={
    game1:"Nfs",
    game2:"Spiderman"
}
const key =Object.keys(obj)
const value=Object.values(obj)

for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log(`${key[i]} ${value[i]}`)
}

// for (const i of obj) {
//     console.log(obj.keys);
    
// }