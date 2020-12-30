export class ApiError {
    status: number;
    message: string;

    constructor(i_Status: number, i_Message: string) {
        this.status = i_Status;
        this.message = i_Message;
    }

    public static MissingEmployeeDataError() {
        return new ApiError(600, "Missing employee data.");
    }
    public static EmployeeNotFoundError() {
        return new ApiError(601, "The employee does not exist.");
    }

    public static InvalidEmployeeId() {
        return new ApiError(602, "This employee id is invalid.");
    }
}

export class ApiInputError extends ApiError {
    errors: string[];

    constructor(i_Errors) {
        super(600, "Invalid employee data.");
        this.errors = i_Errors;
    }
}