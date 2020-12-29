import express from "express";
import morgan from "morgan";

import ApiRouter from "./api";
import errorsMiddleware from "../middlewares/error-handling";
import notFoundMiddleware from "../middlewares/not-found";

const defApiVersion = "0.1";
const { API_V = defApiVersion  } = process.env;
const apiPath = `/api/v${API_V}`;

const router = express.Router();

router.use(express.json());

router.use(morgan("tiny"));

router.use(`${apiPath}`, ApiRouter);

router.use(notFoundMiddleware);

router.use(errorsMiddleware);

export default router;