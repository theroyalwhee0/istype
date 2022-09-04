import { isBoolean } from '../src/index.js';

test('isBoolean should be a function', () => {
  expect(isBoolean).toBeInstanceOf(Function);
  expect(isBoolean.length).toBe(1);
});

test('should type-guard as a boolean', () => {
  const value:unknown = true;
  if(isBoolean(value)) {
    const check:boolean = value;
    expect(check).toBe(true);
  } else {
    // const _check:boolean = value;  // This shouldn't compile.
    fail('Should have been a boolean.');
  }
});

test.each([
  // Booleans.
  true, false,
])('isBoolean should identify %p as a boolean', (item) => {
  expect(isBoolean(item)).toBe(true);
});

test.each([
  // Various primatives.
  null, undefined,
  // Numbers.
  0, 1, 9999,
  Number.MAX_VALUE, Number.MAX_SAFE_INTEGER,
  // Oddities.
  -0, NaN,
  // Infinity.
  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
  // Strings.
  "1", "0", "", "true", "false",
  // Objects
  new Date(), {},
  // Boolean object.
  Boolean,
  // Boolean instance.
  new Boolean(true), new Boolean(false),
])('isBoolean should not identify %p as a boolean', (item) => {
  expect(isBoolean(item)).toBe(false);
});
