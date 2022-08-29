"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInternalError = exports.dbConnectionError = void 0;
class dbConnectionError extends Error {
    constructor(message) {
        super();
        this.message = message || "Something went wrong while trying to establish database connection";
        this.name = "dbConnectionError";
    }
}
exports.dbConnectionError = dbConnectionError;
class dbInternalError extends Error {
    constructor(message) {
        super();
        this.message = message || "Internal error during the operation";
        this.name = "dbInternalError";
    }
}
exports.dbInternalError = dbInternalError;
