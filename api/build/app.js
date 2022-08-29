"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./api/routes"));
const connectDb_1 = __importDefault(require("./db/connectDb"));
(0, config_1.default)();
(0, connectDb_1.default)();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
exports.default = app;
