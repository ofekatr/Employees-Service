import { Router } from "express";

import EmployeesRouter from "./employees";

const router = Router();

// Routing for employee related API requests.
router.use("/employees", EmployeesRouter);

export default router;