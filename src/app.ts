require("dotenv").config();
import express from "express";
import cors from "cors";

import router from "./api/routes";

const defPort = 4000;

const { PORT = defPort } = process.env;

const app = express();

app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});