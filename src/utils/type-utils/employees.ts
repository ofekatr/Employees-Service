import { removeUndefinedProperties } from "./objects";

export const extractEmployeeData = ({ fullName, email, age, phone }) => {
    const employee = { fullName, email, age, phone };
    removeUndefinedProperties(employee);
    console.log(employee);
    if (age) employee.age = parseInt(age);
    return employee;
}