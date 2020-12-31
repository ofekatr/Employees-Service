"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const v0_1_1 = __importDefault(require("./api/v0.1"));
const error_handling_1 = __importDefault(require("../middlewares/error-handling"));
const not_found_1 = __importDefault(require("../middlewares/not-found"));
const defApiVersion = "0.1";
const { API_V = defApiVersion } = process.env;
const apiPath = `/api/v${API_V}`;
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use(morgan_1.default("tiny"));
router.use(`${apiPath}`, v0_1_1.default);
router.use(not_found_1.default);
router.use(error_handling_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map