const display = document.querySelector('.display');
const buttons = document.querySelectorAll("button");
let inputValue = []; // raw input 
let inputString = ''; 
let defaultOperand=0;
let firstOperand;
let secondOperand; 
let operator;
let result; 

let numbers = /\d/;
let operators = /\+|\-|\*|\/|\=/; 

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

    operator = inputString.match(operators);
    operIndex = inputString.indexOf(operator);
    console.log('Index of the first operator= ' + operIndex);
  
    if (operIndex>0){
        firstOperand=parseFloat(inputString.slice(0, operIndex));
    } else if (operIndex==0){
        firstOperand=defaultOperand;
    } else {
        firstOperand=parseFloat(inputString);
    };

    if (operIndex>=0 && (operIndex+1)!==undefined){
        secondOperand = parseFloat(inputString.slice(operIndex+1));
    };


    console.log('First operand= ' + firstOperand);
    console.log('Second operand= ' + secondOperand);
    display.value=inputString;
    return [firstOperand, secondOperand] + calculate();
};

function calculate(){
    if (operator==`+` && secondOperand!==undefined && secondOperand!==NaN){
       addition();
    };
};

function addition(){

  result = firstOperand + secondOperand;
//   firstOperand=result;
  
  console.log('First operand= ' + firstOperand);
  console.log(result);
  if (result!==NaN){
      display.value = result;
      inputValue=[]; 
    }else {
          display.value=inputString;
      };
//   inputValue=[]; // тут нужен if, иначе обнуляется само
  
};






 // console.log("Default oprand= " + defaultfirstOperand);
    // console.log("Operator =" + operator);
    // console.log("firstOperand =" + firstOperand);
    // console.log("Input string after = ")+ inputString;

    // operIndex = function(){
    //     operIndexArr =[];
    //     for(i=1; i<operator.length; i++){
    //         operIndex[i]=inputString.indexOf(operator);
    //     };
    // }; 