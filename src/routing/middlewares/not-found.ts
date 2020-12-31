import { ApiError } from "../../models/api-error"

export default (_, __, next) => {
    const err = new ApiError(404, "Not Found.");
    return next(err);
}