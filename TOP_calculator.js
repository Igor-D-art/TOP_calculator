const display = document.querySelector('.display');
const buttons = document.querySelectorAll("button");
let displayValue = [];
let operands=[];
let result; 

let input = buttons.forEach(button => {
    button.addEventListener('click', ()=>{
      digit = button.textContent;
      displayValue.push(digit);
      return displayValue + displayInput();
    });
});

function displayInput(){
    display.value=displayValue.join('');
    console.log(display.value);
    return display.value + operate();
};

function operate(){
    if (display.value.includes('+')){
       addition();
    };
};

function addition(){
    operands = display.value.split('+');
   

}