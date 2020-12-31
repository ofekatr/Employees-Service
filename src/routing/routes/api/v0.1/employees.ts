/**
 * Employees API Router.
 */

import { Router } from "express";

import EmployeesResolver from "../../../resolvers/employees";

const router = Router();

// Create a new employee.
router.post("/", EmployeesResolver.createtEmployee);

// Get an existing employee via its id.
router.get("/:id", EmployeesResolver.readEmployee);

// Update an existing employee via its id.
router.put("/:id", EmployeesResolver.updateEmployee);

// Delete an existing employee via its id.
router.delete("/:id", EmployeesResolver.deleteEmployee);

export default router;