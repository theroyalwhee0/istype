/**
 * Imports.
 */
const { expect, describe, it } = require('./testing');
const { canHaveMembers } = require('../src/index');

/**
 * Test.
 */
describe('istype', () => {
  describe('canHaveMembers', () => {
    it('should be a function', () => {
      expect(canHaveMembers).to.be.a('function');
      expect(canHaveMembers.length).to.equal(1);
    });
    describe('should identify', () => {
      it('objects as allowing members', () => {
        const value = { };
        const results = canHaveMembers(value);
        expect(results).to.equal(true);
      });
      it('functions as allowing members', () => {
        const value = () => {};
        const results = canHaveMembers(value);
        expect(results).to.equal(true);
      });
      it('arrays as allowing members', () => {
        const value = [0];
        const results = canHaveMembers(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as allowing members', () => {
        const value = null;
        const results = canHaveMembers(value);
        expect(results).to.equal(false);
      });
      it('strings as allowing members', () => {
        const value = 'Tree';
        const results = canHaveMembers(value);
        expect(results).to.equal(false);
      });
      it('numbers as allowing members', () => {
        const value = 8;
        const results = canHaveMembers(value);
        expect(results).to.equal(false);
      });
    });
  });
});
