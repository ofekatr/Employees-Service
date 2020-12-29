"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employees = new Map();
const createtEmployee = (i_Employee) => employees.set(i_Employee.id, i_Employee);
const updateEmployee = (i_Id, i_Employee) => employees.set(i_Id, i_Employee);
const readEmployee = (i_Id) => employees.get(i_Id);
const deleteEmployee = (i_Id) => employees.delete(i_Id);
exports.default = {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
};
//# sourceMappingURL=employees.js.map