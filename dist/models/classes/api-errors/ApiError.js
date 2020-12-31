"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiError = void 0;
const api_errors_1 = __importDefault(require("../../../constants/api-errors"));
const api_errors_2 = require("../../../models/enums/api-errors");
class BaseApiError {
    constructor({ status: i_Status, message: i_Message }) {
        this.status = i_Status;
        this.message = i_Message;
    }
    static MissingEmployeeDataError() {
        const errorData = api_errors_1.default.get(api_errors_2.ErrorType.MISSING_EMPLOYEE_DATA);
        return new BaseApiError(errorData);
    }
    static EmployeeNotFoundError() {
        const errorData = api_errors_1.default.get(api_errors_2.ErrorType.EMPLOYEE_NOT_FOUND);
        return new BaseApiError(errorData);
    }
    static InvalidEmployeeId() {
        const errorData = api_errors_1.default.get(api_errors_2.ErrorType.INVALID_EMPLOYEE_ID);
        return new BaseApiError(errorData);
    }
}
exports.BaseApiError = BaseApiError;
//# sourceMappingURL=ApiError.js.map