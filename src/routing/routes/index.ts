/**
 * Router definition.
 */

import express from "express";
import morgan from "morgan";

import ApiRouterV0_1 from "./api/v0.1";
import errorsMiddleware from "../middlewares/error-handling";
import notFoundMiddleware from "../middlewares/not-found";
import serverConfig from "../../configs/ServerConfig.json";

const defApiVersion = "0.1";
const { apiVersion = defApiVersion } = serverConfig;
const apiPath = `/api/v${apiVersion}`;

console.log(apiPath);

const router = express.Router();

// Access to body arguments.
router.use(express.json());

// Log received requests.
router.use(morgan("tiny"));

// API Routing with the current available versions.
router.use(`${apiPath}`, ApiRouterV0_1);

// Routing for non existing resources.
router.use(notFoundMiddleware);

// Error handling.
router.use(errorsMiddleware);

export default router;