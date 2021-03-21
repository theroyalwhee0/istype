import { isInteger } from '../src/index.js';

test('isInteger should be a function', () => {
  expect(isInteger).toBeInstanceOf(Function);
  expect(isInteger.length).toBe(1);
});

test('should type-guard as number', () => {
  const value:unknown = 5;
  if(isInteger(value)) {
    expect(value + 5).toBe(10);
  } else {
    // expect(value + 5).toBe(10); // This shouldn't compile.
    fail('Should have been an integer.');
  }
});

test.each([
  // Simple Numbers.
  0, 1, 9999,
  // Negative Numbers.
  -1, -9999,
  // Large Numbers.
  Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER,
])('isInteger should identify %p as an integer', (item) => {
  expect(isInteger(item)).toBe(true);
});

test.each([
  // Various primatives.
  null, undefined, true, false,
  // Oddities.
  -0, NaN,
  // Infinity.
  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
  // Floating Point Numbers.
  1.5, 2.2222, 1/3, -9999.9, Math.PI, Math.E,
  // Strings.
  "1", "",
  // Objects
  new Date(), {},
  // Large numbers.
  Number.MIN_VALUE, Number.MAX_VALUE,
  // BigInts.
  1n, -1n, 9007199254740992n, 18446744073709552000n,
  // Number object.
  Number,
  // Number instance.
  new Number(10),
])('isInteger should not identify %p as an integer', (item) => {
  expect(isInteger(item)).toBe(false);
});
