"use strict";
/**
 * @theroyalwhee0/istype:src/index.ts
 * @file istype: An opinionated type identifier library for Javascript.
 * @version 1.0.0
 * @author Adam Mill
 * @copyright Copyright 2019-2020 Adam Mill
 * @license Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOf = exports.canHaveMembers = exports.isSymbol = exports.isFunction = exports.isInteger = exports.isNumber = exports.isString = exports.isObject = exports.isArray = void 0;
/**
 * Is an Array?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isObject(value) {
    return !!value && typeof value === 'object' && !isArray(value);
}
exports.isObject = isObject;
/**
 * Is String?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}
exports.isNumber = isNumber;
/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isInteger(value) {
    return Number.isSafeInteger(value) && !Object.is(value, -0);
}
exports.isInteger = isInteger;
/**
 * Is Function?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
/**
 * Is Symbol?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
function canHaveMembers(value) {
    return isObject(value) || isArray(value) || isFunction(value);
}
exports.canHaveMembers = canHaveMembers;
/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {any} value The value to get the type of.
 * @returns {string} The name of the type.
 */
function getTypeOf(value) {
    if (value === null) {
        return 'null';
    }
    else if (value === undefined) {
        return 'undefined';
    }
    else if (Number.isNaN(value)) {
        return 'nan';
    }
    else if (isObject(value)) {
        return 'object';
    }
    else if (isArray(value)) {
        return 'array';
    }
    else if (isNumber(value)) {
        return 'number';
    }
    else if (isString(value)) {
        return 'string';
    }
    else if (isFunction(value)) {
        return 'function';
    }
    else if (isSymbol(value)) {
        return 'symbol';
    }
    else {
        return 'other';
    }
}
exports.getTypeOf = getTypeOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRzs7O0FBRUg7Ozs7R0FJRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxLQUFTO0lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsMEJBRUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxLQUFTO0lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDaEUsQ0FBQztBQUZELDRCQUVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxLQUFTO0lBQ2hDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0FBQ25DLENBQUM7QUFGRCw0QkFFQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQVM7SUFDaEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRkQsNEJBRUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxLQUFTO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUZELDhCQUVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxLQUFTO0lBQ2xDLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7QUFGRCxnQ0FFQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixRQUFRLENBQUMsS0FBUztJQUNoQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUNuQyxDQUFDO0FBRkQsNEJBRUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxLQUFTO0lBQ3RDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUZELHdDQUVDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixTQUFTLENBQUMsS0FBUztJQUNqQyxJQUFHLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxNQUFNLENBQUM7S0FDZjtTQUFNLElBQUcsS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUM3QixPQUFPLFdBQVcsQ0FBQztLQUNwQjtTQUFNLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU0sSUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUM7S0FDakI7U0FBTSxJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLE9BQU8sQ0FBQztLQUNoQjtTQUFNLElBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFDO0tBQ2pCO1NBQU0sSUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUM7S0FDakI7U0FBTSxJQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLFVBQVUsQ0FBQztLQUNuQjtTQUFNLElBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFDO0tBQ2pCO1NBQU07UUFDTCxPQUFPLE9BQU8sQ0FBQztLQUNoQjtBQUNILENBQUM7QUF0QkQsOEJBc0JDIn0=