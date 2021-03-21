import { isSymbol } from '../src/index.js';

test('isSymbol should be a function', () => {
  expect(isSymbol).toBeInstanceOf(Function);
  expect(isSymbol.length).toBe(1);
});

test('should type-guard as symbol', () => {
  const Ok = Symbol('OK');
  const value:unknown = Ok;
  if(isSymbol(value)) {
    expect(value).toBe(Ok);
  } else {
    // const symbol:symbol = value; expect(symbol).toBe(Ok); // This shouldn't compile.
    fail(`Should have been a symbol.`);
  }
});

test.each([
  // Custom symbols.
  Symbol(),
  Symbol(''),
  Symbol('TEST'),
  // Standard symbols.
  Symbol.iterator,
])('isSymbol should identify %p as a symbol', (item) => {
  expect(isSymbol(item)).toBe(true);
});

test.each([
  // Various.
  undefined, null, 0, "",
  // Objects.
  {}, [], new Date(),
  // Symbol class.
  Symbol,
])('isSymbol should not identify %p as a symbol', (item) => {
  expect(isSymbol(item)).toBe(false);
});
