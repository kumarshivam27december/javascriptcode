//question 1
var naming = "Shiv";
console.log(naming+5);
//it concatinate if we add string to the number or number to the string
//question 2
console.log(typeof(naming));
//question3
//create a const object in javascript.
//can you change it to hold a number later?
const object1 = {
    name1 : "Shivam",
    rollno: 30
}

console.log(object1);

// question4
// try to add a new key to the const object in previous problem . 
// were you able to do it?->no we cannot do it

object1 = {
    name1 : "Shivam",
    rollno: 30,
    regno:"12219604"
}

console.log(object1);

//question 5
//write a js program to create a word-meaning dictionaries of 5 words.
const dict = {
    chapter:"lecture",
    color:"paint",
    rainbow:"vibgyor",
    blast:"explosion",
    learning:"understanding"

}
console.log(dict.chapter);
console.log(dict);
