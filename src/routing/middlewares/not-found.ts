/**
 * Resource not found middleware.
 */

import { BaseApiError } from "../../models/api-errors/ApiError"

/**
 * Resource not found middleware.
 */
export default (_, __, next) => {
    const err = new BaseApiError(404, "Not Found.");
    return next(err);
}