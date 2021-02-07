/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { isNumber } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('isNumber', () => {
    it('should be a function', () => {
      expect(isNumber).to.be.a('function');
      expect(isNumber.length).to.equal(1);
    });
    describe('should identify', () => {
      it('numbers as numbers', () => {
        const value = 5;
        const results = isNumber(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('constructed numbers as numbers', () => {
        const value = new Number(4);
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('null as an number', () => {
        const value = null;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('a numeric string as an number', () => {
        const value = '1';
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('negative zero as an number', () => {
        const value = -0;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('NaN as an number', () => {
        const value = NaN;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('infinity as an number', () => {
        const value = Number.POSITIVE_INFINITY;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
    });
  });
});
