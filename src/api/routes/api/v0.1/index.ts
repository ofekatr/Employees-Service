import { Router } from "express";

import EmployeesRouter from "./employees";

const router = Router();

router.use("/employees", EmployeesRouter);

export default router;