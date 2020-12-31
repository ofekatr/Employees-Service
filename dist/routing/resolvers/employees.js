"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const employees_1 = require("../../utils/validators/employees");
const employees_2 = __importDefault(require("../../db/access-layers/employees"));
const employees_3 = require("../../utils/type-utils/employees");
const ApiError_1 = require("../../models/classes/api-errors/ApiError");
const ApiErrorList_1 = require("../../models/classes/api-errors/ApiErrorList");
const createtEmployee = (req, res, next) => {
    try {
        const i_Employee = employees_3.extractEmployeeData(req.body);
        const errors = employees_1.validateCreateEmployeeData(i_Employee);
        if (!lodash_1.default.isEmpty(errors)) {
            throw ApiErrorList_1.ApiErrorList.InvalidEmployeeDataError(errors);
        }
        const createdEmployee = employees_2.default.createtEmployee(i_Employee);
        res.json({
            data: createdEmployee,
        });
    }
    catch (err) {
        next(err);
    }
};
const updateEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const i_Employee = employees_3.extractEmployeeData(req.body);
        const errors = employees_1.validateUpdateEmployeeData(i_Employee);
        if (!lodash_1.default.isEmpty(errors)) {
            throw ApiErrorList_1.ApiErrorList.InvalidEmployeeDataError(errors);
        }
        if (!employees_2.default.employeeExists(id)) {
            throw ApiError_1.BaseApiError.EmployeeNotFoundError();
        }
        const updatedEmployee = employees_2.default.updateEmployee(id, i_Employee);
        res.json({
            data: updatedEmployee,
        });
    }
    catch (err) {
        next(err);
    }
};
const readEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = employees_2.default.readEmployee(id);
        if (!employee) {
            throw ApiError_1.BaseApiError.EmployeeNotFoundError();
        }
        res.json({
            data: employee,
        });
    }
    catch (err) {
        return next(err);
    }
};
const deleteEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEmployee = employees_2.default.deleteEmployee(id);
        if (!deletedEmployee) {
            throw ApiError_1.BaseApiError.EmployeeNotFoundError();
        }
        res.json({
            data: deletedEmployee,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.default = {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
};
//# sourceMappingURL=employees.js.map