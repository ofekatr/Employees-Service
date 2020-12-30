import { IEmployeeData } from "../../models/employees";
import { validateEmployeeData } from "../../utils/validators/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";
import { extractEmployeeData } from "../../utils/types";
import { ApiError } from "../../models/api-error";

const createtEmployee = (req, res, next) => {
    const i_Employee: IEmployeeData = extractEmployeeData(req.body);
    if (validateEmployeeData(i_Employee)) {
        const createdEmployee = EmployeesAccessLayer.createtEmployee(i_Employee);
        res.json({
            data: createdEmployee,
        });
    } else {
        return next(ApiError.InvalidEmployeeDataError());
    }
};

const updateEmployee = (req, res, next) => {
    const { id } = req.params;
    const i_Employee: IEmployeeData = extractEmployeeData(req.body);
    if (validateEmployeeData(i_Employee)) {
        const updatedEmployee = EmployeesAccessLayer.updateEmployee(id, i_Employee);
        res.json({
            data: updatedEmployee,
        });
    } else {
        return next(ApiError.InvalidEmployeeDataError());
    }
};

const readEmployee = (req, res, next) => {
    const { id } = req.params;
    const employee = EmployeesAccessLayer.readEmployee(id);
    if (employee) {
        res.json({
            data: employee,
        });
    }
    else {
        return next(ApiError.EmployeeNotFoundError());
    }
};

const deleteEmployee = (req, res, next) => {
    const { id } = req.params;
    const deletedEmployee = EmployeesAccessLayer.deleteEmployee(id);
    if (deletedEmployee) {
        res.json({
            data: deletedEmployee,
        });
    } else {
        return next(ApiError.EmployeeNotFoundError());
    }
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}