import _ from "lodash";

import { IEmployeeData } from "../../models/employees";
import { validateCreateEmployeeData, validateUpdateEmployeeData } from "../../utils/validators/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";
import { extractEmployeeData } from "../../utils/type-utils/employees";
import { ApiError, ApiInputError } from "../../models/api-error";

const createtEmployee = (req, res, next) => {
    try {
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        const errors = validateCreateEmployeeData(i_Employee);
        if (!_.isEmpty(errors)) {
            throw new ApiInputError(errors);
        }
        const createdEmployee = EmployeesAccessLayer.createtEmployee(i_Employee);
        res.json({
            data: createdEmployee,
        });
    } catch (err) {
        next(err);
    }
};

const updateEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        console.log(i_Employee);
        const errors = validateUpdateEmployeeData(i_Employee);
        if (!_.isEmpty(errors)) {
            throw new ApiInputError(errors);
        }
        if (!EmployeesAccessLayer.employeeExists(id)) {
            throw ApiError.EmployeeNotFoundError();
        }
        const updatedEmployee = EmployeesAccessLayer.updateEmployee(id, i_Employee);
        res.json({
            data: updatedEmployee,
        });
    } catch (err) {
        next(err);
    }
};

const readEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = EmployeesAccessLayer.readEmployee(id);
        if (!employee) {
            throw ApiError.EmployeeNotFoundError();
        }
        res.json({
            data: employee,
        });
    } catch (err) {
        return next(err);
    }
};

const deleteEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEmployee = EmployeesAccessLayer.deleteEmployee(id);
        if (!deletedEmployee) {
            throw ApiError.EmployeeNotFoundError();
        }
        res.json({
            data: deletedEmployee,
        });
    } catch (err) {
        next(err);
    }
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}