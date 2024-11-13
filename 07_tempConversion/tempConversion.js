const convertToCelsius = function(fahrIn) {
  let cels = Math.round(((fahrIn - 32) * 5/9) * 10) / 10;
  return cels;
};

const convertToFahrenheit = function(celsIn) {
  let fahr = Math.round(((celsIn * 9/5) + 32) * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
