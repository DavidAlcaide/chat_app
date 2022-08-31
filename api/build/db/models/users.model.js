"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, index: true },
    mail: { type: String, required: true, unique: true },
    reg_timestamp: { type: Number, required: true }
});
const userModel = (0, mongoose_1.model)('users', userSchema);
exports.default = userModel;
