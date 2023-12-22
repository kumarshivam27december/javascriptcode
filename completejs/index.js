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

