"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_1 = __importDefault(require("./employees"));
const router = express_1.Router();
router.use("/employees", employees_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map