let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kiloToPound = 2.2046226218;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  let feet = baseValue * meterToFeet;
  let meeter = baseValue / meterToFeet;
  let gallons = baseValue * literToGallon;
  let liters = baseValue / literToGallon;
  let pounds = baseValue * kiloToPound;
  let kilos = baseValue / kiloToPound;
  lengthEl.textContent = `
    ${baseValue} meters = ${feet.toFixed(3)} feet
    ${baseValue} feet = ${meeter.toFixed(3)} meters
  `;
  volumeEl.textContent = `
    ${baseValue} liters = ${gallons.toFixed(3)} gallons
    ${baseValue} gallons = ${liters.toFixed(3)} liters
  `;
  massEl.textContent = `
    ${baseValue} kilos = ${pounds.toFixed(3)} pounds
    ${baseValue} pounds = ${kilos.toFixed(3)} kilos
  `;
});
