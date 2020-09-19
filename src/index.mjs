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
export function isArray(value) {
    return Array.isArray(value);
}
/**
 * Is an Object?
 * Opinionated: arrays are not objects.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isObject(value) {
    return !!value && typeof value === 'object' && !isArray(value);
}
/**
 * Is String?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isString(value) {
    return typeof value === 'string';
}
/**
 * Is Number?
 * Opinionated: NaN & Infinity and negative zero are not numbers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isNumber(value) {
    return typeof value === 'number' && isFinite(value) && !Object.is(value, -0);
}
/**
 * Is an Integer?
 * Opinionated: unsafe integers and negative zero are not integers.
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isInteger(value) {
    return Number.isSafeInteger(value) && !Object.is(value, -0);
}
/**
 * Is Function?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Is Symbol?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function isSymbol(value) {
    return typeof value === 'symbol';
}
/**
 * Can the type have members?
 * Can 'in' operator be used on it?
 * @param {any} value The value to check.
 * @returns {boolean} The results.
 */
export function canHaveMembers(value) {
    return isObject(value) || isArray(value) || isFunction(value);
}
/**
 * Get the type of a value as a string.
 * This should not be used for type comparison, only for getting readable strings.
 * @param {any} value The value to get the type of.
 * @returns {string} The name of the type.
 */
export function getTypeOf(value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBUztJQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFTO0lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDaEUsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVM7SUFDaEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDbkMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFTO0lBQ2hDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFTO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQVM7SUFDbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7QUFDckMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVM7SUFDaEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDbkMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFTO0lBQ3RDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFTO0lBQ2pDLElBQUcsS0FBSyxLQUFLLElBQUksRUFBRTtRQUNqQixPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU0sSUFBRyxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQzdCLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO1NBQU0sSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTSxJQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtTQUFNLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO1NBQU0sSUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUM7S0FDakI7U0FBTSxJQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtTQUFNLElBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sVUFBVSxDQUFDO0tBQ25CO1NBQU0sSUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUM7S0FDakI7U0FBTTtRQUNMLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyJ9