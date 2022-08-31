"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const errors_1 = require("./errors");
const connectDb = () => {
    const dbOptions = {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        authSource: process.env.DB_NAME,
        authMechanism: "DEFAULT"
    };
    const db_uri = `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}`;
    mongoose_1.default.connect(db_uri);
    // Control connection and error events
    mongoose_1.default.connection.on('connected', () => {
        console.log(`Connected to Database`);
    });
    mongoose_1.default.connection.on('error', (error) => {
        throw new errors_1.dbInternalError(error.message);
    });
};
exports.default = connectDb;
