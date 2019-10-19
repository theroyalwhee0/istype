/**
 * @theroyalwhee0/istype:test/index.spec.js
 */

/**
 * Imports.
 */
const chai = require('chai');
const { isNumber } = require('../src');
const { expect } = chai;

/**
 * Test.
 */
describe('istype', () => {
  describe('isNumber', () => {
    it('should be a function', () => {
      expect(isNumber).to.be.a('function');
      expect(isNumber.length).to.equal(1);
    });
    describe('should accept', () => {
      it('zero as a number', () => {
        const value = 0;
        const results = isNumber(value);
        expect(results).to.equal(true);
      });
      it('integers as numbers', () => {
        const value = 1234;
        const results = isNumber(value);
        expect(results).to.equal(true);
      });
      it('floating point as numbers', () => {
        const value = 3.14;
        const results = isNumber(value);
        expect(results).to.equal(true);
      });
    });
    describe('should reject', () => {
      it('-0 as a number', () => {
        const value = (-0);
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('NaN as a number', () => {
        const value = (+'this-is-not-a-number');
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('Negative Infinity as a number', () => {
        const value = Number.NEGATIVE_INFINITY;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('Positivy Infinity as a number', () => {
        const value = Number.POSITIVE_INFINITY;
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
      it('number instance as a number', () => {
        const value = new Number(5432);
        const results = isNumber(value);
        expect(results).to.equal(false);
      });
    });
  });
});
