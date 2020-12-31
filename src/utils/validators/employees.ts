/**
 * Validation functions for employee related operations.
 */


/**
 * Validate employees email addresses.
 * @param i_Email Email to be validated.
 * @param i_Errors Errors object for validating employee data.
 */
function validateEmail(i_Email: string, i_Errors: string[]) {
    if (typeof i_Email === "string" && i_Email.length > 0) {
        return true;
    }
    i_Errors.push("Invalid email address.");
    return false;
}

/**
 * Validate employees phone numbers.
 * @param i_Phone Phone number to be validated.
 * @param i_Errors Errors object for validating employee data.
 */
function validatePhone(i_Phone: string, i_Errors: string[]) {
    if (typeof i_Phone === "string" && i_Phone.length > 0) {
        return true;
    }
    i_Errors.push("Invalid phone number.");
    return false;
}

/**
 * Validate employees ages.
 * @param i_Age Age to be validated.
 * @param i_Errors Errors object for validating employee data.
 */
function validateAge(i_Age, i_Errors: string[]) {
    if (typeof i_Age === "number" && i_Age > 0 && i_Age < 120) {
        return true;
    }
    i_Errors.push("Invalid age.");
    return false;
}

/**
 * Validate employees full names.
 * @param i_FullName Full name to be validated.
 * @param i_Errors Errors object for validating employee data.
 */
function validateFullName(i_FullName: string, i_Errors: string[]) {
    if (typeof i_FullName === "string" && i_FullName.length > 0) {
        return true;
    }
    i_Errors.push("Invalid full name.");
    return false;
}

/**
 * Validate a new employee data.
 * @param i_Employee Employee data to be validated for a new employee.
 */
const validateCreateEmployeeData = (i_Employee) => {
    const errors: string[] = [];
    const { fullName, age, email, phone } = i_Employee;

    validateFullName(fullName, errors);
    validateAge(age, errors);
    validateEmail(email, errors);
    validatePhone(phone, errors);

    return errors;
}

/**
 * Validate employee data for update.
 * @param i_Employee Employee updated data to be validated.
 */
const validateUpdateEmployeeData = (i_Employee) => {
    const { fullName, age, email, phone } = i_Employee;
    const errors: string[] = [];

    if (fullName) validateFullName(fullName, errors);
    if (age) validateAge(age, errors);
    if (email) validateEmail(email, errors);
    if (phone) validatePhone(phone, errors);

    return errors;
}

export {
    validateCreateEmployeeData,
    validateUpdateEmployeeData,
};
