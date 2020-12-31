/**
 * Utility functions for employee related operations.
 */

import { removeUndefinedProperties } from "./objects";

/**
 * Extract only the existing relvant employee properties from an object.
 * @param param0 An object to extract employee properties from.
 */
const extractEmployeeData = ({ fullName, email, age, phone }) => {
    const employee = { fullName, email, age, phone };
    removeUndefinedProperties(employee);
    console.log(employee);
    if (age) employee.age = parseInt(age);
    return employee;
}

export {
    extractEmployeeData,
}