import { isObject } from '../src/index.js';

test('isObject should be a function', () => {
  expect(isObject).toBeInstanceOf(Function);
  expect(isObject.length).toBe(1);
});

test('should type-guard as Record', () => {
  const value:unknown = { a: 876 };
  if(isObject(value)) {
    expect(value.a).toBe(876);
  } else {
    // expect(value.a).toBe(876); // This shouldn't compile.
    fail('Should have been a string.');
  }
});

test.each([
  // Objects.
  {},
  { a:1, b:2, c:3 },
  new Date(),
  new (class MyClass{}),
])('isObject should identify %p as an object', (item) => {
  expect(isObject(item)).toBe(true);
});

test.each([
  // Various.
  undefined, null, 0, "",
  // Technically Objects.
  [],
  // Symbols.
  Symbol('No'),
])('isObject should not identify %p as an object', (item) => {
  expect(isObject(item)).toBe(false);
});
