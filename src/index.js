/**
 * @theroyalwhee0/istype:src/index.js
 * @file istype: An opinionated type identifier library for Javascript.
 * @version 0.0.2
 * @author Adam Mill
 * @copyright Copyright 2019-2020 Adam Mill
 * @license Apache-2.0
 */
'use strict';

/**
 * Is Array?
 */
const { isArray } = Array;

/**
 * Is Object?
 * Opinionated, arrays are not objects.
 */
function isObject(value) {
  return !!(
    value &&
        typeof value === 'object' &&
        !isArray(value)
  );
}

/**
 * Is Function?
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Is String?
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Is Number?
 * Opinionated, NaN & Infinity are not numbers.
 */
function isNumber(value) {
  return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}

/**
 * Get the type of a value as a string.
 */
function getTypeOf(value) {
  if(value === null) {
    return 'null';
  } else if(value === undefined) {
    return 'undefined';
  } else if(isObject(value)) {
    return 'object';
  } else if(isArray(value)) {
    return 'array';
  } else if(isNumber(value)) {
    return 'number';
  } else if(isString(value)) {
    return 'string';
  } else if(isFunction(value)) {
    return 'function';
  } else if(isNaN(value)) {
    return 'nan';
  } else {
    return 'other';
  }
}

/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 */
function canHaveMembers(value) {
  return isObject(value) || isArray(value) || isFunction(value);
}

/**
 * Exports.
 */
module.exports = {
  isNumber, isString, isObject, isFunction,
  canHaveMembers, getTypeOf,
  // For completeness.
  isNaN, isArray,
};
