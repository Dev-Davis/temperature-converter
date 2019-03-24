
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

// To Celsius temperature

const toCelsius = () => {
   valueTemp = (document.getElementById('tempInput').value - 32)*(5/9);

   let color = 'green';
   if(valueTemp > 32){
       color = 'red';
   }
   else if (valueTemp < 0){
       color = 'blue';
   }
   output.style.color = color;
   finalTemp = `<h2>${valueTemp} degrees C</h2>`

};

// To Fahrenheit temperature

const toFahrenheit = () => {
   valueTemp = (document.getElementById('tempInput').value * (9/5))+32;

   let color = 'green';
   if(valueTemp > 90){
       color = 'red';
   }
   else if (valueTemp < 32){
       color = 'blue';
   }
   output.style.color = color;
   finalTemp = `<h2>${valueTemp} degrees C</h2>`

};

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
