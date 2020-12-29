import { Router } from "express";

const router = Router();

// const RestaurantsController = require('../../controllers/restaurants');

// Handle request to /v/employees
router.get("/", (_, res) => res.send("Emplyees API."));

export default router;