"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8080;
const server = app_1.default.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
exports.default = server;
