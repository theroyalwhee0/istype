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
export declare function isArray(value: any): boolean;
/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isObject(value: any): boolean;
/**
 * Is String?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isString(value: any): boolean;
/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isNumber(value: any): boolean;
/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isInteger(value: any): boolean;
/**
 * Is Function?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isFunction(value: any): boolean;
/**
 * Is Symbol?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function isSymbol(value: any): boolean;
/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export declare function canHaveMembers(value: any): boolean;
/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {any} value The value to get the type of.
 * @returns {string} The name of the type.
 */
export declare function getTypeOf(value: any): string;
//# sourceMappingURL=index.d.ts.map