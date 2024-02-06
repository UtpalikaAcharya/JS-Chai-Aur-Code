// const tinderUser=new Object()


//  const tinderUser={}

//  tinderUser.id="123abc"
//  tinderUser.name="Sammy"
//  tinderUser.isLoggedIn=false

// console.log(tinderUser);

// const regularUser={
//     email:"priya@gmail.com",
//   fullName:{
//   userFullname: 
//   {
//       firstName: "Hitesh",
//       lastName: "Gupta"
//   }
//            }
//                   }
// console.log(regularUser.fullName.userFullname.firstName);


// there is also a concept of optional chaining so for that 
// it is like suppose in this line 
// console.log(regularUser.fullName.userFullname.firstName);
// fullName doesnt exist then what so in that case we use this syntax
//console.log(regularUser.fullName?.userFullname.firstName);
// other wise we have to use if/else statement


// const obj1={
//     1: "a",
//     2:"b",
//     3:"c"
// }
// const obj2={
//     4:"d",
//     5:"e",
//     6:"f"
// }

// const obj3={obj1,obj2}
// console.log(obj3);

// output is not like that we desired 
// {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '4': 'd', '5': 'e', '6': 'f' }
//   }

// So to make like we want 
// we use Object.Assign
// const obj4=Object.assign({},obj1,obj2)//syntax

// But the best thing is to spread operator like in array

// const obj5={...obj1,...obj2}
// console.log(obj5)


/* How to handle objects which come from data
mostly the the data which comes from the serer is in the form of array objects */
//Ex
// const users =[
//     {
//         id:"123abc",
//         name:"Vecna",
//     },
//     {
//         id:"456qwe",
//         name:"Utu" 
//     }
// ]

// console.log(users[1].name);





// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// //the point to be noted in output is that the return type is in array
// console.log(Object.values(tinderUser));


// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]



// console.log(tinderUser.hasOwnProperty("isLoggedIn"));






// Destructing of the object
const course=
{
    courseName:"js in hindi",
    price:"999",
    courseInstructor: "Hitesh"
}


//console.log(course.courseInstructor);// this is a usual way the another way which most person use is 


const {courseInstructor:ins}=course

console.log(ins);

//Json is nothing but object without name
//proper struture of a json

// {
//     "nam":"hitesh",
//     "course":"js in hindi",
//     "fees":"free"
//}


// for Json Practice there is a site random user me

[
    {},
    {},
    {}
]


















