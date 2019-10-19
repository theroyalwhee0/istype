/**
 * @theroyalwhee0/istype:test/index.spec.js
 */

/**
 * Imports.
 */
const chai = require('chai');
const { getTypeOf } = require('../src');
const { expect } = chai;

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
      it('undefined', () => {
        const value = undefined;
        const results = getTypeOf(value);
        expect(results).to.equal('undefined');
      });
      it('null', () => {
        const value = null;
        const results = getTypeOf(value);
        expect(results).to.equal('null');
      });
      it('numbers', () => {
        const value = 1234;
        const results = getTypeOf(value);
        expect(results).to.equal('number');
      });
      it('strings', () => {
        const value = 'abcd';
        const results = getTypeOf(value);
        expect(results).to.equal('string');
      });
      it('objects', () => {
        const value = { };
        const results = getTypeOf(value);
        expect(results).to.equal('object');
      });
      it('arrays', () => {
        const value = [];
        const results = getTypeOf(value);
        expect(results).to.equal('array');
      });
      it('functions', () => {
        const value = () => { };
        const results = getTypeOf(value);
        expect(results).to.equal('function');
      });
      it('NaN', () => {
        const value = (+'this-is-not-a-number');
        const results = getTypeOf(value);
        expect(results).to.equal('nan');
      });
    });
  });
});
