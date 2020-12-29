"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employees_1 = __importDefault(require("../../db/access-layers/employees"));
const createtEmployee = (req, res) => {
    const newEmployee = req.body;
    employees_1.default.createtEmployee(newEmployee);
    res.send(true);
};
const updateEmployee = (req, res) => {
    const { id } = req.params;
    const updatedEmployee = req.body;
    employees_1.default.updateEmployee(id, updatedEmployee);
    res.send(true);
};
const readEmployee = (req, res) => {
    const { id } = req.params;
    res.json(employees_1.default.readEmployee(id));
};
const deleteEmployee = (req, res) => {
    const { id } = req.params;
    employees_1.default.deleteEmployee(id);
    res.send(true);
};
exports.default = {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
};
//# sourceMappingURL=employees.js.map