"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// USERS END POINTS
router.get('/user/:userName', (req, resp) => {
});
router.post('/addUser', (req, resp) => {
});
router.post('/deleteUser/:userName', (req, resp) => {
});
router.post('/updateUser/:userName', (req, resp) => {
});
// MSGS END POINTS
router.get('/msgs/:chatroomId', (req, resp) => {
});
router.post('/sendMsg', (req, resp) => {
});
router.post('/deleteMsg', (req, resp) => {
});
exports.default = router;
