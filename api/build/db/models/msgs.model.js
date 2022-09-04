"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const msgSchema = new mongoose_1.Schema({
    content: { type: String, required: true, unique: true },
    from: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "users" },
    to: { type: mongoose_1.Schema.Types.ObjectId, require: true, ref: "users" },
    timestamp: { type: Number, required: true }
});
const msgModel = (0, mongoose_1.model)('msgs', msgSchema);
exports.default = msgModel;
