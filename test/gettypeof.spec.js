/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { getTypeOf } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('getTypeOf', () => {
    it('should be a function', () => {
      expect(getTypeOf).to.be.a('function');
      expect(getTypeOf.length).to.equal(1);
    });
    describe('should identify', () => {
      it('null', () => {
        const value = null;
        const results = getTypeOf(value);
        expect(results).to.equal('null');
      });
      it('undefined', () => {
        const value = undefined;
        const results = getTypeOf(value);
        expect(results).to.equal('undefined');
      });
      it('objects', () => {
        const value = { };
        const results = getTypeOf(value);
        expect(results).to.equal('object');
      });
      it('arrays', () => {
        const value = ['Wind'];
        const results = getTypeOf(value);
        expect(results).to.equal('array');
      });
      it('integers', () => {
        const value = 1010;
        const results = getTypeOf(value);
        expect(results).to.equal('integer');
      });
      it('numbers', () => {
        const value = 1010.5;
        const results = getTypeOf(value);
        expect(results).to.equal('number');
        const value2 = Math.PI;
        const results2 = getTypeOf(value);
        expect(results2).to.equal('number');
      });
      it('strings', () => {
        const value = 'Hello';
        const results = getTypeOf(value);
        expect(results).to.equal('string');
      });
      it('functions', () => {
        const value = () => { };
        const results = getTypeOf(value);
        expect(results).to.equal('function');
        const value2 = function*(){};
        const results2 = getTypeOf(value2);
        expect(results2).to.equal('function');
      });
      it('symbols', () => {
        const value = Symbol('Moss');
        const results = getTypeOf(value);
        expect(results).to.equal('symbol');
      });
      it('bigints', () => {
        const value = 100n;
        const results = getTypeOf(value);
        expect(results).to.equal('bigint');
      });
      describe('special numberics', () => {
        it('NaN', () => {
          const value = NaN;
          const results = getTypeOf(value);
          expect(results).to.equal('nan');
        });
        it('infinity', () => {
          const value = Number.POSITIVE_INFINITY;
          const results = getTypeOf(value);
          expect(results).to.equal('infinity');
        });
        it('negative infinity', () => {
          const value = Number.NEGATIVE_INFINITY;
          const results = getTypeOf(value);
          expect(results).to.equal('negative-infinity');
        });
        it('negative zero', () => {
          const value = -0;
          const results = getTypeOf(value);
          expect(results).to.equal('negative-zero');
        });
      });
    });
    // NOTE: The fallback 'other' is not tested.
  });
});
