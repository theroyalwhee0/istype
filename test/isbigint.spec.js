/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { isBigInt } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('isBigInt', () => {
    it('should be a function', () => {
      expect(isBigInt).to.be.a('function');
      expect(isBigInt.length).to.equal(1);
    });
    describe('should identify', () => {
      it('bigints as bigint', () => {
        const value = 5n;
        const results = isBigInt(value);
        expect(results).to.equal(true);
      });
      it('cast bigint as a bigint', () => {
        const value = BigInt(2**53-1);
        const results = isBigInt(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('numbers as bigint', () => {
        const value = 4;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('null as an integer', () => {
        const value = null;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('a numeric string as an integer', () => {
        const value = '1';
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('negative zero as an integer', () => {
        const value = -0;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('NaN as an integer', () => {
        const value = NaN;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('infinity as an integer', () => {
        const value = Number.POSITIVE_INFINITY;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('a float as an integer', () => {
        const value = 3.14;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
      it('unsafe numbers as integers', () => {
        const value = 2**59;
        const results = isBigInt(value);
        expect(results).to.equal(false);
      });
    });
  });
});
