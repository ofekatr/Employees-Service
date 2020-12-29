import { IEmployee } from "models/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";

const createtEmployee = (req, res) => {
    const i_Employee: IEmployee = req.body;
    const createdEmployee = EmployeesAccessLayer.createtEmployee(i_Employee);
    res.json({
        data: createdEmployee,
    });
};

const updateEmployee = (req, res) => {
    const { id } = req.params;
    const i_Employee: IEmployee = req.body;
    const updatedEmployee = EmployeesAccessLayer.updateEmployee(id, i_Employee);
    res.json({
        data: updatedEmployee,
    });
};

const readEmployee = (req, res) => {
    const { id } = req.params;
    const employee = EmployeesAccessLayer.readEmployee(id);
    res.json({
        data: employee,
    });
};

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    const deletedEmployee = EmployeesAccessLayer.deleteEmployee(id);
    res.json({
        data: deletedEmployee,
    });
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}