/**
 * Imports.
 */
import {expect, describe, it} from './testing';
import { isObject } from '../src/index';

/**
 * Test.
 */
describe('istype', () => {
  describe('isObject', () => {
    it('should be a function', () => {
      expect(isObject).to.be.a('function');
      expect(isObject.length).to.equal(1);
    });
    describe('should identify', () => {
      it('objects as objects', () => {
        const value = { };
        const results = isObject(value);
        expect(results).to.equal(true);
      });
      it('constructed objects as objects', () => {
        const value = new Object();
        const results = isObject(value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as an object', () => {
        const value = null;
        const results = isObject(value);
        expect(results).to.equal(false);
      });
      it('an array as an object', () => {
        const value = [ 0 ];
        const results = isObject(value);
        expect(results).to.equal(false);
      });
    });
  });
});
