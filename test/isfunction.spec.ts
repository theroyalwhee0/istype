/**
 * Imports.
 */
import {expect, describe, it} from './testing';
import { isFunction } from '../src/index';

/**
 * Test.
 */
describe('istype', () => {
  describe('isFunction', () => {
    it('should be a function', () => {
      expect(isFunction).to.be.a('function');
      expect(isFunction.length).to.equal(1);
    });
    describe('should identify', () => {
      it('functions as functions', () => {
        function value() {
        }
        const results = isFunction(value);
        expect(results).to.equal(true);
      });
      it('arrow functions as functions', () => {
        const value = () => {};
        const results = isFunction(value);
        expect(results).to.equal(true);
      });
      it('async functions as functions', () => {
        const value = async () => {};
        const results = isFunction(value);
        expect(results).to.equal(true);
      });
      it('constructed functions as functions', () => {
        const value = new Function();
        const results = isFunction(value);
        expect(results).to.equal(true);
      });
      it('classes as functions', () => {
        class Value {
        }
        const results = isFunction(Value);
        expect(results).to.equal(true);
      });
    });
    describe('should not identify', () => {
      it('null as a function', () => {
        const value = null;
        const results = isFunction(value);
        expect(results).to.equal(false);
      });
    });
  });
});
