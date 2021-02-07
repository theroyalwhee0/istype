/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { isArray } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('isArray', () => {
    it('should be a function', () => {
      expect(isArray).to.be.a('function');
      expect(isArray.length).to.equal(1);
    });
    describe('should identify', () => {
      it('arrays as arrays', () => {
        const value = [0];
        const results = isArray(value);
        expect(results).to.equal(true);
      });
      it('constructed arrays as arrays', () => {
        const value = new Array();
        const results = isArray(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as an object', () => {
        const value = null;
        const results = isArray(value);
        expect(results).to.equal(false);
      });
      it('an array like objet as an array', () => {
        const value = {
          0: 'Hello',
          length: 1,
        };
        const results = isArray(value);
        expect(results).to.equal(false);
      });
    });
  });
});

