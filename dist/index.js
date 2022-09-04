"use strict";
/**
 * @module @theroyalwhee0/istype
 * @file An opinionated type-of library for Javascript and TypeScript.
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2019-2022 Adam Mill
 * @license Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOf = exports.isBigInt = exports.isSymbol = exports.isFunction = exports.isInteger = exports.isNumber = exports.isString = exports.isObject = exports.isBoolean = exports.isArray = void 0;
/**
 * Is an Array?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Is a Boolean?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isBoolean(value) {
    return value === true || value === false;
}
exports.isBoolean = isBoolean;
/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isObject(value) {
    return !!value && typeof value === 'object' && !isArray(value);
}
exports.isObject = isObject;
/**
 * Is String?
 * @param value The value to check.
 * @returns {boolean} The results.
 */
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}
exports.isNumber = isNumber;
/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isInteger(value) {
    return Number.isSafeInteger(value) && !Object.is(value, -0);
}
exports.isInteger = isInteger;
/**
 * Is Function?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
/**
 * Is Symbol?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
/**
 * Is a BigInt?
 * @param {unknown} value The value to check.
 * @returns {boolean} The results.
 */
function isBigInt(value) {
    return typeof value === 'bigint';
}
exports.isBigInt = isBigInt;
/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {unknown} value The value to get the type of.
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
    else if (isBoolean(value)) {
        return 'boolean';
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
    else if (isBigInt(value)) {
        return 'bigint';
    }
    else if (value === Number.POSITIVE_INFINITY) {
        return 'infinity';
    }
    else if (value === Number.NEGATIVE_INFINITY) {
        return 'negative-infinity';
    }
    else if (Object.is(value, -0)) {
        return 'negative-zero';
    }
    /* istanbul ignore next */
    return 'other';
}
exports.getTypeOf = getTypeOf;
//# sourceMappingURL=index.js.map