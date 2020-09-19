/**
 * Imports.
 */
import chai from 'chai';
import {it as mochaIt, describe as mochaDescribe} from 'mocha';

/**
 * Export mocha parts so that autocomplete isn't confused.
 */
export const it = mochaIt;
export const describe = mochaDescribe;

/**
 * Export expect from Chai.
 */
export const {expect} = chai;
