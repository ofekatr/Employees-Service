import { Router } from "express";

import EmployeesController from "../../resolvers/employees";

const router = Router();

// const RestaurantsController = require('../../controllers/restaurants');

// Handle request to /v/employees

router.post("/", EmployeesController.createtEmployee);

router.get("/:id", EmployeesController.readEmployee);

router.put("/:id", EmployeesController.updateEmployee);

router.delete("/:id", EmployeesController.deleteEmployee);

export default router;