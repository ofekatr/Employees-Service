import shortid from "shortid";

import { IEmployee, IEmployeeData } from "models/employees";

const employees: Map<number, IEmployee> = new Map();

const createtEmployee = (i_Employee: IEmployeeData) => {
    const id = shortid.generate();
    employees.set(id, { id, ...i_Employee });
    return employees.get(id);
};

const readEmployee = (i_Id: number) => employees.get(i_Id);

const updateEmployee = (i_Id: number, i_Employee: IEmployeeData) => {
    employees.set(i_Id, { id: i_Id, ...i_Employee });
    return employees.get(i_Id);
};

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