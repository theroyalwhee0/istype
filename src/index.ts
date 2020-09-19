/**
 * @theroyalwhee0/istype:src/index.ts
 * @file istype: An opinionated type identifier library for Javascript.
 * @version 1.0.0
 * @author Adam Mill
 * @copyright Copyright 2019-2020 Adam Mill
 * @license Apache-2.0
 */

/**
 * Is an Array?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isArray(value:any):boolean {
  return Array.isArray(value);
}

/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isObject(value:any):boolean {
  return !!value && typeof value === 'object' && !isArray(value)
}

/**
 * Is String?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isString(value:any):boolean {
  return typeof value === 'string';
}

/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isNumber(value:any):boolean {
  return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}

/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isInteger(value:any):boolean {
  return Number.isSafeInteger(value) && !Object.is(value, -0);
}

/**
 * Is Function?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isFunction(value:any):boolean {
  return typeof value === 'function';
}

/**
 * Is Symbol?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isSymbol(value:any):boolean {
  return typeof value === 'symbol';
}

/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function canHaveMembers(value:any):boolean {
  return isObject(value) || isArray(value) || isFunction(value);
}

/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {any} value The value to get the type of.
 * @returns {string} The name of the type.
 */
export function getTypeOf(value:any):string {
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
  } else if(isNumber(value)) {
    return 'number';
  } else if(isString(value)) {
    return 'string';
  } else if(isFunction(value)) {
    return 'function';
  } else if(isSymbol(value)) {
    return 'symbol';
  } else {
    return 'other';
  }
}
