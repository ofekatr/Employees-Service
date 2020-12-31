/**
 * Validation functions for objects related operations.
 */

/**
 * Remove all properties with undefined value from object.
 * @param obj Object to remove undefined properties from.
 */
const removeUndefinedProperties = (obj) => {
    Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : {});
}

export {
    removeUndefinedProperties,
}