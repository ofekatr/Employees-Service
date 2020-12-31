"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateEmployeeData = exports.validateCreateEmployeeData = void 0;
function validateEmail(i_Email, i_Errors) {
    if (typeof i_Email === "string" && i_Email.length > 0) {
        return true;
    }
    i_Errors.push("Invalid email address.");
    return false;
}
function validatePhone(i_Phone, i_Errors) {
    if (typeof i_Phone === "string" && i_Phone.length > 0) {
        return true;
    }
    i_Errors.push("Invalid phone number.");
    return false;
}
function validateAge(i_Age, i_Errors) {
    if (typeof i_Age === "number" && i_Age > 0 && i_Age < 120) {
        return true;
    }
    i_Errors.push("Invalid age.");
    return false;
}
function validateFullName(i_FullName, i_Errors) {
    if (typeof i_FullName === "string" && i_FullName.length > 0) {
        return true;
    }
    i_Errors.push("Invalid full name.");
    return false;
}
const validateCreateEmployeeData = (i_Employee) => {
    const errors = [];
    const { fullName, age, email, phone } = i_Employee;
    validateFullName(fullName, errors);
    validateAge(age, errors);
    validateEmail(email, errors);
    validatePhone(phone, errors);
    return errors;
};
exports.validateCreateEmployeeData = validateCreateEmployeeData;
const validateUpdateEmployeeData = (i_Employee) => {
    const { fullName, age, email, phone } = i_Employee;
    const errors = [];
    if (fullName)
        validateFullName(fullName, errors);
    if (age)
        validateAge(age, errors);
    if (email)
        validateEmail(email, errors);
    if (phone)
        validatePhone(phone, errors);
    return errors;
};
exports.validateUpdateEmployeeData = validateUpdateEmployeeData;
//# sourceMappingURL=employees.js.map