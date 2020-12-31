"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../models/classes/api-errors/ApiError");
const api_errors_1 = __importDefault(require("../../constants/api-errors"));
const api_errors_2 = require("../../models/enums/api-errors");
exports.default = (_, __, next) => {
    const errorData = api_errors_1.default.get(api_errors_2.ErrorType.RESOURCE_NOT_FOUND);
    const err = new ApiError_1.BaseApiError(errorData);
    return next(err);
};
//# sourceMappingURL=not-found.js.map