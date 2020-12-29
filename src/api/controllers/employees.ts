import { IEmployee } from "models/employees";
import EmployeesAccessLayer from "../../db/access-layers/employees";

const createtEmployee = (req, res) => {
    const newEmployee: IEmployee = req.body;
    EmployeesAccessLayer.createtEmployee(newEmployee);
    res.send(true);
}

const updateEmployee = (req, res) => {
    const { id } = req.params;
    const updatedEmployee: IEmployee = req.body;
    EmployeesAccessLayer.updateEmployee(id, updatedEmployee);
    res.send(true);
}

const readEmployee = (req, res) => {
    const { id } = req.params;
    res.json(EmployeesAccessLayer.readEmployee(id));
}

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    EmployeesAccessLayer.deleteEmployee(id);
    res.send(true);
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}