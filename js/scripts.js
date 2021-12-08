function addZeros(num) {

    let result = "";
 
    for (let i = 0; i < num; i++) {
       result = result + "0";
    }
    return result;   
 } 
 
 function decompose(num) {
 
    const numToString =  num.toString();
    
    let result = [];
 
    let numberOfZeros = numToString.length - 1;
 
    let number = "";
 
    for (let i = 0; i < numToString.length; i++) {
       number = numToString.charAt(i) + addZeros(numberOfZeros);
       if (number !== "000" && number !== "00") {
       result.push(number)
       }
       numberOfZeros--;
       
    }
 
    return result;
 }
 
 function convertToRoman(num) {
 
 let result = "";
 
 let decomposition = decompose(num);
 
 const simbolos = {
 0: "",
 1: "I",
 2: "II",
 3: "III",
 4: "IV",
 5: "V",
 6: "VI",
 7: "VII",
 8: "VIII",
 9: "IX",
 10: "X",
 20: "XX",
 40: "XL",
 50: "L",
 60: "LX",
 80: "LXXX",
 90: "XC",
 100: "C",
 200: "CC",
 300: "CCC",
 400: "CD",
 500: "D",
 600: "DC",
 700: "DCC",
 800: "DCCC",
 900: "CM", 
 1000: "M",
 2000: "MM", 
 3000: "MMM" 
 };
 
 if (simbolos[num] === undefined) {
 
    for (let i = 0; i < decomposition.length; i++) {
       result = result + simbolos[decomposition[i]]
    }
    return result
 }
 
 return simbolos[num];
 
 }
 
 const userInput = document.getElementById('userInput');
 const resultInput = document.getElementById('resultInput');
 const convertButton = document.getElementById('convertButton');
 const resetButton = document.getElementById('resetButton');
 const convertButtonMobile = document.getElementById('convertButtonMobile');
 const resetButtonMobile = document.getElementById('resetButtonMobile');
 
 convertButton.addEventListener('click', () => {
   resultInput.value = convertToRoman(userInput.value);
   resultInput.classList.add('correct');
 });
 
 resetButton.addEventListener('click', () => {
   userInput.value = '';
   resultInput.value = '';
   resultInput.classList.remove('correct');
 });
 
 convertButtonMobile.addEventListener('click', () => {
   resultInput.value = convertToRoman(userInput.value);
   resultInput.classList.add('correct');
 });
 
 resetButtonMobile.addEventListener('click', () => {
   userInput.value = '';
   resultInput.value = '';
   resultInput.classList.remove('correct');
 });

/* Página actual activo */

const actualUrl = location.href;
const camelCaseConverterButton = document.getElementById("camel-button");
const RomanNumeralConverterButton = document.getElementById("banco-button");
const camelCaseConverterButtonUrl = document.getElementById("camelCaseConverterButton").getAttribute('href');
const RomanNumeralConverterButtonUrl = document.getElementById("RomanNumeralConverterButton").getAttribute('href');
if (actualUrl.includes(RomanNumeralConverterButtonUrl)) {
   RomanNumeralConverterButton.classList.add('active');
}else camelCaseConverterButton.classList.add('active');
