//qn1 using logical operatora peson lies between 10-20
var age;
age=20;
if (age>10 && age<=21) {
    console.log(age)
}
//switch case
var a = 10;
var b = 5;
var key = '+';
switch (key) {
    case '+':
        console.log(a+b)
        break;

    case '-':
        console.log(a-b);
        break;

    default:
        break;
}

var number = 35;
if(number%2 == 0){
    console.log("divisible by two\n");
}
else if(number%3==0){
    console.log("divisible by three\n");
}

//write code to check if the given number are diviible by 2 or 3
var newvar = 105;
if(newvar%2){
    console.log("Not divisible by 2");
}else if (newvar%2==0) {
    console.log("divisible by 2") ; 
}
if(newvar%3){
    console.log("Not divisible by 3");
}else if (newvar%3==0) {
    console.log("divisible by 3") ;   
}

//age limiter using ternary operator
var age1 = 15;
(age1>=18)?console.log("Yes you can drive\n"):console.log("No as your age is below 18 \n you are not allowed to drive\n");




