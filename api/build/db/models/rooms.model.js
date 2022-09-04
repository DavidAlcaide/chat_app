"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    users: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "users" }],
    creation_timestamp: { type: Number, required: true },
    closed: { type: Boolean, required: true },
    msgs: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "users" }]
});
const roomModel = (0, mongoose_1.model)('users', roomSchema);
exports.default = roomModel;
