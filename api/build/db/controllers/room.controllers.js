"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChatRoom = exports.createChatRoom = exports.getMsgsByRoom = void 0;
const rooms_model_1 = __importDefault(require("./../models/rooms.model"));
const msgs_model_1 = __importDefault(require("./../models/msgs.model"));
const mongoose_1 = __importDefault(require("mongoose"));
// Function to get all messages associated to a chatRoom
function getMsgsByRoom(chatRoomId) {
    return new Promise((resolve, reject) => {
        rooms_model_1.default.find({ _id: new mongoose_1.default.Types.ObjectId(chatRoomId) }).populate('msgs').lean() //TODO: Check if this populate command works or we have to do that by using aggregations
            .then((results) => {
            resolve({
                code: 200,
                result: results
            });
        })
            .catch((err) => {
            reject({
                code: 505
            });
        });
    });
}
exports.getMsgsByRoom = getMsgsByRoom;
// Function to create new chatRoom
function createChatRoom(roomObject) {
    return new Promise((resolve, reject) => {
        let _room = new rooms_model_1.default(roomObject).save()
            .then((r) => {
            resolve({
                code: 200
            });
        })
            .catch((err) => {
            reject({
                code: 505
            });
        });
    });
}
exports.createChatRoom = createChatRoom;
// Function to remove an existing chatRoom
async function deleteChatRoom(chatRoomId) {
    try {
        let _room = await rooms_model_1.default.findOneAndDelete({
            _id: new mongoose_1.default.mongo.ObjectId(chatRoomId)
        });
        await msgs_model_1.default.deleteMany({
            $in: ["_id", _room]
        });
        return {
            code: 200
        };
        // TODO: Check if this function works with
    }
    catch (err) {
        // TODO: Implement error handling
        return {
            code: 505
        };
    }
}
exports.deleteChatRoom = deleteChatRoom;
