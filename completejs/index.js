// console.log(9-"5");//bug
// console.log(5+"4");//concatenate
// console.log("name"-"surname")//not a number


//during varname cannot be  have special character
//bool count as 1->true and 0->false
// console.log(true+true); //2
// console.log(false - true); //0-1 = -1   

////2nd bug
// var iamuseless = null;
// console.log(iamuseless);//null
// console.log(typeof(iamuseless));//null is o=not any kind of object

// var iamundefined;
// console.log(iamundefined);//undefined
// console.log(typeof(iamundefined));//undefined












/*
what is NaN->not a number
nan is a property of global variable
the initial value of nan is not a number

document object model(dom) vs browser object model(bom)

some properties and uses of nan  ->


var  myphonenumber = 9876543210;//even if we put  it in double quotes then also it will treat it as integer until u don't put some character or anthing else init
var myrealname = "thomas shelby";
console.log(isNaN(myphonenumber));
console.log(isNaN(myrealname));

if (isNaN(myphonenumber)) {
    console.log("plz enter valid number")
}


console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(isNaN(NaN));

console.log(13+7)
console.log(13-7)
console.log(13*7)
console.log(13/7)
console.log(13%7)
*/











/*

Increment and Decrement operator
Operator: x++ or ++x or x-- or --x
If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);
console.log(newNum);


Postfix increment operator means the expression is evaluated 
first using the original value of the variable and then the 
variable is incremented(increased).


If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = --num + 5; 
console.log(num);
console.log(newNum);


Prefix increment operator means the variable is incremented first and then 
the expression is evaluated using the new value of the variable.



*/











/*
Comparison operators
A comparison operator compares its operands and 
returns a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

Equal (==)
console.log(a == b);

Not equal (!=)
console.log(a != b);

Greater than (>)
console.log(a > b);

Greater than or equal (>=)
console.log(a >= b);

Less than (<)
console.log(a < b);

Less than or equal (<=)
console.log(a <= b);


var a = 20;
var b = 30;
console.log(a!=b);


*/










/*
Logical operators
Logical operators are typically used with Boolean (logical) values; 
when they are, they return a Boolean value.

var a = 30;
var b = -20;

Logical AND (&&)
The logical AND (&&) operator (logical conjunction) for a set of 
operands is true if and only if all of its operands are true.


console.log(a > b && b > -50 && b < 0);


Logical OR (||)
The logical OR (||) operator (logical disjunction) for a set of 
operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b > 0));

Logical NOT (!)
The logical NOT (!) operator (logical complement, negation) 
takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);




*/








// console.log(3**3)//3 to the power of three //exponentition operator
//what will be the output when we add a number to the string ?
// console.log(7 + "Hello world"); // it concatenate 















/* String Concatenation(operators)
The concatenation operator (+) concatenates two string values together, 
returning another string that is the union of the two operand strings.


console.log("Hello World");

console.log("hello " +  "world");

var myName = "vinod";

console.log(myName + " thapa");
console.log(myName + " bahadur");
console.log(myName + " bahadur Thapa");



 */













/*
write a a programme to swap 2 numbers
code :->
var a = 10;
var b = 20;
var k = a;
a = b;
b = k;
console.log("The value of a is "+ a);
console.log( "The value of b is "+ b);

*/ 











/*
write a programme to swap 2 num without 3rd variable

var a = 10;
var b = 20;
a = a+b;
b = a-b;
a = a-b;
console.log("The value of a is "+ a);
console.log( "The value of b is "+ b);


*/









/*
what is the difference between == and === 

== just check if the number is equal or not it can be number and string 
if the value value matches it returns true

whereas === check value as well as data type




var num1 = 5;
var num2 = '5';
console.log(num2)// integer -> data type it will just return 5
console.log(num1==num2); //true
console.log(num1===num2); //false


*/







/*

Control Statement - 

If...Else 
The if statement executes a statement if a specified condition is truthy. 
If the condition is falsy, another statement can be executed.


if raining = raincoat
else no raincoat


var tomr = 'sunny';

if(tomr == 'rain'){
  console.log('take a raincoat');
}else{
  console.log('No need to take a raincoat');
}



*/









/*
WRITE A PROGRAM TO IMPLEMENTOR CHECK IF THE YEAR IS LEAP OR NOT


var year1 = 2100;
if (year1%4===0) {
  if (year1%100 === 0) {
    if (year1%400 ===0) {
      console.log("It is a leap year");
    }else{
      console.log("It is not a leap year");
    }
  }else{
    console.log("It is a leap year");
  }
}else{
  console.log("It is not a leap year");
}


*/









/*
What is truthy and falsy in javascript ???

we have total 5 falsy value along with false**
i.e.
0,null,"",NaN,undefined


if(score = 0){
  console.log("We lose the game\n");
}else{
  console.log("We won the game\n");  //this will be executed only
}



*/








/*
Ternary operator

var age = 10;
(age>=18)?console.log("You can vote"):console.log("you cannot vote");

*/










/*
Switch case in javascript

Evaluates an expression, matching the expression's value to a 
case clause, and executes statements associated with that case.

Important terms to know:->

#break
Terminates the current loop, switch, or label 
statement and transfers 
program control to the statement following the terminated statement.


#continue
Terminates execution of the statements in the current iteration of the 
current or labeled loop, and continues execution of the loop with the 
next iteration.

var length = 3,breadth = 4;
var side = 4;
var PI = 3.142;
var radius = 10;

var input = "circle";
switch (input) {
  case "circle":
    console.log("The area of the circle is "+(PI*(radius**2)));
    break;

  case "rectangle":
    console.log("The area of rectangle is "+(length*breadth));
    break;

  case "square":
    console.log("The area of square is "+(side**2));
    break;

  default:
    console.log("plz enter the valid data");
    break;
}

*/










/*LOOPS

While Loop Statement
The while statement creates a loop that executes a specified statement 
as long as the test condition evaluates to true. 

var num=20;
// block scope 
while(num <= 10){
  console.log(num); //infinte loop
  num++;
}


#while loops

var num1 = 1;
while(num1<=10){
  console.log(num1);
  num1++;
}

var num2 = 4;
var i = 1;
while(i<=10){
  console.log(num2 + " * "+i+" = "+(num2*i));
  i++;
}

*/








/*
#for loops
var num = 4;
for( i = 1;i<=10;i++){
  console.log(num," * ",i," = ",(num*i));
}


For Loop 

for(var num = 0; num <= 10; num++){
    debugger;
    console.log(num);
}

*/










/*
#Do-while loop
It at least print 1 condition 


do{
  console.log("Hello world");//It will print it once
}while(false)//condition false hence execute



Do-While Loop Statement

var num = 20;
do{
  debugger;
  console.log(num); //infinte loop
  num++;
}while(num <= 10);

*/






/*

// for-in loop

var names = "lovelyprofessionaluniversity";
var size = 0;
for(let val of names){
    size++;
}
console.log(size);
console.log(names.length);


*/




   



/*
for-of loop for objects



let my_facebook_id = {
  names : "shivu",
  emails : "shivu@gmail.com",
  age : 20,
  address:"India"
}

for (let i in my_facebook_id) {
  console.log("key = ",i," Value = ",my_facebook_id[i]);
}



*/


/*

#challenge Time 
JavaScript program to print table for given number (8)?

output :  8 * 1 = 8 
          8 * 2 = 16(8*2)
         => 8 * 10 = 80

for(var num = 1; num<= 10; num++){
    var tableOf = 12;  
  console.log(tableOf + " * " + num + " = " + tableOf * num);
}


*/


/*
Function Definition 

Before we use a function, we need to define it. 

A function definition (also called a function declaration, or function statement) 
consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, {...}.
 

*/



/* Functions in JavaScript 

A JavaScript function is a block of code designed to perform a particular task.





var a = 10;
var b = 20;
var sum = a+b;
console.log(sum);


function sum(){
  var a = 10, b = 40;
  var total = a+b;
  console.log(total);
}



function sum() { //here parameter is passed
  var a = 20,b=40;
  var total = a+b;
  console.log(total);
}

sum(); //here it is argument which is passed

// var num1 = sum();
// num1;
*/













/*

Function Parameter vs Function Arguments


Function parameters are the names listed in the function's definition. 
Function arguments are the real values passed to the function.


function sum(a,b){
  var total = a+b;
  console.log(total);
}

sum();
sum(20,30);
sum(50,50);
sum(5,6)
*/





/*

->Calling functions
Defining a function does not execute it.
A JavaScript function is executed when "something" invokes it (calls it).


function sum(){
  var a = 10, b = 40;
  var total = a+b;
  console.log(total);
}

sum();


*/






/*
var funExp = function(a,b){
  return total = a+b;
}

var sum = funExp(15,15);
var sum1 = funExp(20,15);

console.log(sum == sum1 );

*/






/*

Why Functions? 

You can reuse code: Define the code once, and use it many times.
You can use the same code many times with different arguments, 
to produce different results.

  OR

A function is a group of reusable code which can be called anywhere 
in your program. This eliminates the need of writing the same code 
again and again.

DRY => do not repeat yourself


*/






/*
Function expressions
"Function expressions simply means 
create a function and put it into the variable "

function sum(a,b){
  var total = a+b;
  console.log(total);
}

var funExp = sum(5,15);



*/






/*
 Return Keyword


When JavaScript reaches a return statement, 
the function will stop executing.

Functions often compute a return value.
The return value is "returned" back to the "caller"


function sum(a,b){
  return total = a+b;
}

var funExp = sum(5,25);

console.log('the sum of two no is ' + funExp );


*/






/*

A function without the name is your anonymous function


*/
var sum = function(a,b){
  
}