const inputValue = document.querySelector('.text-box');
const fromCelsius = document.querySelector('.from-celsius');
const fromFahrenheit = document.querySelector('.from-fahrenheit');
const fromKelvin = document.querySelector('.from-kelvin');
const toCelsius = document.querySelector('.to-celsius');
const toFahrenheit = document.querySelector('.to-fahrenheit');
const toKelvin = document.querySelector('.to-kelvin');
const submitBtn = document.querySelector('.submit-btn');
const resultLabel = document.querySelector('.result');

function convertTemperature() {
    let fromValue, toValue, result;

    if (fromCelsius.checked) {
        fromValue = "Celsius";
    } else if (fromFahrenheit.checked) {
        fromValue = "Fahrenheit";
    } else if (fromKelvin.checked) {
        fromValue = "Kelvin";
    }

    if (toCelsius.checked) {
        toValue = "Celsius";
    } else if (toFahrenheit.checked) {
        toValue = "Fahrenheit";
    } else if (toKelvin.checked) {
        toValue = "Kelvin";
    }

    const inputTemp = Number(inputValue.value);

    if (fromValue === toValue) {
        result = inputTemp;
    } else if (fromValue === "Celsius" && toValue === "Fahrenheit") {
        result = (inputTemp * 9) / 5 + 32;
    } else if (fromValue === "Celsius" && toValue === "Kelvin") {
        result = inputTemp + 273.15;
    } else if (fromValue === "Fahrenheit" && toValue === "Celsius") {
        result = (inputTemp - 32) * (5 / 9);
    } else if (fromValue === "Fahrenheit" && toValue === "Kelvin") {
        result = ((inputTemp - 32) * (5 / 9)) + 273.15;
    } else if (fromValue === "Kelvin" && toValue === "Celsius") {
        result = inputTemp - 273.15;
    } else if (fromValue === "Kelvin" && toValue === "Fahrenheit") {
        result = ((inputTemp - 273.15) * 9) / 5 + 32;
    } else {
        result = "Invalid conversion";
    }

    resultLabel.innerHTML = `Result: <span>${result.toFixed(1)}° ${toValue.charAt(0).toUpperCase()}<span>`;
}

submitBtn.addEventListener('click', convertTemperature);

inputValue.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        convertTemperature();
    }
});