/**
 * @theroyalwhee0/istype:test/index.spec.js
 */

/**
 * Imports.
 */
const chai = require('chai');
const { isString } = require('../src');
const { expect } = chai;

/**
 * Test.
 */
describe('istype', () => {
  describe('isString', () => {
    it('should be a function', () => {
      expect(isString).to.be.a('function');
      expect(isString.length).to.equal(1);
    });
    describe('should accept', () => {
      it('blank string as a string', () => {
        const value = '';
        const results = isString(value);
        expect(results).to.equal(true);
      });
      it('strings as strings', () => {
        const value = 'abcd';
        const results = isString(value);
        expect(results).to.equal(true);
      });
    });
    describe('should reject', () => {
      it('undefined as a string', () => {
        const value = undefined;
        const results = isString(value);
        expect(results).to.equal(false);
      });
      it('string instance as a string', () => {
        const value = new String('balloon');
        const results = isString(value);
        expect(results).to.equal(false);
      });
    });
  });
});
