import { isFunction } from '../src/index.js';

test('isFunction should be a function', () => {
  expect(isFunction).toBeInstanceOf(Function);
  expect(isFunction.length).toBe(1);
});

test('should type-guard as function', () => {
  const value: unknown = () => 5;
  if (isFunction(value)) {
    expect(value()).toBe(5);
  } else {
    // expect(value()).toBe(5); // This shouldn't compile.
    fail('Should have been a function.');
  }
});

test.each([
  // Functions.
  function myFunction() { return 1; },
  class MyClass { },
  () => { return 2; },
  // Standard constructors.
  Function,
  // Standard functions.
  Math.pow, Object.toString,
])('isFunction should identify %p as a Symbol', (item) => {
  expect(isFunction(item)).toBe(true);
});

test.each([
  // Various.
  undefined, null, 0, "",
  // Objects.
  {}, [], new Date(),
])('isFunction should not identify %p as a function', (item) => {
  expect(isFunction(item)).toBe(false);
});
