import { IEmployeeData } from "../../models/employees";
import { validateEmployeeData } from "../../utils/validators/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";
import { extractEmployeeData } from "../../utils/types";
import { ApiError } from "../../models/api-error";
import { exception } from "console";

const createtEmployee = (req, res, next) => {
    try {
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        if (!validateEmployeeData(i_Employee)) {
            throw ApiError.InvalidEmployeeDataError();
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
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            throw ApiError.InvalidEmployeeId();
        }
        const i_Employee: IEmployeeData = extractEmployeeData(req.body);
        if (!validateEmployeeData(i_Employee)) {
            throw ApiError.InvalidEmployeeDataError();
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
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            throw ApiError.InvalidEmployeeId();
        }
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
        if (isNaN(id)) {
            throw ApiError.InvalidEmployeeId();
        }
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