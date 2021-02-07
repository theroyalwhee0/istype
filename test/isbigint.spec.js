/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { isInteger } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('isInteger', () => {
    it('should be a function', () => {
      expect(isInteger).to.be.a('function');
      expect(isInteger.length).to.equal(1);
    });
    describe('should identify', () => {
      it('integers as integers', () => {
        const value = 5;
        const results = isInteger(value);
        expect(results).to.equal(true);
      });
      it('max safe number as an integer', () => {
        const value = 2**53-1;
        const results = isInteger(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('constructed numbers as integers', () => {
        const value = new Number(4);
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('null as an integer', () => {
        const value = null;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('a numeric string as an integer', () => {
        const value = '1';
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('negative zero as an integer', () => {
        const value = -0;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('NaN as an integer', () => {
        const value = NaN;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('infinity as an integer', () => {
        const value = Number.POSITIVE_INFINITY;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('a float as an integer', () => {
        const value = 3.14;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
      it('unsafe numbers as integers', () => {
        const value = 2**59;
        const results = isInteger(value);
        expect(results).to.equal(false);
      });
    });
  });
});
