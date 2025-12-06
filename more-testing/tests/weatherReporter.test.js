const weatherReporter = require('../src/weatherReporter');

// 1. Tell Jest to mock the entire weatherApi module
jest.mock('../src/weatherApi', () => ({
  // 2. Explicitly mock the getTemperature function
  getTemperature: jest.fn(),
}));

// 3. Import the mocked module AFTER declaring the mock
const weatherApi = require('../src/weatherApi');

test('weatherReporter returns correct format', () => {
  // 4. Set up the mock's behavior
  weatherApi.getTemperature.mockReturnValue(22);

  // 5. Call the function under test
  const result = weatherReporter('London');

  // 6. Assert the result
  expect(result).toBe('Temperature in London is 22°C');
});

test('weatherReporter uses the mocked value correctly', () => {
  weatherApi.getTemperature.mockReturnValue(30);
  expect(weatherReporter('Madrid')).toBe('Temperature in Madrid is 30°C');
});
