/**
 * Error handling middleware.
 */

import { BaseApiError } from "../../models/api-errors/ApiError";

const defStatus = 500;
const defMessage = "An error has occured on the server.";

/**
 * Error handling middleware.
 */
export default (err, _, res, __) => {
    // Implemented API error case.
    if (err instanceof BaseApiError) {
        res.status(err.status).json({
            error: {
                ...err
            }
        });
        return;
    }

    // Default error case.
    res.status(defStatus).json({
        error: {
            message: defMessage,
        }
    });
}