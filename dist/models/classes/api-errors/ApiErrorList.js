"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorList = void 0;
const ApiError_1 = require("./ApiError");
const api_errors_1 = __importDefault(require("../../../constants/api-errors"));
const api_errors_2 = require("../../enums/api-errors");
class ApiErrorList extends ApiError_1.BaseApiError {
    constructor(i_ErrorData, i_Errors) {
        super(i_ErrorData);
        this.errors = i_Errors;
    }
    static InvalidEmployeeDataError(i_Errors) {
        const errorData = api_errors_1.default.get(api_errors_2.ErrorType.INVALID_EMPLOYEE_ID);
        return new ApiErrorList(errorData, i_Errors);
    }
}
exports.ApiErrorList = ApiErrorList;
//# sourceMappingURL=ApiErrorList.js.map