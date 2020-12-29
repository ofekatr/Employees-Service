function validateEmail(email: string) {
    return typeof email === "string" && email.length > 0;
}

function validatePhone(phone: string) {
    return typeof phone === "string" && phone.length > 0;
}

function validateAge(age: number) {
    return typeof age === "number" && age > 0 && age < 120;
}

function validateFullName(fullName: string) {
    return typeof fullName === "string" && fullName.length > 0;
}

const validateEmployeeData = (i_Employee) => {
    if (!i_Employee) return false;
    const { fullName, age, email, phone } = i_Employee;
    if (!validateFullName(fullName) || !validateAge(age)
        || !validateEmail(email) || !validatePhone(phone)) {
        return false;
    }
    return true;
}

export {
    validateEmployeeData
};
