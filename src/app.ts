require("dotenv").config();
import express from "express";

const defPort = 4000;

const { PORT = defPort } = process.env;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});