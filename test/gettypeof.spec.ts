/**
 * Imports.
 */
import {expect, describe, it} from './testing';
import { getTypeOf } from '../src/index';

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
        const value = [ 'Wind' ];
        const results = getTypeOf(value);
        expect(results).to.equal('array');
      });
      it('numbers', () => {
        const value = 1010;
        const results = getTypeOf(value);
        expect(results).to.equal('number');
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
      });
      it('NaN', () => {
        const value = NaN;
        const results = getTypeOf(value);
        expect(results).to.equal('nan');
      });
      it('Symbol', () => {
        const value = Symbol('Moss');
        const results = getTypeOf(value);
        expect(results).to.equal('symbol');
      });
      // NOTE: The fallback 'other' is not tested.
    });
  });
});
