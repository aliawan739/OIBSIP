function convertTemperature() {
    var temperatureInput = document.getElementById('temperature');
    var unitSelect = document.getElementById('unit');
    var resultDiv = document.getElementById('result');
  
    var temperature = parseFloat(temperatureInput.value);
    var unit = unitSelect.value;
  
    if (!isNaN(temperature)) {
      var convertedTemperature;
      var convertedUnit;
  
      if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
      } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
      }
  
      resultDiv.textContent = convertedTemperature.toFixed(2) + ' ' + convertedUnit;
    } else {
      resultDiv.textContent = 'Invalid temperature';
    }
  }
  
  var convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertTemperature);
  