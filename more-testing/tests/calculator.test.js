const calculator = require('../src/calculator');

describe('Pure Function Tests', () => {
  test('add returns sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });
});

test('divide throws error on zero division', () => {
  expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
});

test('impurte function test (constrast)', () => {
  const result1 = calculator.getRandomNumber();
  const result2 = calculator.getRandomNumber();
  // Note: This test might fail randomly!
  expect(result1).not.toBe(result2);
});
