/**
 * Error Related Constants.
 */

import { ErrorType } from "../models/enums/api-errors";
import { IErrorData } from "../models/interfaces/api-errors";

export default new Map<ErrorType, IErrorData>([
    [
        ErrorType.RESOURCE_NOT_FOUND, {
            message: "Resource not found.",
            status: 404

        }
    ],
    [
        ErrorType.EMPLOYEE_NOT_FOUND, {
            message: "Missing employee data.",
            status: 600

        }
    ],
    [
        ErrorType.INVALID_EMPLOYEE_DATA, {
            message: "Invalid employee data.",
            status: 601,
        }
    ],
    [
        ErrorType.EMPLOYEE_NOT_FOUND, {
            message: "The employee does not exist.",
            status: 602,
        }
    ],
    [
        ErrorType.INVALID_EMPLOYEE_ID, {
            message: "This employee id is invalid.",
            status: 603
        }
    ],
]); 