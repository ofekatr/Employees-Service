import { IEmployee } from "models/employees";

const employees: Map<number, IEmployee> = new Map();

const createtEmployee = (i_Employee: IEmployee) => employees.set(i_Employee.id, i_Employee);
const updateEmployee = (i_Id: number, i_Employee: IEmployee) => employees.set(i_Id, i_Employee);
const readEmployee = (i_Id: number) => employees.get(i_Id);
const deleteEmployee = (i_Id: number) => employees.delete(i_Id);

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}