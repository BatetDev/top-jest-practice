describe('Understanding Mocks', () => {
  test('see inside a jest.fn()', () => {
    const mockFunc = jest.fn();

    // Call it a few times
    mockFunc('first', 'call');
    mockFunc('second', 'call', { extra: 'data' });

    // Inspect the mock property
    console.log('mock.calls:', mockFunc.mock.calls);
    console.log('mock.calls length:', mockFunc.mock.calls.length);
    console.log('First call arguments:', mockFunc.mock.calls[0]);
    console.log('Second call arguments:', mockFunc.mock.calls[1]);

    expect(mockFunc.mock.calls.length).toBe(2);
    expect(mockFunc.mock.calls[0]).toEqual(['first', 'call']);
    expect(mockFunc.mock.calls[1]).toEqual([
      'second',
      'call',
      { extra: 'data' },
    ]);
  });

  test('mock with return value', () => {
    const mockFunc = jest.fn();

    // SET RETURN VALUE BEFORE CALLING
    mockFunc.mockReturnValue('always this');

    const result1 = mockFunc();
    const result2 = mockFunc('with', 'args');

    console.log('Results:', result1, result2);
    console.log('mock.results:', mockFunc.mock.results);

    expect(result1).toBe('always this');
    expect(result2).toBe('always this'); // Should ignore arguments!
  });

  test('mock without return value (returns undefined)', () => {
    const mockFunc = jest.fn();

    const result = mockFunc('hello');
    console.log('Result without mockReturnValue:', result);

    expect(result).toBeUndefined();
  });

  test('mockImplementation example', () => {
    const mockFunc = jest.fn();

    mockFunc.mockImplementation((arg1, arg2) => {
      return `${arg1} and ${arg2}`;
    });

    const result = mockFunc('apples', 'oranges');
    console.log('mockImplementation result:', result);

    expect(result).toBe('apples and oranges');
  });
});
