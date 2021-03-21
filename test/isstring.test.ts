import { isString } from '../src/index.js';

test('isString should be a function', () => {
  expect(isString).toBeInstanceOf(Function);
  expect(isString.length).toBe(1);
});

test('should type-guard as number', () => {
  const value:unknown = "1";
  if(isString(value)) {
    expect(value+0).toBe("10");
  } else {
    // expect(value+0).toBe("10"); // This shouldn't compile.
    fail('Should have been a string.');
  }
});

test.each([
  // String.
  '', 'I', 'Bird Bath',
])('isString should identify %p as a string', (item) => {
  expect(isString(item)).toBe(true);
});


test.each([
  // Various Primatives.
  null, undefined, 0,
  // Objects.
  {}, new Date(),
  // String object.
  String,
  // String instance.
  new String('Brown Thrasher'),
])('isString should not identify %p as a string', (item) => {
  expect(isString(item)).toBe(false);
});
