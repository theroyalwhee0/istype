/**
 * @file istype: An opinionated type-of library for Javascript.
 * @version v2.0.0
 * @author Adam Mill
 * @copyright Copyright 2019-2021 Adam Mill
 * @license Apache-2.0
 */

/**
 * Is an Array?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isObject(value) {
  return !!value && typeof value === 'object' && !isArray(value);
}

/**
 * Is String?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isNumber(value) {
  return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}

/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isInteger(value) {
  return Number.isSafeInteger(value) && !Object.is(value, -0);
}

/**
 * Is a BigInt?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isBigInt(value) {
  return typeof value === 'bigint';
}

/**
 * Is Function?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Is Symbol?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isSymbol(value) {
  return typeof value === 'symbol';
}

/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function canHaveMembers(value) {
  return isObject(value) || isArray(value) || isFunction(value);
}

/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {any} value The value to get the type of.
 * @returns {string} The name of the type.
 */
function getTypeOf(value) {
  if(value === null) {
    return 'null';
  } else if(value === undefined) {
    return 'undefined';
  } else if(Number.isNaN(value)) {
    return 'nan';
  } else if(isObject(value)) {
    return 'object';
  } else if(isArray(value)) {
    return 'array';
  } else if(isInteger(value)) {
    return 'integer';
  } else if(isNumber(value)) {
    return 'number';
  } else if(isString(value)) {
    return 'string';
  } else if(isFunction(value)) {
    return 'function';
  } else if(isSymbol(value)) {
    return 'symbol';
  } else if(isBigInt(value)) {
    return 'bigint';
  } else if(value === Number.POSITIVE_INFINITY) {
    return 'infinity';
  } else if(value === Number.NEGATIVE_INFINITY) {
    return 'negative-infinity';
  } else if(Object.is(value, -0)) {
    return 'negative-zero';
  } else {
    return 'other';
  }
}

/**
 * Exports.
 */
module.exports = {
  isArray,
  isFunction,
  isInteger,
  isNumber,
  isObject,
  isString,
  isSymbol,
  canHaveMembers,
  getTypeOf,
};
