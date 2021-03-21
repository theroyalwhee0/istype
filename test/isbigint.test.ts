import { isBigInt } from '../src/index.js';

test('isBigInt should be a function', () => {
  expect(isBigInt).toBeInstanceOf(Function);
  expect(isBigInt.length).toBe(1);
});

test('should type-guard as a bigint', () => {
  const value:unknown = 5n;
  if(isBigInt(value)) {
    expect(value+5n).toBe(10n);
  } else {
    // expect(value+5n).toBe(10n); // This shouldn't compile.
    fail('Should have been a bigint.');
  }
});

test.each([
  // Simple BigInts.
  0n, 1n, 9999n
  // Negative Numbers.
  -1n, -9999n,
  // Large BigInts.
  2n**53n, 2n**64n, 2n**100n,
])('isBigInt should identify %p as a bigint', (item) => {
  expect(isBigInt(item)).toBe(true);
});

test.each([
  // Various primatives.
  null, undefined, true, false,
  // Numbers.
  0, 1, 9999,
  Number.MAX_VALUE, Number.MAX_SAFE_INTEGER,
  // Oddities.
  -0, NaN,
  // Infinity.
  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
  // Strings.
  "1", "",
  // Objects
  new Date(), {},
  // Number object.
  Number,
  // Number instance.
  new Number(10),
])('isBigInt should not identify %p as a bigint', (item) => {
  expect(isBigInt(item)).toBe(false);
});
