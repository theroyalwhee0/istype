/**
 * Imports.
 */
import {expect, describe, it} from './testing';
import { isString } from '../src/index';

/**
 * Test.
 */
describe('istype', () => {
  describe('isString', () => {
    it('should be a function', () => {
      expect(isString).to.be.a('function');
      expect(isString.length).to.equal(1);
    });
    describe('should identify', () => {
      it('strings as strings', () => {
        const value = 'Bird Bath';
        const results = isString(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as a string', () => {
        const value = null;
        const results = isString(value);
        expect(results).to.equal(false);
      });
      it('constructed strings as strings', () => {
        const value = new String('Brown Thrasher');
        const results = isString(value);
        expect(results).to.equal(false);
      });
      it('an stringable object as a string', () => {
        const value = { toString() { return 'Seed' } };
        expect(''+value).to.equal('Seed');
        const results = isString(value);
        expect(results).to.equal(false);
      });
    });
  });
});
