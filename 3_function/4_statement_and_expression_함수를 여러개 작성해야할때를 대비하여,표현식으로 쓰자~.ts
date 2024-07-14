/**
 * Statement (일반함수) and Expression (표현식 const)
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
}

/**
* statement (문장)
*/
function add(x: number, y: number) : number{
  return x + y;
}

function subtract(x: number, y: number) : number{
  return x - y;
}

function multiply(x: number, y: number) : number{
  return x * y;
}

function divide(x: number, y: number) : number{
  return x / y;
}

/**
* expression (표현식) 
*/
type CalculationType = (x: number, y: number) => number;

const add2 : CalculationType = function(x, y){
  return x + y;
}

const subtract2 : CalculationType = function(x, y){
  return x - y;
}

const multiply2 : CalculationType = function(x, y){
  return x * y;
}

const divide2 : CalculationType = function(x, y){
  return x / y;
}