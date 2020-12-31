"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_1 = __importDefault(require("../../../resolvers/employees"));
const router = express_1.Router();
router.post("/", employees_1.default.createtEmployee);
router.get("/:id", employees_1.default.readEmployee);
router.put("/:id", employees_1.default.updateEmployee);
router.delete("/:id", employees_1.default.deleteEmployee);
exports.default = router;
//# sourceMappingURL=employees.js.map