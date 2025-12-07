const databaseSim = require('../src/databaseSim');

describe('Setup & Teardown Patterns', () => {
  // One-item setup
  beforeAll(() => {
    console.log('Starting DB tests suit');
  });

  // One-item teardown
  afterAll(() => {
    console.log('All DB tests completed');
  });

  // Runs before EACH test
  beforeEach(() => {
    console.log('Before test - clearing data');
    databaseSim.clearUsers(); // Reset state between tests
    databaseSim.addUser('Admin'); // Setup common test data
  });

  // Runs after EACH test
  afterEach(() => {
    console.log(`After test - user count: ${databaseSim.getUserCount()}`);
  });

  test('initial state has Admin user from beforeEach', () => {
    console.log('Test 1 running');
    expect(databaseSim.getUserCount()).toBe(1);
    expect(databaseSim.findUser('Admin')).toBe('Admin');
  });

  test('adding users works', () => {
    console.log('Test 2 running');
    databaseSim.addUser('Alice');
    expect(databaseSim.getUserCount()).toBe(2);
    expect(databaseSim.findUser('Alice')).toBe('Alice');
  });

  test('tests are isolated - starts fresh each time', () => {
    console.log('Test 3 running');
    // This test runs afters beforeEach clears and adds 'Admin'
    expect(databaseSim.getUserCount()).toBe(1); // Not 2 from previous test
    expect(databaseSim.findUser('Alice')).toBeUndefined(); // Alice from previous test is gone
  });

  describe('Nested describe block with its own setup', () => {
    beforeEach(() => {
      console.log('Nested beforeEach - adding extra user');
      databaseSim.addUser('NestedUser');
    });

    test('nested test with combined beforeEach hooks', () => {
      console.log('Nested test running');
      // Both outer and inner beforeEach run
      expect(databaseSim.getUserCount()).toBe(2); // Admin + NestedUser
    });
  });
});
