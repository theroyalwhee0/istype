import { getTypeOf } from '../src/index.js';

test('getTypeOf should be a function', () => {
  expect(getTypeOf).toBeInstanceOf(Function);
  expect(getTypeOf.length).toBe(1);
});

test('getTypeOf should identify null', () => {
  expect(getTypeOf(null)).toBe("null");
});

test('getTypeOf should identify undefined', () => {
  expect(getTypeOf(undefined)).toBe("undefined");
});

test('getTypeOf should identify NaN', () => {
  expect(getTypeOf(NaN)).toBe("nan");
  expect(getTypeOf(Number("lake"))).toBe("nan");
});

test('getTypeOf should identify objects', () => {
  expect(getTypeOf({})).toBe("object");
  expect(getTypeOf(new Date())).toBe("object");
});

test('getTypeOf should identify arrays', () => {
  expect(getTypeOf([])).toBe("array");
  expect(getTypeOf([1,2,3,4])).toBe("array");
});

test('getTypeOf should identify numbers', () => {
  expect(getTypeOf(1)).toBe("number");
  expect(getTypeOf(9000)).toBe("number");
});

test('getTypeOf should identify strings', () => {
  expect(getTypeOf("")).toBe("string");
  expect(getTypeOf("leaves")).toBe("string");
});

test('getTypeOf should identify functions', () => {
  expect(getTypeOf(()=>true)).toBe("function");
  expect(getTypeOf(function(){ return true; })).toBe("function");
});

test('getTypeOf should identify symbols', () => {
  expect(getTypeOf(Symbol())).toBe("symbol");
  expect(getTypeOf(Symbol("OK"))).toBe("symbol");
});

test('getTypeOf should identify bigints', () => {
  expect(getTypeOf(1n)).toBe("bigint");
  expect(getTypeOf(2n**64n)).toBe("bigint");
});

test('getTypeOf should identify -0', () => {
  expect(getTypeOf(-0)).toBe("negative-zero");
});

test('getTypeOf should identify infinities', () => {
  expect(getTypeOf(Number.POSITIVE_INFINITY)).toBe("infinity");
  expect(getTypeOf(Number.NEGATIVE_INFINITY)).toBe("negative-infinity");
});
