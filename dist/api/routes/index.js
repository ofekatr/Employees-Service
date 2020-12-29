"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const defApiVersion = "0.1";
const { API_V = defApiVersion } = process.env;
const apiPath = `/api/v${API_V}`;
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use(`${apiPath}`, api_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map