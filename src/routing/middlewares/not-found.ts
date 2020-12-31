/**
 * Resource not found middleware.
 */

import { BaseApiError } from "../../models/classes/api-errors/ApiError"
import ErrorDataMap from "../../constants/api-errors";
import { ErrorType } from "../../models/enums/api-errors";
/**
 * Resource not found middleware.
 */
export default (_, __, next) => {
    const errorData = ErrorDataMap.get(ErrorType.RESOURCE_NOT_FOUND)!;
    const err = new BaseApiError(errorData);
    return next(err);
}