const weatherApi = require('./weatherApi');

function weatherReporter(city) {
  const temp = weatherApi.getTemperature(city); // Depends on the external module
  return `Temperature in ${city} is ${temp}°C`;
}

module.exports = weatherReporter;
