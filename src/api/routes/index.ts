import express from "express";
import morgan from "morgan";

import ApiRouter from "./api";
// const apiErrorHandler = require('../middlewares/error-handlers');

const defApiVersion = "0.1";
const { API_V = defApiVersion  } = process.env;
const apiPath = `/api/v${API_V}`;

const router = express.Router();

// const { TestMW } = require('../middlewares');

// router.use([morgan('tiny'), express.json(), TestMW]);

router.use(express.json());

router.use(morgan("tiny"));

router.use(`${apiPath}`, ApiRouter);

// router.use(apiErrorHandler);

export default router;