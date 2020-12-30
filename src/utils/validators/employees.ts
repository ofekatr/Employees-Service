function validateEmail(email: string, errors: string[]) {
    if (typeof email === "string" && email.length > 0) {
        return true;
    }
    errors.push("Invalid email address.");
    return false;
}

function validatePhone(phone: string, errors: string[]) {
    if (typeof phone === "string" && phone.length > 0) {
        return true;
    }
    errors.push("Invalid phone number.");
    return false;
}

function validateAge(age, errors: string[]) {
    if (typeof age === "number" && age > 0 && age < 120) {
        return true;
    }
    errors.push("Invalid age.");
    return false;
}

function validateFullName(fullName: string, errors: string[]) {
    if (typeof fullName === "string" && fullName.length > 0) {
        return true;
    }
    errors.push("Invalid full name.");
    return false;
}

const validateCreateEmployeeData = (i_Employee) => {
    const errors: string[] = [];
    const { fullName, age, email, phone } = i_Employee;

    validateFullName(fullName, errors);
    validateAge(age, errors);
    validateEmail(email, errors);
    validatePhone(phone, errors);

    return errors;
}

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
