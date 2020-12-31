"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const employees = new Map();
const createtEmployee = (i_Employee) => {
    const id = shortid_1.default.generate();
    employees.set(id, Object.assign({ id }, i_Employee));
    return employees.get(id);
};
const readEmployee = (i_Id) => employees.get(i_Id);
const updateEmployee = (i_Id, i_Employee) => {
    employees.set(i_Id, Object.assign(Object.assign({ id: i_Id }, employees.get(i_Id)), i_Employee));
    return employees.get(i_Id);
};
const deleteEmployee = (i_Id) => {
    const deletedEmployee = employees.get(i_Id);
    employees.delete(i_Id);
    return deletedEmployee;
};
const employeeExists = (i_Id) => employees.has(i_Id);
exports.default = {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
    employeeExists
};
//# sourceMappingURL=employees.js.map