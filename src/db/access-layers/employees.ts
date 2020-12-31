/**
 * Employees Access Layer.
 */
import shortid from "shortid";

import { IEmployee, IEmployeeData } from "models/employees";

// Employees map to simulate a Database. Maps employee ID to employee.
const employees: Map<string, IEmployee> = new Map();

/**
 * Add a new employee to the map.
 * @param i_Employee The new employee to be added to the map.
 */
const createtEmployee = (i_Employee: IEmployeeData) => {
    const id = shortid.generate();
    employees.set(id, { id, ...i_Employee });
    return employees.get(id);
};

/**
 * Get an existing employee by an ID.
 * @param i_Id An employee ID.
 */
const readEmployee = (i_Id: string) => employees.get(i_Id);

/**
 * Update an existing emlpoyee's data by an ID.
 * @param i_Id An employee ID.
 * @param i_Employee Updated properties for the employee.
 */
const updateEmployee = (i_Id: string, i_Employee: IEmployeeData) => {
    employees.set(i_Id, { id: i_Id, ...employees.get(i_Id), ...i_Employee });
    return employees.get(i_Id);
};

/**
 * Delete an existing employee by an ID.
 * @param i_Id An emlpoyee ID.
 */
const deleteEmployee = (i_Id: string) => {
    const deletedEmployee = employees.get(i_Id);
    employees.delete(i_Id);
    return deletedEmployee;
}

/**
 * Check if an employee exists by an ID.
 * @param i_Id An employee ID.
 */
const employeeExists = (i_Id: string) => employees.has(i_Id);

export default {
    createtEmployee,
    updateEmployee,
    readEmployee,
    deleteEmployee,
    employeeExists
}