// 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their
// sum. Call the function before it is declared to demonstrate hoisting.

console.log(addNumber(12, 15)); // Output => 27

function addNumber(a, b) {
  return a + b;
}

// 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns
// their product. Use function expressions to define the function and call the function before it is
// declared to demonstrate hoisting.

//console.log(multiplyNumbers(12,12)); // Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function (a, b) {
  return a * b;
};

// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a
// variable inside the function using the var keyword and log its value to the console before it is
// assigned a value to demonstrate variable hoisting.

function takeTwoNumber(num1, num2) {
  console.log(sum);
  var sum = num1 + num2;
  return sum;
}

console.log(takeTwoNumber(15, 15)); // 30

// 04. Declare three variables, one using let, one using var, and one using const, all inside a
// block scope. Assign them values and log their values to the console before and after they are
// declared to demonstrate variable hoisting.

{
    console.log(x); // undefined
  // console.log(y); // Cannot access 'y' before initialization
  // console.log(z); // Cannot access 'z' before initialization

  var x = "PW";
  let y = "Skills";
  const z = "!";

    console.log(x); // PW
    console.log(y); // Skills
    console.log(z); // !
}


// 05. Declare a variable using let inside a block scope and attempt to log its value to the console
//  before it is assigned a value to demonstrate the temporal dead zone.

{
     console.log(variable1) // Referece error : Cannot access 'variable1' before initialization
    let variable1 = "Hello";
    console.log(variable1); // Hello
}

//---------------------------------------------------------------------------------------------------
