/**
 * Base API Error implementation.
 */

import { IErrorData } from "../../interfaces/api-errors";
import ErrorDataMap from "../../../constants/api-errors";
import { ErrorType } from "../../../models/enums/api-errors";

export class BaseApiError {
    status: number;
    message: string;

    constructor({ status: i_Status, message: i_Message }: IErrorData) {
        this.status = i_Status;
        this.message = i_Message;
    }

    // Error for requests given with no employee data.
    public static MissingEmployeeDataError() {
        const errorData = ErrorDataMap.get(ErrorType.MISSING_EMPLOYEE_DATA)!;
        return new BaseApiError(errorData);
    }

    // Error for non existing for employees.
    public static EmployeeNotFoundError() {
        const errorData = ErrorDataMap.get(ErrorType.EMPLOYEE_NOT_FOUND)!;
        return new BaseApiError(errorData);
    }

    // Error for invalid format of employee ID.
    public static InvalidEmployeeId() {
        const errorData = ErrorDataMap.get(ErrorType.INVALID_EMPLOYEE_ID)!;
        return new BaseApiError(errorData);
    }
}