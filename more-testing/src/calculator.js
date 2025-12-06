// Pure functions - no side effects, same input = same output
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
  // Impure function (for contrast)
  getRandomNumber: () => Math.random(),
};
