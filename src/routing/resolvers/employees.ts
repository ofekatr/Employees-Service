/**
 * Employees API resolvers.
 */

import _ from "lodash";

import { IEmployeeData } from "../../models/employees";
import { validateCreateEmployeeData, validateUpdateEmployeeData } from "../../utils/validators/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";
import { extractEmployeeData } from "../../utils/type-utils/employees";
import { BaseApiError } from "../../models/classes/api-errors/ApiError";
import { ApiErrorList } from "../../models/classes/api-errors/ApiErrorList";

/**
 * Resolver for creating a new employee.
 * @param req The request object.
 * @param res The response object
 * @param next The next resolver function.
 */
const createtEmployee = (req, res, next) => {
    try {
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        const errors = validateCreateEmployeeData(i_Employee);

        // If the employee data is invalid.
        if (!_.isEmpty(errors)) {
            throw ApiErrorList.InvalidEmployeeDataError(errors);
        }

        const createdEmployee = EmployeesAccessLayer.createtEmployee(i_Employee);
        res.json({
            data: createdEmployee,
        });
    } catch (err) {
        next(err);
    }
};

/**
 * Resolver for updating an existing employee by id.
 * @param req The request object.
 * @param res The response object
 * @param next The next resolver function.
 */
const updateEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        const errors = validateUpdateEmployeeData(i_Employee);

        // If the employee data is invalid.
        if (!_.isEmpty(errors)) {
            throw ApiErrorList.InvalidEmployeeDataError(errors);
        }

        // If the employee does not exist.
        if (!EmployeesAccessLayer.employeeExists(id)) {
            throw BaseApiError.EmployeeNotFoundError();
        }

        const updatedEmployee = EmployeesAccessLayer.updateEmployee(id, i_Employee);
        res.json({
            data: updatedEmployee,
        });
    } catch (err) {
        next(err);
    }
};

/**
 * Resolver for getting an existing employee by id.
 * @param req The request object.
 * @param res The response object
 * @param next The next resolver function.
 */
const readEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = EmployeesAccessLayer.readEmployee(id);

        // If the employee does not exist.
        if (!employee) {
            throw BaseApiError.EmployeeNotFoundError();
        }

        res.json({
            data: employee,
        });
    } catch (err) {
        return next(err);
    }
};

/**
 * Resolver for deleting an existing employee by id.
 * @param req The request object.
 * @param res The response object
 * @param next The next resolver function.
 */
const deleteEmployee = (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEmployee = EmployeesAccessLayer.deleteEmployee(id);
        if (!deletedEmployee) {
            throw BaseApiError.EmployeeNotFoundError();
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