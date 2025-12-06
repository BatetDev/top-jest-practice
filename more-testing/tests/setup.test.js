test('setup works', () => {
  expect(true).toBe(true);
});

/*

Execution order with nested describe blocks:

beforeAll() → beforeEach() → test() → afterEach() → afterAll()

With nested describes:

beforeAll (outer)
  beforeEach (outer)
    beforeEach (inner)
    test (inner)
    afterEach (inner)
  afterEach (outer)
afterAll (outer)

*/
