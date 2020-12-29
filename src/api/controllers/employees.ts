import { IEmployeeData } from "models/employees";
import { validateEmployeeData } from "../../utils/validators/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";

const createtEmployee = (req, res) => {
    const i_Employee: IEmployeeData = req.body;
    if (validateEmployeeData(i_Employee)) {
        const createdEmployee = EmployeesAccessLayer.createtEmployee(i_Employee);
        res.json({
            data: createdEmployee,
        });
    } else {
        res.send(false);
    }
};

const updateEmployee = (req, res) => {
    const { id } = req.params;
    const i_Employee: IEmployeeData = req.body;
    if (validateEmployeeData(i_Employee)) {
        const updatedEmployee = EmployeesAccessLayer.updateEmployee(id, i_Employee);
        res.json({
            data: updatedEmployee,
        });
    } else {
        res.send(false);
    }
};

const readEmployee = (req, res) => {
    const { id } = req.params;
    const employee = EmployeesAccessLayer.readEmployee(id);
    if (employee) {
        res.json({
            data: employee,
        });
    }
    else {
        res.send(false);
    }
};

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    const deletedEmployee = EmployeesAccessLayer.deleteEmployee(id);
    if (deletedEmployee) {
        res.json({
            data: deletedEmployee,
        });
    } else {
        res.send(false);
    }
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}