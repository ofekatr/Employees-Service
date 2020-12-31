/**
 * API Input Error with errors list implementation.
 */

import { BaseApiError } from "./ApiError";
import ErrorDataMap from "../../../constants/api-errors";
import { IErrorData } from "../../interfaces/api-errors";
import { ErrorType } from "../../enums/api-errors";

export class ApiErrorList extends BaseApiError {
    errors: string[];

    constructor(i_ErrorData: IErrorData, i_Errors: string[]) {
        super(i_ErrorData);
        this.errors = i_Errors;
    }

    // Error for invalid fields in employee data.
    public static InvalidEmployeeDataError(i_Errors: string[]) {
        const errorData = ErrorDataMap.get(ErrorType.INVALID_EMPLOYEE_ID)!;
        return new ApiErrorList(errorData, i_Errors)
    }
}