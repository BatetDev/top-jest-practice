/**
 * A simple logging utility
 * In reality, this might write to console, a file, or a remote service.
 * We'll spy on its 'log' method to verify calls without replacing the entire module.
 */

module.exports = {
  log: (message) => {
    // This console.log will actually run when we use jest.spyOn
    // (unlike with jest.mock, where it would be completely replaced)
    console.log(`[REAL LOGGER]: ${message}`);
    return true; // Simulate a successful log operation
  },
};
