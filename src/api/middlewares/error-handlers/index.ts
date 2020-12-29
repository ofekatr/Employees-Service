export default (err, _, res, next) => {
    console.log(err);
    if (typeof err === IError) {
        res.status(err.code).json({
            message: err.msg,
            errors: err.errors
        });
        return next(err);
    }
    res.status(500).send("An internal error. Please report to an administrator.");
    return next(err);
}