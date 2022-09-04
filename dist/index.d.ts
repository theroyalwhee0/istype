/**
 * @module @theroyalwhee0/istype
 * @file An opinionated type-of library for Javascript and TypeScript.
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2019-2022 Adam Mill
 * @license Apache-2.0
 */
/**
 * Is an Array?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isArray<T = unknown>(value: unknown): value is Array<T>;
/**
 * Is a Boolean?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isBoolean(value: unknown): value is boolean;
/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isObject<T = unknown>(value: unknown): value is Record<string | number, T>;
/**
 * Is String?
 * @param value The value to check.
 * @returns {boolean} The results.
 */
export declare function isString(value: unknown): value is string;
/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isNumber(value: unknown): value is number;
/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isInteger(value: unknown): value is number;
/**
 * Is Function?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isFunction(value: unknown): value is Function;
/**
 * Is Symbol?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isSymbol(value: unknown): value is symbol;
/**
 * Is a BigInt?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isBigInt(value: unknown): value is bigint;
/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {unknown} value The value to get the type of.
 * @returns {string} The name of the type.
 */
export declare function getTypeOf(value: unknown): string;
