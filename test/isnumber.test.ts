import { isNumber } from '../src/index.js';

test('isNumber should be a function', () => {
  expect(isNumber).toBeInstanceOf(Function);
  expect(isNumber.length).toBe(1);
});

test('should type-guard as number', () => {
  const value:unknown = 5;
  if(isNumber(value)) {
    expect(value + 5).toBe(10);
  } else {
    // expect(value + 5).toBe(10);  // This shouldn't compile.
    fail('Should have been a number.');
  }
});

test.each([
  // Simple Numbers.
  0, 1, 9999,
  // Negative Numbers.
  -1, -9999,
  // Floating Point Numbers.
  1.5, 2.2222, 1/3, -9999.9, Math.PI, Math.E,
  // Large Numbers.
  Number.MIN_VALUE, Number.MAX_VALUE,
  Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER,
])('isNumber should identify %p as a number', (item) => {
  expect(isNumber(item)).toBe(true);
});

test.each([
  // Various primatives.
  null, undefined, true, false,
  // Oddities.
  -0, NaN,
  // Infinity.
  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
  // Strings.
  "1", "",
  // Objects
  new Date(), {},
  // BigInts.
  1n, -1n, 9007199254740992n, 18446744073709552000n,
  // Number object.
  Number,
  // Number instance.
  new Number(10),
])('isNumber should not identify %p as a number', (item) => {
  expect(isNumber(item)).toBe(false);
});
