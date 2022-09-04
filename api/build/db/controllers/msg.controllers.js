"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMsg = exports.getMsgsByUser = void 0;
const msgs_model_1 = __importDefault(require("../models/msgs.model"));
const mongoose_1 = __importDefault(require("mongoose"));
function getMsgsByUser(userName) {
    return new Promise((resolve, reject) => {
        msgs_model_1.default.aggregate([{
                $lookup: {
                    from: "users",
                    localField: "from",
                    foreignField: "_id",
                    as: "sender",
                }
            }, {
                $unwind: {
                    path: "$sender"
                }
            }, {
                $match: {
                    "sender.name": userName
                }
            }]).exec()
            .then((results) => {
            resolve({
                result: results,
                code: 200
            });
        })
            .catch();
    });
}
exports.getMsgsByUser = getMsgsByUser;
function deleteMsg(messageId) {
    return new Promise((resolve, reject) => {
        // Delete message from msgs collection
        msgs_model_1.default.findByIdAndDelete({ _id: new mongoose_1.default.Types.ObjectId(messageId) });
        // Delete message from rooms collection
        // TODO: Implement cascade logic when we are deleting a message
    });
}
exports.deleteMsg = deleteMsg;
