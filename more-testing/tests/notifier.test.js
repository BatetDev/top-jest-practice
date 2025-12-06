const Notifier = require('../src/notifier');
const logger = require('../src/logger');

/**
 * Test suite for the Notifier module.
 * We'll use describe blocks to group related tests.
 */
describe('Notifier', () => {
  /**
   * jest.spyOn(object, methodName) creates a "spy" that:
   * - Tracks calls to the real method
   * - Lets you see how many times it was called, with what arguments
   * - Optionally lets you change its behavior with .mockReturnValue()
   *
   * Unlike jest.mock(), spyOn doesn't replace the entire module.
   * The original method still runs unless you mock its implementation.
   */
  let logSpy; // Will hold reference to our spy

  /**
   * beforeEach(fn) runs the function BEFORE each test in this describe block.
   * This is crucial for test isolation - each test starts fresh.
   */
  beforeEach(() => {
    // Create a fresh spy for logger.log before each test
    logSpy = jest.spyOn(logger, 'log');
  });

  /**
   * afterEach(fn) runs the function AFTER each test.
   * Used for cleanup to prevent tests from affecting each other.
   */
  afterEach(() => {
    // Restore the original logger.log method
    // Without this, the spy would persist and could affect other tests
    logSpy.mockRestore();
  });

  /**
   * Test 1: Basic functionality - does sendAlert work?
   * This test lets the real logger.log run (we're just spying on it).
   */
  test('sendAlert calls logger.log with correct message', () => {
    // Call the function under test
    const result = Notifier.sendAlert('Alice');

    // Verify the spy captured the call
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Alert for Alice: Check system');

    // Verify the return value (logger.log returns true)
    expect(result).toBe(true);
  });
});
