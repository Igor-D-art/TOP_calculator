const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equalSign = document.querySelector('.equal-sign');
const ac = document.querySelector('.clear-all');
const decimal = document.querySelector('.decimal');
let inputArr = []; // raw input 
let operArr =[];
let currentOper;
let numString;; 
let defaultOperand=0;
let previousOperand=0;
let nextOperand=0;
let result; 


function getNextOperand (){
        display.value=nextOperand;
        numbers.forEach(number => {
        number.addEventListener('click', ()=>{
        inputArr.push(number.textContent); 
        numString = inputArr.join('');
        console.log("Input string =" + numString);
        if (numString!==undefined){
            nextOperand=parseFloat(numString);
            
        };
        console.log('Next operand= ' + nextOperand);
        display.value=nextOperand;
        });
        return nextOperand;
    });
};


function getOperator(){
    operators.forEach(operator =>{
        operator.addEventListener('click', ()=>{
            operArr.push(operator.textContent);
            currentOper=operArr[operArr.length-1];
            inputArr=[];
            if (operArr[operArr.length-2]!==undefined){
                calculate();
              };
            getPreviousOperand();
            decimal.disabled=false; 
        });
    });
};

function getDecimal (){
    decimal.addEventListener('click', ()=>{
        inputArr.push(decimal.textContent); 
        decimal.disabled=true; 
    });
};

function getPreviousOperand(){
    if (result!==undefined){
        previousOperand=result;
    } else {
        previousOperand = (nextOperand+0);
    };
    console.log('Next operand= ' + nextOperand);
    console.log('Previous operand= ' + previousOperand);
};

function getResult(){
    equalSign.addEventListener('click', ()=>{
        operArr[operArr.length-2] = currentOper;
        console.log('Equal sign pressed');
        calculate();
        nextOperand=undefined;
      });
};

function calculate(){
    switch (operArr[operArr.length-2]) {
        case '+':
            result = previousOperand + nextOperand;
            display.value = result;
            inputArr=[];
            numString='';
            console.log('Result= ' + result);
            break;
        case '-':
            result = previousOperand - nextOperand;    
            display.value = result;
            inputArr=[];
            numString='';
            console.log('Result= ' + result);
            break;
        case '*':
            result = previousOperand * nextOperand;    
            display.value = result;
            inputArr=[];
            numString='';
            console.log('Result= ' + result);
            break;
        case '/':
            result = previousOperand / nextOperand;    
            
            if (result==Infinity){
                display.value = "Error. Dividing at 0 detected!";
                inputArr=[];
                numString='';
                operArr=[];
                result=undefined;
                nextOperand=0;
            } else { 
            display.value = result;
            };
            console.log('Result= ' + result);
            break;
    }; 
};

function clearAll(){
    ac.addEventListener('click', ()=>{
        inputArr=[];
        numString='';
        operArr=[];
        result=undefined;
        nextOperand=0;
        getPreviousOperand();
        decimal.disabled=false; 
        display.value = nextOperand;
    });
};

function clearInput(){
    inputArr=[];
    numString='';
    operArr=[];
    decimal.disabled=false; 
};

getNextOperand();
getOperator();
getResult()
calculate();
clearAll();
getDecimal();
clearInput();
