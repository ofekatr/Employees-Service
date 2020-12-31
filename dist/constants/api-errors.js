"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_errors_1 = require("../models/enums/api-errors");
exports.default = new Map([
    [
        api_errors_1.ErrorType.RESOURCE_NOT_FOUND, {
            message: "Resource not found.",
            status: 404
        }
    ],
    [
        api_errors_1.ErrorType.EMPLOYEE_NOT_FOUND, {
            message: "Missing employee data.",
            status: 600
        }
    ],
    [
        api_errors_1.ErrorType.INVALID_EMPLOYEE_DATA, {
            message: "Invalid employee data.",
            status: 601,
        }
    ],
    [
        api_errors_1.ErrorType.EMPLOYEE_NOT_FOUND, {
            message: "The employee does not exist.",
            status: 602,
        }
    ],
    [
        api_errors_1.ErrorType.INVALID_EMPLOYEE_ID, {
            message: "This employee id is invalid.",
            status: 603
        }
    ],
]);
//# sourceMappingURL=api-errors.js.map