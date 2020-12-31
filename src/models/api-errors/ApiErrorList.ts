/**
 * API Input Error with errors list implementation.
 */

import { BaseApiError } from "./ApiError";

export class ApiErrorList extends BaseApiError {
    errors: string[];

    constructor(i_Code, i_Message, i_Errors) {
        super(i_Code, i_Message);
        this.errors = i_Errors;
    }

    // Error for invalid fields in employee data.
    public static InvalidEmployeeDataError(i_Errors: string[]) {
        return new ApiErrorList(600, "Invalid employee data.", i_Errors);
    }
}