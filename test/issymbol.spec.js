/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { isSymbol } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('isSymbol', () => {
    it('should be a function', () => {
      expect(isSymbol).to.be.a('function');
      expect(isSymbol.length).to.equal(1);
    });
    describe('should identify', () => {
      it('symbols as symbols', () => {
        const value = Symbol('Flower');
        const results = isSymbol(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as a symbol', () => {
        const value = null;
        const results = isSymbol(value);
        expect(results).to.equal(false);
      });
      it('an object as a symbol', () => {
        const value = {};
        const results = isSymbol(value);
        expect(results).to.equal(false);
      });
    });
  });
});
