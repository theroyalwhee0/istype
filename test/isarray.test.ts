import { isArray } from '../src/index.js';

test('isArray should be a function', () => {
  expect(isArray).toBeInstanceOf(Function);
  expect(isArray.length).toBe(1);
});

test('should type-guard as array', () => {
  const value: unknown = [0, 1, 2,];
  if (isArray(value)) {
    expect(value[1]).toEqual(1);
  } else {
    // expect(value[1]).toEqual(1); // This shouldn't compile.
    fail('Should have been an array.');
  }
});

test.each([
  // Arrays.
  [[],],
  [[1, 2, 3],],
  [["A", "B", "C"],],
])('isArray should identify %p as an array', (item) => {
  expect(isArray(item)).toBe(true);
});

test.each([
  // Various.
  undefined, null, 0, "",
  // Objects.
  {}, new Date(), new Set(), new Map(),
  // Symbol class.
  Symbol,
])('isArray should not identify %p as an array', (item) => {
  expect(isArray(item)).toBe(false);
});
