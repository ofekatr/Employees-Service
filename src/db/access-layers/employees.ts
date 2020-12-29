import { IEmployee } from "models/employees";

const employees: Map<number, IEmployee> = new Map();

const createtEmployee = (i_Employee: IEmployee) => {
    const { id } = i_Employee;
    employees.set(id, i_Employee);
    return employees.get(id);
};
const updateEmployee = (i_Id: number, i_Employee: IEmployee) => {
    employees.set(i_Id, i_Employee);
    return employees.get(i_Id);
};

const readEmployee = (i_Id: number) => employees.get(i_Id);

const deleteEmployee = (i_Id: number) => {
    const deletedEmployee = employees.get(i_Id);
    employees.delete(i_Id);
    return deletedEmployee;
}

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
}