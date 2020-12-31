"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEmployeeData = void 0;
const objects_1 = require("./objects");
const extractEmployeeData = ({ fullName, email, age, phone }) => {
    const employee = { fullName, email, age, phone };
    objects_1.removeUndefinedProperties(employee);
    if (age)
        employee.age = parseInt(age);
    return employee;
};
exports.extractEmployeeData = extractEmployeeData;
//# sourceMappingURL=employees.js.map