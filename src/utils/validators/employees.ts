import { IEmployeeData } from "models/employees";

function extractEmployeeFields(i_Employee: IEmployeeData) {
    const employee = {
        fullName: i_Employee.fullName,
        age: i_Employee.age,
        email: i_Employee.email,
        phone: i_Employee.phone
    }

    return Array.from(Object.keys(employee)).every((key) => employee[key] !== undefined)
        ? employee : undefined;
}

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
    i_Employee = extractEmployeeFields(i_Employee);
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
}