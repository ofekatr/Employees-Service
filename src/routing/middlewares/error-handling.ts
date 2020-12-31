import { ApiError } from "../../models/api-error";

const defStatus = 500;
const defMessage = "An error has occured.";

export default (err, _, res, __) => {
    if (err instanceof ApiError) {
        res.status(err.status).json({
            error: {
                ...err
            }
        });
        return;
    }
    res.status(defStatus).json({
        error: {
            message: defMessage,
        }
    });
}