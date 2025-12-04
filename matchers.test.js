// matchers.test.js - A code-along file for Jest matchers

// --- 1. COMMON MATCHERS ---
test('Common Matchers: .toBe and .toEqual', () => {
  // .toBe uses strict equality (Object.is). Good for primitives.
  expect(2 + 2).toBe(4);

  // .toEqual checks the value of objects/arrays recursively.
  const obj = { one: 1 };
  obj['two'] = 2;
  expect(obj).toEqual({ one: 1, two: 2 }); // Passes
  // expect(obj).toBe({ one: 1, two: 2 }); // This would FAIL

  // Use .not to test the opposite
  expect(2 + 2).not.toBe(5);
});

// --- 2. TRUTHINESS ---
test('Truthiness Matchers', () => {
  const n = null;
  const z = 0;
  const u = undefined;

  // Specific checks
  expect(n).toBeNull();
  expect(n).toBeDefined(); // null is defined
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();

  // Zero is falsy but defined
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).toBeFalsy();
  expect(u).toBeUndefined();
});

// --- 3. NUMBERS ---
test('Number Matchers', () => {
  const value = 2 + 2; // 4

  // Comparisons
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // .toBe and .toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  // For floating point arithmetic, NEVER use .toBe
  const floatValue = 0.1 + 0.2; // 0.30000000000000004
  // expect(floatValue).toBe(0.3); // This will FAIL due to rounding
  expect(floatValue).toBeCloseTo(0.3); // This PASSES (default: 2 decimal digits)
  expect(floatValue).toBeCloseTo(0.3, 5); // More precise check
});

// --- 4. STRINGS ---
test('String Matchers with .toMatch', () => {
  const teamString = 'team';
  const nameString = 'Christoph';

  expect(teamString).not.toMatch(/I/);
  expect(nameString).toMatch(/stop/);
  // .toMatch also works with plain substrings
  expect(nameString).toMatch('stop');
});

// --- 5. ARRAYS & ITERABLES ---
test('Array Matchers with .toContain', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  expect(shoppingList).toContain('milk');
  // Also works with Sets and other iterables
  expect(new Set(shoppingList)).toContain('milk');
});

// --- 6. EXCEPTIONS / ERRORS ---
// Helper function that throws
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('Testing that a function throws', () => {
  // The function must be wrapped in an arrow function for .toThrow to work
  expect(() => compileAndroidCode()).toThrow();
  // Check for a specific Error type
  expect(() => compileAndroidCode()).toThrow(Error);
  // Check error message contains a string
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  // Check error message with a regex
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
