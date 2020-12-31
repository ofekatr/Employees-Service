/**
 * Base API Error implementation.
 */

export class BaseApiError {
    status: number;
    message: string;

    constructor(i_Status: number, i_Message: string) {
        this.status = i_Status;
        this.message = i_Message;
    }

    // Error for requests given with no employee data.
    public static MissingEmployeeDataError() {
        return new BaseApiError(600, "Missing employee data.");
    }

    // Error for non existing for employees.
    public static EmployeeNotFoundError() {
        return new BaseApiError(601, "The employee does not exist.");
    }

    // Error for invalid format of employee ID.
    public static InvalidEmployeeId() {
        return new BaseApiError(602, "This employee id is invalid.");
    }
}