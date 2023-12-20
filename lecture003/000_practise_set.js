/*
write a program to print the marks of a student in an object 
using for loop
obj = {harry:98,rohan:70,aakash:7}

*/
 object1 = {harry:98,rohan:70,aakash:7}

 for (let index = 0; index < object1.length; index++) {
    const element = object1[index];
    console.log(object1[index]);
    
 } 
// for (const key in object1) {
//     if (Object.hasOwnProperty.call(object1, key)) {
//         const element = object1[key];
//         console.log(element);
//     }
// }

