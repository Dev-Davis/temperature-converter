
domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
// Variables to declare buttons for id's in functions

const enterTemp = document.getElementById('tempInput');
const celsius = document.getElementById('toCelsius');
const fahrenheit = document.getElementById('toFahrenheit');
const convertButton = document.getElementById('convertBtn')
const output = document.getElementById('outputTemp');
const clrBtn = document.getElementById('clearAll');
let valueTemp = 0;

// Variable color

// const inputColor = () => {

//     let color = 'green';
//     if (valueTemp > 32) {
//         color = 'red';
//     }
//     else if (valueTemp < 0) {
//         color = 'blue';
//     }
//     output.style.color = color;
// };

// const inputColor2 = () => {

//     let color = 'green';
//     if(valueTemp > 90){
//        color = 'red';
//     }
//     else if (valueTemp < 32){
//         color = 'blue';
//     }
//     output.style.color = color;
// }

// To Celsius temperature

const toCelsius = (inputColor) => {
   valueTemp = (document.getElementById('tempInput').value - 32)*(5/9);
   finalTemp = `<h3>${valueTemp} degrees C</h3>`;

   let color = 'green';

   if(valueTemp > 32){
       color = 'red';
   }
   else if (valueTemp < 0){
       color = 'blue';
   }
   output.style.color = color;

};

// To Fahrenheit temperature

const toFahrenheit = (inputColor2) => {
   valueTemp = (document.getElementById('tempInput').value * (9/5))+32;
   finalTemp = `<h3>${valueTemp} degrees F</h3>`;

   let color = 'green';

   if(valueTemp > 90){
       color = 'red';
   }
   else if (valueTemp < 32){
       color = 'blue';
   }
   output.style.color = color;

};

// Color variable 



const determineConverter = () => {
   if(celsius.checked){
       toCelsius();
       domPrinter('outputTemp', finalTemp);
   }
   else{
       toFahrenheit();
       domPrinter('outputTemp', finalTemp);
   }
};

const clearTempInput = () => {
   document.getElementById('tempInput').value = '';
   document.getElementById('outputTemp').textContent = '';
   celsius.checked = false;
   fahrenheit.checked = false;
};

convertBtn.addEventListener("click", determineConverter);
clrBtn.addEventListener("click", clearTempInput);
document.addEventListener("keyup", function(e){
   if (e.keyCode === 13){
       document.getElementById('convertBtn').click();
   }
});

init = () => {
    clearTempInput();
};
init();
