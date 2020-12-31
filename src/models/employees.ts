/**
 * Employee related interfaces
 */

export interface IEmployeeData {
    fullName: string;
    age: number;
    email: string;
    phone: string;
}

export interface IEmployee extends IEmployeeData {
    id: string;
}