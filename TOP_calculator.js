const display = document.querySelector('.display');
const buttons = document.querySelectorAll("button");
let inputValue = []; // raw input 
let inputString = ''; 
let defaultOperand=0;
let operand;
let operator;
let result; 

let input = buttons.forEach(button => {
    button.addEventListener('click', ()=>{
      inputValue.push(button.textContent);
      inputString = inputValue.join('');
      console.log("Input value =" + inputValue);
      console.log("Input string =" + inputString);
      return inputString + parseInput();
    });
});

function parseInput(){
   let numbers = /\d/g;
   let operators = /\+|\-|\*|\/|\=/g; 
   let firstOperIndex = inputString.indexOf(operators);

   console.log(firstOperIndex);

   number = inputString.match(numbers); 
   if (number!==null){
       operand = parseFloat(number.join(''));
   } else {
       operand=defaultOperand;
   };

   operator = inputString.match(operators);
   if (operator!==null){
       inputString='';
   }
    console.log(operator);
    console.log("Default oprand= " + defaultOperand);
    console.log("Operator =" + operator);
    console.log("Operand =" + operand);
    console.log("Input s tring after = ")+ inputString;

   display.value=operand;
   return operand + calculate();
};

function calculate(){
    if (operator=='+'){
       addition();
    };
};

function addition(){
   result = defaultOperand+operand;
   defaultOperand=operand; 
   display.value = result;
   operand=0;
   inputString='';
   console.log("Result = " + result + "\n ");
}