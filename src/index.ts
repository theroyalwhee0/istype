/**
 * @module @theroyalwhee0/istype
 * @file An opinionated type-of library for Javascript and TypeScript.
 * @version v3.0.0
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2019-2021 Adam Mill
 * @license Apache-2.0
 */

/**
 * Is an Array?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isArray<T = unknown>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}

/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isObject<T = unknown>(value: unknown): value is Record<string | number, T> {
  return !!value && typeof value === 'object' && !isArray(value)
}

/**
 * Is String?
 * @param value The value to check.
 * @returns {boolean} The results.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}

/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isInteger(value: unknown): value is number {
  return Number.isSafeInteger(value) && !Object.is(value, -0);
}

/**
 * Is Function?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Is Symbol?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Is a BigInt?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {unknown} value The value to get the type of.
 * @returns {string} The name of the type.
 */
export function getTypeOf(value: unknown): string {
  if (value === null) {
    return 'null';
  } else if (value === undefined) {
    return 'undefined';
  } else if (Number.isNaN(value)) {
    return 'nan';
  } else if (isObject(value)) {
    return 'object';
  } else if (isArray(value)) {
    return 'array';
  } else if (isNumber(value)) {
    return 'number';
  } else if (isString(value)) {
    return 'string';
  } else if (isFunction(value)) {
    return 'function';
  } else if (isSymbol(value)) {
    return 'symbol';
  } else if (isBigInt(value)) {
    return 'bigint';
  } else if (value === Number.POSITIVE_INFINITY) {
    return 'infinity';
  } else if (value === Number.NEGATIVE_INFINITY) {
    return 'negative-infinity';
  } else if (Object.is(value, -0)) {
    return 'negative-zero';
  }
  // TODO: Why is this not being ignored?
  /* istanbul ignore next */
  return 'other';
}
