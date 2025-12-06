const informer = require('../src/informer');

describe('Mock Function Basics', () => {
  test('sendAlert calls logger with correct message', () => {
    // Create a mock function
    const mockLogger = jest.fn();

    Notifier.sendAlert('Alice', 'System down', mockLogger);

    expect(mockLogger).toHaveBeenCalledTimes(1);
    expect(mockLogger).toHaveBeenCalledWith('ALERT for Alice: System down');
  });

  test('mockReturnvalue controls function output', () => {
    const mockCallback = jest.fn();
    mockCallback.mockReturnValue('processed');

    const users = ['Alice', 'Bob'];
    const results = Notifier.notifyAll(users, mockCallback);

    expect(results).toEqual(['processed', 'processed']);
    expect(mockCallback).toHaveBeenCalledTimes(2);
  });
});
