"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.updateUser = exports.deleteUser = exports.createUser = void 0;
const users_model_1 = __importDefault(require("./../models/users.model"));
function createUser(userData) {
    return new Promise((resolve, reject) => {
        let user = new users_model_1.default({
            mail: userData.mail,
            name: userData.name,
            reg_timestamp: Date.now()
        });
        user.save()
            .then(() => {
            resolve({
                code: 200
            });
        })
            .catch((err) => {
            console.log(err.message);
            reject({
                code: 500
            });
        });
    });
}
exports.createUser = createUser;
function deleteUser(userName) {
    return new Promise((resolve, reject) => {
        // Delete user from users collection
        users_model_1.default.findOneAndDelete({ name: userName }).exec()
            .then(() => {
            resolve({
                code: 200
            });
        })
            .catch((err) => {
            reject({
                code: 505
            });
        });
        // TODO: Implement cascade logic when we are deleting users -> Theoreticaly, when we remove a user we have to close, or something like that, chat rooms composed by two people (this user and other person)
    });
}
exports.deleteUser = deleteUser;
function updateUser(userName, updateData) {
    return new Promise((resolve, reject) => {
        users_model_1.default.aggregate([{
                $match: {
                    name: userName
                }
            }, {
                $set: updateData
            }]).exec()
            .then((result) => {
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
exports.updateUser = updateUser;
function getUserData(userName) {
    return new Promise((resolve, reject) => {
        users_model_1.default.find({ name: userName }).lean()
            .then((result) => {
            if (result.length != 1) {
                resolve({
                    code: 404
                });
            }
            else {
                resolve({
                    result: result,
                    code: 200
                });
            }
        })
            .catch((err) => {
            reject({
                code: 500
            });
        });
    });
}
exports.getUserData = getUserData;
