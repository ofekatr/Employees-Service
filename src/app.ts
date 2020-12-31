require("dotenv").config();
import express from "express";
import cors from "cors";

import router from "./routing/routes";

const defPort = 8080;

const { PORT = defPort } = process.env;

const app = express();

// Enable cors.
app.use(cors());

// Add router.
app.use('/', router);

// Start server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});