const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equalSign = document.querySelector('.equal-sign');
const ac = document.querySelector('.clear-all');
const decimal = document.querySelector('.decimal');
let inputArr = []; // raw input 
let operArr =[];
let currentOper;
let previousOperator;
let numString; 
let previousOperand=0;
let nextOperand=0;
let result; 


function getNextOperand (){
        display.value=nextOperand;
        numbers.forEach(number => {
        number.addEventListener('click', ()=>{
        inputArr.push(number.textContent); 
        numString = inputArr.join('');
        if (numString!==undefined){
            nextOperand=parseFloat(numString);
        };
        display.value=nextOperand;
        });
    });
};

function getOperator(){
    operators.forEach(operator =>{
        operator.addEventListener('click', ()=>{
            operArr.push(operator.textContent);
            currentOper=operArr[operArr.length-1];
            previousOperator=operArr[operArr.length-2]
            inputArr=[];
            if (previousOperator!==undefined){
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
    if (result==undefined){
    previousOperand = (nextOperand+0)
    };
};

function getResult(){
    equalSign.addEventListener('click', ()=>{
        previousOperator = currentOper; 
        calculate();
        nextOperand=0;
        operArr=[];
        decimal.disabled=false; 
      });
};

function calculate(){
    switch (previousOperator) {
        case '+':
            result = previousOperand + nextOperand;
            display.value = result;
            inputArr=[];
            numString='';
            previousOperand=result;
            break;
        case '-':
            result = previousOperand - nextOperand;    
            display.value = result;
            inputArr=[];
            numString='';
            previousOperand=result;
            break;
        case '*':
            result = previousOperand * nextOperand;    
            display.value = result;
            inputArr=[];
            numString='';
            previousOperand=result;
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
                previousOperand=0;
            } else { 
            previousOperand=result;
            display.value = result;
            };
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

