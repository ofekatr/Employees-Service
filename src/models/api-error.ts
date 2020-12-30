export class ApiError {
    status: number;
    message: string;

    constructor(i_Status: number, i_Message: string) {
        this.status = i_Status;
        this.message = i_Message;
    }

    public static InvalidEmployeeDataError() {
        return new ApiError(600, "Invalid employee data.");
    }
    public static EmployeeNotFoundError() {
        return new ApiError(601, "The employee does not exist.");
    }
}

export class ApiInputError extends ApiError {
    errors: string[];

    constructor(i_Status: number, i_Message: string, i_Errors) {
        super(i_Status, i_Message);
        this.errors = i_Errors;
    }
}