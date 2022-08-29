"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const errors_1 = require("./errors");
const connectDb = () => {
    const dbOptions = {
        dbName: 'chat_app',
        user: process.env.DB_NAME,
        pass: process.env.DB_PASS,
        authSource: process.env.DB_NAME
    };
    const db_uri = `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}`;
    mongoose_1.default.connect(db_uri, dbOptions)
        .then(() => {
        console.log(`Connected to database ${dbOptions.dbName}`);
    })
        .catch((err) => {
        throw new errors_1.dbConnectionError();
    });
    // Control connection and error events
    mongoose_1.default.connection.on('connected', () => { });
    mongoose_1.default.connection.on('error', (error) => {
        throw new errors_1.dbInternalError(error.message);
    });
};
exports.default = connectDb;
