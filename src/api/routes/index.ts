import { Router } from "express";

import ApiRouter from "./api";
// const apiErrorHandler = require('../middlewares/error-handlers');

const { API_V  } = process.env;
const versionUrl = API_V ? `v${API_V}` : "";
const router = Router();
const apiPath = `/api/${versionUrl}`;

// const { TestMW } = require('../middlewares');

// router.use([morgan('tiny'), express.json(), TestMW]);

router.use(`${apiPath}`, ApiRouter);

// router.use(apiErrorHandler);

export default router;