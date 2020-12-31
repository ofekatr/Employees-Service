"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../models/classes/api-errors/ApiError");
const defStatus = 500;
const defMessage = "An error has occured on the server.";
exports.default = (err, _, res, __) => {
    if (err instanceof ApiError_1.BaseApiError) {
        res.status(err.status).json({
            error: Object.assign({}, err)
        });
        return;
    }
    res.status(defStatus).json({
        error: {
            message: defMessage,
        }
    });
};
//# sourceMappingURL=error-handling.js.map